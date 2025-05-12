window.onload = () => {
  const entrance = document.getElementById("entrance");
  setTimeout(() => {
      entrance.style.display = "none";
      window.location.href = "main.html"; // Change to your main page
  }, 5000); // Adjust time if needed

  entrance.addEventListener("click", () => {
      entrance.style.display = "none";
      window.location.href = "main.html"; // Change to your main page
  });
};


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

let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const items = carousel.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}


const cursor = document.querySelector('.cursor');

// Move the cursor
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Detect hover on interactive elements
const hoverTargets = document.querySelectorAll('a, button');

hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
  });

  target.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });
});