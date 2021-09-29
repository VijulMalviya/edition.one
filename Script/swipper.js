var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });


 var ss = window.matchMedia( "(max-width: 992px)" );
 if (ss.matches) {
 
     var swiper = new Swiper(".mySwiper", {
         slidesPerView: 2,
         spaceBetween: 20,
         navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
           }
       });
  }

  
  