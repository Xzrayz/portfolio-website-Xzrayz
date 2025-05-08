const carousel = document.getElementById("carousel");
const artistNames = ["BabyBoy", "PARTYNEXTDOOR", "Big-Bang", "Drake", "Ne-Yo", "Shinhwa", "XXXtentacion", "The Weeknd", "TaeYang"];
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

const audioFiles = {
  'Babyboy': '/Music/babyboy.mp3',
  'Big-Bang': '/Music/bigbang.mp3',
  'Drake': '/Music/drake.mp3',
  'Ne-Yo': '/Music/neyo.mp3',
  'Shinhwa': '/Music/shinhwa.mp3',
  'XXXtentacion': '/Music/xxx.mp3',
  'The Weeknd': '/Music/weeknd.mp3'
};

function selectArtist(artist) {
  document.getElementById('artist-name').innerText = artist;
  const audioPlayer = document.getElementById('audio-player');
  const audioSource = document.getElementById('audio-source');
  audioSource.src = audioFiles[artist];
  audioPlayer.load();
  audioPlayer.play();
}

function scrollCarousel(direction) {
  const container = document.getElementById('carousel');
  container.scrollBy({
      left: direction * 160,
      behavior: 'smooth'
  });
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
