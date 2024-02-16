
///////////////////////////////
//   Range section slider   //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });


///////////////////////////////
//   Inspire section slider   //
  var swiper = new Swiper(".inspire-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
      },
  });

  ///////////////////////////////
// releated products section slider   //
var swiper = new Swiper(".reletaed-Swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop:true,
  pagination: false,
  breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
});
// Product Magnified section




