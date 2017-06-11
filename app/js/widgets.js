/*Виджет 1 - OnePagescroll*/
(function() {
  var display = $('.maincontent'), sections = $('.section'), inScroll = false;

  /*главная функция OnePagescroll*/
  var transitionFunc = function(numSection) {
    if (inScroll) return;
    inScroll = true;

    var position = numSection * -100 + '%';

    sections.eq(numSection).addClass('active').siblings().removeClass('active');
    display.css({
      transform: 'translate3d(0,' + position + ', 0)'
    });

    setTimeout(function() {
      inScroll = false;
      $('.menu-fix__item')
        .eq(numSection)
        .addClass('active')
        .siblings()
        .removeClass('active');
    }, 1001);
  };

  /*скроллим*/
  $('.wrapper').on('wheel', function(e) {
    var activeSection = sections.filter('.active'),
      nextSection = activeSection.next(),
      prevSection = activeSection.prev();

    if (e.originalEvent.deltaY > 0 && nextSection.length) {
      transitionFunc(nextSection.index());
    }

    if (e.originalEvent.deltaY < 0 && prevSection.length) {
      transitionFunc(prevSection.index());
    }
  });

  /*переход по ссылкам фиксированного меню, главного и стрелки 0-й секции*/
  $('[data-numLink]').on('click', function(e) {
    e.preventDefault();
    transitionFunc(parseInt($(this).attr('data-numLink')));
  });
})();

/*Виджет 2 - Slider*/
(function() {
  var moveSlide = function(slideNum) {
    var items = $('.burgers-slider__item'),
      activeSlide = items.filter('.active'),
      reqItem = items.eq(slideNum),
      reqIndex = reqItem.index(),
      duration = 700;

    if (reqItem.length) {
      items.animate(
        {
          left: -reqIndex * 100 + '%'
        },
        duration,
        function() {
          activeSlide.removeClass('active');
          reqItem.addClass('active');
        }
      );
    }
  };

  $('.burgers-slider__btn').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
      container = $this.closest('.burgers-slider'),
      items = container.find('.burgers-slider__item'),
      activeItem = items.filter('.active'),
      existedItem,
      edgeItem,
      reqItem;

    if ($this.hasClass('burgers-slider__btn_next')) {
      existedItem = activeItem.next();
      edgeItem = items.first();
    } else if ($this.hasClass('burgers-slider__btn_prev')) {
      existedItem = activeItem.prev();
      edgeItem = items.last();
    }

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
    moveSlide(reqItem);
  });
})();

/*Виджет 6  - подключение плагина маски*/
$(document).ready(function() {
  $('.phone-mask').inputmask('99-9999999'); //static mask
  $('.phone-mask').inputmask({ mask: '+3(999) 999 99 99' }); //specifying options
});

/*Виджет5  - подключение плагина модального окна*/
(function() {
  $('.section-reviews__button').bind('click', function(e) {
    e.preventDefault();
    $('.popUp').bPopup();
  });

  $('.popUp__close').on('click', function() {
    var bPopup = $('.popUp').bPopup();
    bPopup.close();
  });
})();

/*Виджет 4 - вертикальный аккордион*/
(function() {
  $('.teamDown__trigger').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
      itemParentLink = $this.closest('.teamDown__item'),
      container = $this.closest('.teamDown'),
      items = container.find('.teamDown__item'),
      boxHide = itemParentLink.find('.teamDown__content'),
      otherBox = container.find('.teamDown__content');

    if (!itemParentLink.hasClass('visit')) {
      items.removeClass('visit');
      itemParentLink.addClass('visit');
      otherBox.slideUp();
      boxHide.slideDown();
    } else {
      itemParentLink.removeClass('visit');
      boxHide.slideUp();
    }
  });
})();

/*Виджет 6 - горизонтальный аккордион*/
(function() {
  $('.menu-accor__trigger').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
      itemParentLink = $this.closest('.menu-accor__item'),
      container = $this.closest('.menu-accor'),
      items = container.find('.menu-accor__item'),
      boxHide = itemParentLink.find('.menu-accor__content'),
      otherBox = container.find('.menu-accor__content');

    if (!itemParentLink.hasClass('active')) {
      items.removeClass('active');
      itemParentLink.addClass('active');
      otherBox.css('width', '0');
      boxHide.css('width', '540');
    } else {
      itemParentLink.removeClass('active');
      boxHide.css('width', '0');
    }
  });
})();

/*Подключение карты*/
if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', myMap.init);
}


/*Валидация формы*/

if ($('#order').length) {
  var formOrder = new MyForm($('#order'), 'php/send.php');
  formOrder.init();
}

