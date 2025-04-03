// GSAP Animations
gsap.from(".animate-text", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3
});

// Swiper Image Slider
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
