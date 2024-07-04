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