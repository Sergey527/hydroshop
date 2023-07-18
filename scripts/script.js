const swiper = new Swiper(".promo__swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper_products = new Swiper(".products-section__swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
  },
});
