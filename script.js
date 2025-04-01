// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Form
const contactForm = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    // Validate name input
    if (nameInput.value.trim() === '') {
        alert('Name is required.');
        valid = false;
    }

    // Validate email input
    if (!emailInput.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    // Validate message input
    if (messageInput.value.trim() === '') {
        alert('Message cannot be empty.');
        valid = false;
    }

    if (valid) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();  // Reset form after successful submission
    }
});

// Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
