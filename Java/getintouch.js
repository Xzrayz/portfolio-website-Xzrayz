// Contact form interaction
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
    const accepted = this.querySelector('input[type="checkbox"]').checked;

    if (!accepted) {
        alert("Please accept the terms and services.");
        return;
    }

    console.log("Form submitted:", { name, email, message });

    // Simulate a submission animation
    this.reset();
    alert("Thank you for getting in touch!");
});
