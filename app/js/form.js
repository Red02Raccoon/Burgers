var MyForm = function(form, url) {
  this.form = form;
  this.url = url;
  this.init = function() {
    this.addListener(this.form);
  }
};

MyForm.prototype.addListener = function(form) {
  $(form).on('submit', $.proxy(this.submitForm, this));
};

MyForm.prototype.submitForm = function(e) {
  e.preventDefault();

  var $form = $(this.form), 
      defObject = this.ajaxForm($form, this.url);

  if (defObject) {

    defObject.done(function(ans) {
      var mes = ans.mes, status = ans.status;
      console.log(ans);

        var successMail = $('.popUp__mail-success'),
             errorMail = $('.popUp__mail-error');

      if (status === 'OK') {
        $form.trigger('reset');
                    successMail.bPopup();
      } else {
                    errorMail.bPopup();
      };
                      $(".popUp__mail-close").on("click", function(){
                     successMail.bPopup().close();
                });

                $(".popUp__mail-close").on("click", function(){
                     errorMail.bPopup().close();
                });

    });
  }
};

MyForm.prototype.ajaxForm = function(form, url) {
  if (!validation.validateForm(form)) {
    return false; // Возвращает false, если не проходит валидацию
  }
  // запрос
  var data = form.serialize(); // собираем данные из формы в объект data

  return $.ajax({
    // Возвращает Deferred Object
    type: 'POST',
    url: this.url,
    dataType: 'JSON',
    data: data
  }).fail(function(ans) {
    console.log('Проблемы в PHP');
    form.find('.error-mes').text('На сервере произошла ошибка').show();
  });
};