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
    slidesPerView: 1.2,
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
      530: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          centeredSlides: false,
          spaceBetween: 20,
          pagination: {
            el: '.reviews__pagination',
            type:'fraction',
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
          },
        },
      768:{
        slidesPerView: 3,
        slidesPerGroup: 32,
        centeredSlides: false,
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
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,
        
    // pagination: {
    //   el: '.price__pagination_min',
    //   clickable: true,
    // },
    pagination: {
          el: '.price__pagination',
          type:'fraction',
          formatFractionCurrent: addZero,
          formatFractionTotal: addZero
          },
    navigation: {
      nextEl: '.price__next',
      prevEl: '.price__prev',
    },
    breakpoints: {
      1024: {
       
        }
      }
  });
}
// end reviewsSlider

function addZero(num){
    return (num > 9) ? num : '0' + num
}


// start questions 
  const questions = document.querySelectorAll('.questions__item')
  const answer = document.querySelectorAll('.questions__item_answer')
  console.log(questions)
  questions.forEach(function(question, i) {
    question.addEventListener('click', function (e) {
      answer[i].classList.toggle('active')
    })
  })
// end questions 