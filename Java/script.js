// GSAP Animations
gsap.from(".animate-text", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3
});




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

let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const links = [
    {
        github: "https://github.com/trion-project",
        demo: "https://trion-live.com",
        caseStudy: "https://trion-casestudy.com"
    },
    {
        github: "https://github.com/ecommerce-redesign",
        demo: "https://ecommerce-demo.com",
        caseStudy: "https://ecommerce-casestudy.com"
    },
    {
        github: "https://github.com/interactive-landing",
        demo: "https://interactive-landing.com",
        caseStudy: "https://interactive-casestudy.com"
    }
];

function updateSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === index) {
            slide.classList.add('active');
        }
    });

    // Update links
    document.getElementById('link1').href = links[index].github;
    document.getElementById('link2').href = links[index].demo;
    document.getElementById('link3').href = links[index].caseStudy;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Initialize the first slide as active
updateSlide(currentIndex);

