// Simple pop-up interaction
function showAlert() {
  alert("Let's connect! You can reach me on social media or shoot me a message.");
}

// Scroll-triggered animations
const observers = document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in, .fade-in-delay');

const revealOnScroll = () => {
  observers.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Add .show class with animation trigger on scroll
document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in, .fade-in-delay').forEach(el => {
  el.classList.add('observer-init');
});
