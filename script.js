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

document.querySelector(".nav.left").addEventListener("click", () => {
    alert("Previous project");
  });
  
  document.querySelector(".nav.right").addEventListener("click", () => {
    alert("Next project");
  });
  
  document.querySelector(".see-project").addEventListener("click", () => {
    alert("View full project details...");
  });
  

  document.querySelector('.contact-btn').addEventListener('click', () => {
    alert('Redirecting to contact form...');
  });
  
  // Add functionality to nav items if needed
  document.querySelectorAll('.footer-right li').forEach(item => {
    item.addEventListener('click', () => {
      alert(`Going to ${item.textContent}`);
    });
  });
  