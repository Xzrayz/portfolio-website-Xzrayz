const carousel = document.getElementById("carousel");
const artistNames = ["Unknown", "The Weeknd", "Ne-yo", "Artist 2", "Artist 3"];
let currentIndex = 2;

function scrollCarousel(direction) {
    const imgs = carousel.querySelectorAll("img");
    imgs[currentIndex].classList.remove("main");
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > imgs.length - 1) currentIndex = imgs.length - 1;

    imgs[currentIndex].scrollIntoView({ behavior: "smooth", inline: "center" });
    imgs[currentIndex].classList.add("main");

    document.querySelector(".artist-name").textContent = artistNames[currentIndex];
}
