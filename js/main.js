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
  const html = document.querySelector('html');
  const bodyOverlay = document.querySelector('.overlay');
  const hamburger = document.querySelector('.header__hamburger');
  const containerHeaderMin = document.querySelector('.header_min__container');
  if (hamburger) {
    hamburger.onclick = function() {
      containerHeaderMin.classList.add('active');
      html.classList.add("noscroll");
      bodyOverlay.classList.add("active");
    }
    containerHeaderMin.onclick = function(e){
      if (e.target.classList != "header_min__text") {
        containerHeaderMin.classList.remove('active');
        html.classList.remove("noscroll");
        bodyOverlay.classList.remove("active");
      }
    }
  }
  //end header_min

  // start overlay
  bodyOverlay.addEventListener('click', function() {
    html.classList.remove("noscroll");
    bodyOverlay.classList.remove("active");
    containerHeaderMin.classList.remove('active');
  })
  // end overlay

  // start reviewsSlider
  const reviewsSlider = document.querySelector('.reviews__swiper');
  if(reviewsSlider){
    var reviewSlider = new Swiper('.reviews__swiper', {
      loop: false,
      slidesPerView: 1.1,
      spaceBetween: 14,
      speed: 500,
      centeredSlides: true,
      pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
        renderBullet: function (index, className) {
          if((index + 1) >= 10) {
            var reviewscountzero = '';
          } else {
            var reviewscountzero = '0';
          }
          if (document.documentElement.clientWidth >= 1024) {
            return '<span class="' + className + '">' + '<span class="count">' + reviewscountzero + ((index + 1) + 3) + "</span>" + "</span>";
          } else if (document.documentElement.clientWidth >= 768) {
            return '<span class="' + className + '">' + '<span class="count">' + reviewscountzero + ((index + 1) + 1) + "</span>" + "</span>";
          } else {
            return '<span class="' + className + '">' + '<span class="count">' + reviewscountzero + (index + 1) + "</span>" + "</span>";
          }
        },
        clickable: true,
      },
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
      breakpoints: {
        768:{
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
          centeredSlides: false,
        }
      },
      on: {
        slideChange: function (swiper) {
          const count = document.querySelector('.reviews__pagination .swiper-pagination-bullet-active .count');
          if (count) {
            const reviewscount = document.querySelector('.reviews__count');
            reviewscount.innerHTML = count.innerHTML;
          }
        }
      }
    });
    if(document.querySelector('.reviews__list').children.length >= 10) {
      var reviewstotalzero = '';
    } else {
      var reviewstotalzero = '0';
    }
    if (document.documentElement.clientWidth >= 1024) {
      document.querySelector('.reviews__count').innerHTML = "04";
    } else if (document.documentElement.clientWidth >= 768) {
      document.querySelector('.reviews__count').innerHTML = "02";
    } else {
      document.querySelector('.reviews__count').innerHTML = "01";
    }
    document.querySelector('.reviews__total').innerHTML = reviewstotalzero + document.querySelector('.reviews__list').children.length;
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
      navigation: {
        nextEl: '.price__next',
        prevEl: '.price__prev',
      },
      pagination: {
        el: '.price__pagination',
        type: 'bullets',
        renderBullet: function (index, className) {
          if((index + 1) >= 10) {
            var pricecountzero = '';
          } else {
            var pricecountzero = '0';
          }
          if (document.documentElement.clientWidth <= 767) {
            return '<span class="' + className + '">' + '<span class="count">' + pricecountzero + (index + 1) + "</span>" + "</span>";
          } else {
            return '<span class="' + className + '">' + '<span class="count">' + pricecountzero + ((index + 1) + 1) + "</span>" + "</span>";
          }
        },
        clickable: true,
      },
      breakpoints: {
        1440: {
        spaceBetween: 40,
        slidesPerView: 2,
        centeredSlides: false,
        },
        768:{
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 21,
        },
      },
      on: {
        slideChange: function (swiper) {
          const count = document.querySelector('.price__pagination .swiper-pagination-bullet-active .count');
          if (count) {
            const pricecount = document.querySelector('.price__count');
            pricecount.innerText = count.innerText;
          }
        }
      }
    });
    if(document.querySelector('.price__list').children.length >= 10) {
      var pricetotalzero = '';
    } else {
      var pricetotalzero = '0';
    }
    if (document.documentElement.clientWidth <= 767) {
      document.querySelector('.price__count').innerHTML = "01";
    } else {
      document.querySelector('.price__count').innerHTML = "02";
    }
    document.querySelector('.price__total').innerHTML = pricetotalzero + document.querySelector('.price__list').children.length;
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
          slidesPerView: 2,
          },
        768:{
          slidesPerView: 2,
        },
      }
    });
    articlesSlider.on('transitionEnd', function() {
      deletingVideoEvent();
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
      slidesPerView: 1.1,
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


// start video
function video_load(e){
  e.onclick=null;
  e.innerHTML = '<iframe src="https://www.youtube.com/embed/'+e.getAttribute('vid')+'?autoplay=1&controls=1&loop=1&playlist='+e.getAttribute('vid')+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}
// end video

// start video_articles
function video_articles(e) {
  deletingVideoEvent()
  e.parentNode.classList.add("active")
  e.parentNode.children[1].innerHTML = '<iframe src="https://www.youtube.com/embed/'+e.getAttribute('vid')+'?autoplay=1&controls=1&loop=1&playlist='+e.getAttribute('vid')+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
}
// end video_articles

// start deletingVideoEvent

function deletingVideoEvent() {
  document.querySelectorAll('.articles__wrapper').forEach((e) => {
    if(e.classList.contains('active')) {
      e.classList.remove('active')
      e.children[1].innerHTML = ''
    }
  })
}

//end deletingVideoEvent

