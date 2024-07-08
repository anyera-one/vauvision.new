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

// start employees
// const employeesSlider = document.querySelector('.employees__swiper');
// if(employeesSlider){
//   var aboutusSlider = new Swiper('.employees__swiper', {
//     loop: true,
//     slidesPerView: 4,
//     loopedSlides: 4,
//     spaceBetween: 20,
//     speed: 500,
//     navigation: {
//       nextEl: '.wiper-button-prevt',
//       prevEl: '.swiper-button-next',
//     },
//     breakpoints: {
//       // 1919: {
//       //   spaceBetween: 30,
//       // },
//       // 1023: {
//       //   slidesPerView: 'auto',
//       //   spaceBetween: 20,
//       // },
//     },
//   });
// }

const reviewsSlider = document.querySelector('.reviews__swiper');
if(reviewsSlider){
    var aboutusSlider = new Swiper('.reviews__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    // sliderPerGroup: 4,
    // loopedSlides: 4,
    spaceBetween: 60,
    speed: 500,
    slidesPerGroup: 4,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type:'fraction',
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1600: {
        // slidesPerView: 4,
        spaceBetween: 32,

     },
    }

  
  });
}

function addZero(num){
    return (num > 9) ? num : '0' + num;reviews__item
}
// end employees