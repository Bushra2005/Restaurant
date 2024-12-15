var swiper = new Swiper(".card_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        
      },
      480: {
        slidesPerView: 1,
        
      },
      760: {
        slidesPerView: 2,
        
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });