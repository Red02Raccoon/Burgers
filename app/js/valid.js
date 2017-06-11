var validation = (function() {
  var _memory = [];

  var validateForm = function(form) {
    var id = form.attr('id');
    if (_memory[id] == void 0) {
      _memory[id] = true;
      _setUpListeners(form);
    }

    var elements = form.find('input[data-content]').not('input[type="hidden"]');
    var radio = form.find('input[type="radio"]');
    var radioParent = radio.closest('.row__radio');
    var valid = true;

    $.each(elements, function(index, element) {
      var $element = $(element);
      var value = $element.val();

      if (!value.length) {
        _addError($element);
        valid = false;
      }
    });
    
    return valid;
  };

  function _setUpListeners(form) {
    $(form).on('keydown', '.error', _removeError);
    $(form).on('click', '.error', _removeError);
    $(form).on('reset', _clearForm);
    $('.wrapper').on('wheel', _clearForm);
    $('[data-numLink]').on('click', _clearFormLink);
  }

  function _removeError() {
    $(this).removeClass('error');
  }

  function _addError(element) {
    element.addClass('error');
    _createQtip(element, element.data('position'));
  }

  function _clearForm() {
    var $form = $(this);
    $form.find('.error').removeClass('error');
    $form.find('input[data-content]').trigger('hideTooltip');
  }

  function _clearFormLink() {
    var $form = $("form");
    $form.find('.error').removeClass('error');
    $form.find('input[data-content]').trigger('hideTooltip');
  }

  function _createQtip(element, direction) {
    direction = direction || 'left';
    position = {
      left: {
        my: 'center right',
        at: 'center left'
      },
      right: {
        my: 'center left',
        at: 'center right'
      },
      bottom: {
        my: 'top center',
        at: 'bottom center'
      },
      top: {
        my: 'bottom center',
        at: 'top center'
      }
    };

    element
      .qtip({
        content: {
          text: function() {
            return $(this).data('content');
          }
        },
        show: {
          event: 'show'
        },
        hide: {
          event: 'keydown click hideTooltip'
        },
        position: position[direction],
        style: {
          classes: 'qtip-mystyle qtip-light',
          tip: {
            height: 15,
            width: 20
          }
        }
      })
      .trigger('show');
  }

  return {
    validateForm: validateForm
  };
})();
