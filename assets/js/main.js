// 🟢 Training Fields Swiper
const trainingSwiper = new Swiper('.training-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    grabCursor: true,
    loop: true,
    breakpoints: {
        640: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
    },
});

// 🟢 Testimonials Swiper
const testimonialsSwiper = new Swiper('.testimonlia.soiwper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 },
        1280: { slidesPerView: 3.5 },
    },
});


