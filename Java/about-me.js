
function scrollCarousel(direction) {
  imgs[currentIndex].classList.remove("main");

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = artistData.length - 1;
  if (currentIndex >= artistData.length) currentIndex = 0;

  imgs[currentIndex].classList.add("main");
  imgs[currentIndex].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest" // Prevents vertical jumping
  });

  updateArtist();
}

const carousel = document.getElementById("carousel");
const imgs = carousel.querySelectorAll("img");
const artistNameDisplay = document.querySelector(".artist-name");
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");

const artistData = [
  { name: "BabyBoy", audio: "/mp3/BABYBOY - THE WAY I LIVE.mp3" },
  { name: "PARTYNEXTDOOR", audio: "/mp3/PARTNEXTDOOR - DEEPER.mp3" },
  { name: "Big-Bang", audio: "/mp3/BIGBANG - BLUE MV.mp3" },
  { name: "Drake", audio: "/mp3/DRAKE - SOMEONE WHO LOVES ME.mp3" },
  { name: "Ne-Yo", audio: "/mp3/NEYO - MAD.mp3" },
  { name: "Shinhwa", audio: "/mp3/SHINHWA  - T.O.P.mp3" },
  { name: "XXXtentacion", audio: "/mp3/XXX - TRUE LOVE.mp3" },
  { name: "The Weeknd", audio: "/mp3/THE WEEKND - OFTEN.mp3" },
  { name: "TaeYang", audio: "/mp3/TAEYANG - GOOD BOY.mp3" }
];

let currentIndex = 4; // Start on Ne-Yo

const video = document.querySelector('video');
    const container = document.querySelector('.video-container');

    container.addEventListener('mouseenter', () => {
        video.currentTime = 0; // Reset to the beginning
        video.play();
    });

    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset when hover ends
    });
    
function scrollCarousel(direction) {
  imgs[currentIndex].classList.remove("main");

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = artistData.length - 1;
  if (currentIndex >= artistData.length) currentIndex = 0;

  imgs[currentIndex].classList.add("main");
  imgs[currentIndex].scrollIntoView({ behavior: "smooth", inline: "center" });

  updateArtist();
}

function updateArtist() {
  const currentArtist = artistData[currentIndex];
  artistNameDisplay.textContent = currentArtist.name;

  if (currentArtist.audio) {
    audioSource.src = currentArtist.audio;
    audioPlayer.load();
    audioPlayer.play();
  }
}

// Allow clicking an image to select that artist
imgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    imgs[currentIndex].classList.remove("main");
    currentIndex = index;
    imgs[currentIndex].classList.add("main");
    updateArtist();
  });
});

// Initial setup
window.onload = () => {
  imgs[currentIndex].classList.add("main");
  updateArtist();
};


// === Cursor Code ===
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

const hoverTargets = document.querySelectorAll('a, button');
hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  target.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

