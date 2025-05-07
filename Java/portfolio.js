// Entry Animation on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.entry-animation').style.opacity = '1';
});

// Optional: Add more animations or scroll effects here

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