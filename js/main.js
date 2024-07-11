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

// start reviewsSlider

const reviewsSlider = document.querySelector('.reviews__swiper');
if(reviewsSlider){
    var reviewSlider = new Swiper('.reviews__swiper', {
    loop: true,
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
        pagination: {
          el: '.reviews__pagination',
          type:'fraction',
          formatFractionCurrent: addZero,
          formatFractionTotal: addZero
        },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 60,
        centeredSlides: false,
        slidesPerGroup: 4,
        pagination: {
          el: '.reviews__pagination',
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
    loop: true,
    slidesPerView: 1.1,
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
        }
      },
      768:{
        slidesPerView: 2,
          slidesPerGroup: 2,
          centeredSlides: false,
          spaceBetween: 21,
          pagination: {
            el: '.price__pagination',
            type:'fraction',
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
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
        
    // pagination: {
    //   el: '.price__pagination_min',
    //   clickable: true,
    // },
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
        }
      },
      768:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
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
      var questionsitemNext = this.children[1].children[1];
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




const slider = document.querySelector('.advantages__swiper');

function mobileSlider() {
	if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			pagination: {
			 	el: '.advantages__pagination_min',
			    clickable: true,
            },
           
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});






