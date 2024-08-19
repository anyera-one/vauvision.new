window.addEventListener('DOMContentLoaded', () => {

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
      if (e.target.classList != "header_min__text" && e.target.classList === "header__languages") {
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

  // start language_popup
  const languagePRegion = document.querySelector('.language_popup__region');
  const languagePButton = document.querySelector('.language_popup__button');
  const languagePClose = document.querySelector('.language_popup__close');
  const languagePDesktop = document.querySelector('.header__language_desktop');
  const languagePMobile = document.querySelector('.header__language_mobile');
  const languageP = document.querySelector('.language_popup');
  const languagePLangRu = document.querySelector('.language_popup__language_ru');
  const languagePLangEn = document.querySelector('.language_popup__language_en');
  const languagePLangEs = document.querySelector('.language_popup__language_es');
  if(languageP) {
    languagePLangRu.addEventListener('click', function() {
      languageP.classList.remove("language_popup_en");
      languageP.classList.remove("language_popup_es");
      languageP.classList.add("language_popup_ru");
    })
    languagePLangEn.addEventListener('click', function() {
      languageP.classList.remove("language_popup_ru");
      languageP.classList.remove("language_popup_es");
      languageP.classList.add("language_popup_en");
    })
    languagePLangEs.addEventListener('click', function() {
      languageP.classList.remove("language_popup_ru");
      languageP.classList.remove("language_popup_en");
      languageP.classList.add("language_popup_es");
    })
    languagePButton.addEventListener('click', function() {
      if(languagePRegion.classList.contains('active')) {
        languagePRegion.classList.remove("active");
      } else {
        languagePRegion.classList.add("active");
      }
    })
    languagePClose.addEventListener('click', function() {
      html.classList.remove("noscroll");
      languageP.classList.remove("active");
      languagePRegion.classList.remove("active");
    })
    document.getElementById("language_popup__region_search").oninput = function(){
      var sparepartsinput, filter, i;
      var sparepartsinput = document.getElementById("language_popup__region_search");
      var filter = sparepartsinput.value.toUpperCase();
      var sparepartsfilter = document.getElementById("language_popup__filter");
      var searchparts = sparepartsfilter.getElementsByTagName("li");
      for (i = 0; i < searchparts.length; i++) {
        txtValue = searchparts[i].textContent || searchparts[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          searchparts[i].classList.remove('hidden');
        } else {
          searchparts[i].classList.add('hidden');
        }
      }
    }
    const languagePopupRName = document.querySelectorAll(".language_popup__region_name");
    languagePopupRName.forEach((i) =>
      i.addEventListener("click", function () {
        languagePRegion.classList.remove("active");
        document.querySelector(".language_popup__region_button").children[0].innerText = this.parentElement.children[0].innerText;
        document.querySelector(".language_popup__region_button").children[1].innerText = this.parentElement.children[1].innerText;
        document.querySelector(".language_popup__region_button").children[2].innerText = this.parentElement.children[2].innerText;
      })
    );
  }
  if(languagePDesktop) {
    languagePDesktop.addEventListener('click', function() {
      if(!this.parentElement.classList.contains('active')) {
        this.parentElement.classList.add("active");
        languagePMobile.parentElement.classList.remove("active");
      } else {
        this.parentElement.classList.remove("active");
        languagePMobile.parentElement.classList.remove("active");
      }
    })
    languagePMobile.addEventListener('click', function() {
      if(!this.parentElement.classList.contains('active')) {
        this.parentElement.classList.add("active");
        languagePDesktop.parentElement.classList.remove("active");
      } else {
        this.parentElement.classList.remove("active");
        languagePDesktop.parentElement.classList.remove("active");
      }
    })
    window.addEventListener('click', e => {
      const target = e.target
      if (!target.closest('.header__languages_desktop') && !target.closest('.header__languages_mobile')) {
        languagePMobile.parentElement.classList.remove("active");
        languagePDesktop.parentElement.classList.remove("active");
      }
    })
  }
  // end language_popup

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
          if (document.documentElement.clientWidth >= 1024) {
            if((index + 1) >= 7) {
              var reviewscountzero = '';
            } else {
              var reviewscountzero = '0';
            }
            return '<span class="' + className + '">' + '<span class="count">' + reviewscountzero + ((index + 1) + 3) + "</span>" + "</span>";
          } else if (document.documentElement.clientWidth >= 768) {
            if((index + 1) >= 9) {
              var reviewscountzero = '';
            } else {
              var reviewscountzero = '0';
            }
            return '<span class="' + className + '">' + '<span class="count">' + reviewscountzero + ((index + 1) + 1) + "</span>" + "</span>";
          } else {
            if((index + 1) >= 10) {
              var reviewscountzero = '';
            } else {
              var reviewscountzero = '0';
            }
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
        769:{
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 31,
          centeredSlides: false,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 60,
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
          if (document.documentElement.clientWidth <= 767) {
            if((index + 1) >= 10) {
              var pricecountzero = '';
            } else {
              var pricecountzero = '0';
            }
            return '<span class="' + className + '">' + '<span class="count">' + pricecountzero + (index + 1) + "</span>" + "</span>";
          } else {
            if((index + 1) >= 9) {
              var pricecountzero = '';
            } else {
              var pricecountzero = '0';
            }
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
        769:{
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
            pricecount.innerHTML = count.innerHTML;
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
      spaceBetween: 10,
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
      slidesPerView: 1.15,
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