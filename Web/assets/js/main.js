document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });
});
