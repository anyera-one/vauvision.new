window.addEventListener('DOMContentLoaded', () => {
  // start header
    window.addEventListener('scroll', () => { 
        let scrollTop = window.scrollY;
    let headerWrapper = document.querySelector('.header');
    if(scrollTop >= 10){
        headerWrapper.classList.add('hide');
    }else{    
        headerWrapper.classList.remove('hide');
    }
    });
  // end header

  // start header_min
  const hamburger = document.querySelector('.header__hamburger');
  if (hamburger) {
    const containerHeaderMin = document.querySelector('.header_min__container')
    hamburger.onclick = function() {
      containerHeaderMin.classList.add('active')
    }
    containerHeaderMin.onclick = function(e){
      if (e.target.classList != "header_min__text") {
        containerHeaderMin.classList.remove('active')
      }
    }
  }
  //end header_min

  // start reviewsSlider
  const reviewsSlider = document.querySelector('.reviews__swiper');
  if(reviewsSlider){
      var reviewSlider = new Swiper('.reviews__swiper', {
      // loop: true,
      slidesPerView: 1.1,
      spaceBetween: 14,
      speed: 500,
      slidesPerGroup: 1,
      centeredSlides: true,
      pagination: {
        el: '.reviews__pagination_min',
        clickable: true,
      },
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
      breakpoints: {
        768:{
          slidesPerView: 2,
          slidesPerGroup: 2,
          centeredSlides: false,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 60,
          centeredSlides: false,
          slidesPerGroup: 4,
          pagination: {
            el: '.reviews__pagination_max',
            type:'fraction',
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
            },
          }
        }
    });
  }
  // end reviewsSlider

  // start priceSlider
  const priceSlider = document.querySelector('.price__swiper');
  if(priceSlider){
      var pricesSlider = new Swiper('.price__swiper', {
      // loop: true,
      slidesPerView: 1.2,
      spaceBetween: 14,
      speed: 500,
      slidesPerGroup: 1,
      centeredSlides: true,
      pagination: {
        el: '.price__pagination_min',
        clickable: true,
      },
      navigation: {
        nextEl: '.price__next',
        prevEl: '.price__prev',
      },
      breakpoints: {
        1440: {
        spaceBetween: 40,
        },
        768:{
          slidesPerView: 2,
          slidesPerGroup: 2,
          centeredSlides: false,
          spaceBetween: 21,
          pagination: {
            el: '.price__pagination_max',
            type:'fraction',
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
          },
        },
      },
    });
  }
  // end reviewsSlider

  // start articles__swiper
  const articleSlider = document.querySelector('.articles__swiper');
  if(articleSlider){
      var articlesSlider = new Swiper('.articles__swiper', {
      loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 28,
      slidesPerGroup: 1,
      pagination: {
            el: '.articles__pagination',
            type:'fraction',
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
            },
      navigation: {
        nextEl: '.articles__next',
        prevEl: '.articles__prev',
      },
      breakpoints: {
        1440: {
          spaceBetween: 55,
          },
        768:{
          slidesPerView: 2,
          slidesPerGroup: 2,

        },
      }
    });
  }
  // end articles__swiper

  function addZero(num){
      return (num > 9) ? num : '0' + num
  }

  // start questions
  if(document.querySelector('.questions__item')) {
    var questionsitem = document.getElementsByClassName("questions__item");
    var i;
    
    for (i = 0; i < questionsitem.length; i++) {
      questionsitem[i].onclick = function(e) {
        var questionsitemNext = this.children[0].children[1];
        var questionsitembottom = document.getElementsByClassName("questions__item_bottom");
        var questionsitemActive = document.getElementsByClassName("questions__item active");
    
        if (questionsitemNext.style.maxHeight) {
          questionsitemNext.style.maxHeight = null;
          this.classList.remove("active");
        } else {
          for (var q = 0; q < questionsitemActive.length; q++) {
            questionsitemActive[q].classList.remove("active");
            questionsitembottom[q].classList.remove("active");
          }
          for (var p = 0; p < questionsitembottom.length; p++) {
            this.classList.remove("active");
            questionsitembottom[p].classList.remove("active");
            questionsitembottom[p].style.maxHeight = null;
          }
          questionsitemNext.style.maxHeight = questionsitemNext.scrollHeight + "px";
          this.classList.add("active");
        }
      };
    }
  }
  // end questions 



  // start resizableSwiper
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.advantages__swiper.swiper',
    {
      // loop: true,
      slidesPerView: 1.2,
      spaceBetween: 14,
      centeredSlides: true,
      pagination: {
        el: '.advantages__pagination_min',
        clickable: true,
      },
    },
    someFunc
  );
  // end resizableSwiper
});




