var SlideLine = function($el, options) {
  var slideLine = this;

  defaults = {
    ratio: 1
  }

  slideLine.options = $.extend({}, defaults, options)

  slideLine.$el = $el;
  slideLine.$children = slideLine.$el.find('li');
  slideLine.$box = slideLine.$el.closest('.slider');
  if (!slideLine.$box.length) {
    slideLine.$box = $('body');
  }

  $(window).on('resize', slideLine.init.bind(slideLine));

  setInterval(function() {
    window.requestAnimationFrame(slideLine.draw.bind(slideLine))
  }, 1);

  slideLine.init();
};

SlideLine.prototype.init = function() {
  var slideLine = this;

  slideLine.width = 0;
  slideLine.offset = this.$box.offset().top;
  slideLine.viewport = {
    height: window.innerHeight,
    width: window.innerWidth
  };

  slideLine.trigger = slideLine.offset - slideLine.viewport.height / 2;
  ///// Триггер равен отступу контейнера до верха страницы минус высота вьюпорта поделенная на два


  // slideLine.$children.each(function(){
  //   slideLine.width += $(this).outerWidth(true);
  // });
  slideLine.width = slideLine.$el.width();

  slideLine.maxShift = slideLine.width - slideLine.$box.width();
  ///// максимальный сдвиг равен ширине слайдлайна минус ширина body

  // slideLine.$el.css({
  //   width: slideLine.width
  // });
  //
};

SlideLine.prototype.draw = function() {
  var slideLine = this;
  var position = window.pageYOffset;
  var shift = ((position - slideLine.trigger) * slideLine.options.ratio).toFixed();
      // Сдвиг равен верхнему отступу от страницы минус значение триггера результат помноженный на ратио

  if (shift < 0) shift = 0;
  if (shift > slideLine.maxShift) shift = slideLine.maxShift;

  // if (shift !== slideLine.lastShift) {
    slideLine.$el.css({
      transform: 'translate3d(-' + shift + 'px, 0, 0)'
    })

    slideLine.lastShift = shift;
  // }
};

$.fn.slideLine = function(options) {
  $(this).each(function() {
    new SlideLine($(this), options);
  });
};
