/*$(function(){
    $("#order").on("submit", function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize(); 
        $.ajax({
            url: "php/formail.php",
            type: "POST",
            data: formData,
            success: function(data) {
                var successMail = $('.popUp__mail-success'),
                    errorMail = $('.popUp__mail-error');

                if (data.status) {
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

                form.trigger("reset");
            }
         });
    });
});
*/