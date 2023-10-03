const actionFilms = document.getElementById("action-films");
const fantasyFilms = document.getElementById("fantasy-films");
const comedyFilms = document.getElementById("comedy-films");
const horrorFilms = document.getElementById("horror-films");
const seriesElement = document.getElementById("series");
const newFilmsContainer = document.getElementById("new-films");
const headerElement = document.getElementById("header");
const headerButton = headerElement.querySelector("button");
// header video
const headerPlayButton = headerElement.querySelector(".fa-play");
const heroVideo = document.getElementById("hero-video");
const headerVolumeButton = headerElement.querySelector(".fa-volume-up");

// ======================= ADD FILMS SLIDER ==========================
getFilmsFromAPI(3, actionFilms, true);
getFilmsFromAPI(7, fantasyFilms, true);
getFilmsFromAPI(9, comedyFilms, true);
getFilmsFromAPI(17, horrorFilms, true);

// ======================= ADD SERIES SLIDER ==========================
seriesData.map((film) => {
  const { img, title, rating, id } = film;
  return (seriesElement.innerHTML += `
    <div class="film-card">
            <img src="assets/series/${img}" alt="" />
            <div class="film-details">
              <div class="film-title">${title}</div>
              <div class="film-rating">
                <span>${rating}</span>
                <img src="assets/imdb.png" alt="" />
              </div>
              <a href="#" id="${id}">دانلود فیلم</a>
            </div>
            </div>
    `);
});
sliderFunction(seriesElement);

// ======================= NEW FILMS SLIDER ==========================
newFilmsArray.map((film) => {
  if (film.year < 2021) return;
  const { img, title, rating, id, year } = film;
  return (newFilmsContainer.innerHTML += `
    <div class="film-card">
            <img src="${img}" alt="" />
            <div class="film-details">
              <div class="film-title">${title} ${year}</div>
              <div class="film-rating">
                <span>${rating}</span>
                <img src="assets/imdb.png" alt="" />
              </div>
              <a href="#" id="${id}">دانلود فیلم</a>
            </div>
            </div>
    `);
});
sliderFunction(newFilmsContainer);

// ======================= NAV COLOR CHANGE ON SCROLL ==========================
addEventListener("scroll", () => {
  if (headerElement.offsetHeight < window.scrollY) {
    navigationElement.style.backgroundColor = "rgba(17, 17, 17, 0.9)";
  } else if (headerElement.offsetHeight > window.scrollY) {
    navigationElement.style.backgroundColor = "transparent";
    navigationElement.style.backgroundImage = `
    linear-gradient(
      to bottom,
      rgb(14, 14, 14),
      rgba(17, 17, 17, 0.5),
      transparent
    );
    `;
  }
});

// ======================= HEADER BUTTON URL ==========================
headerButton.addEventListener("click", () => {
  window.location.href = `details.html?id=3004`;
});

// ======================= HEADER VIDEO PLAY ==========================
let playing = false;
headerPlayButton.addEventListener("click", () => {
  playing = playing === true ? false : true;
  if (playing) {
    heroVideo.classList.add("play");
    heroVideo.play();
    headerPlayButton.className = "fa-solid fa-pause";
    headerVolumeButton.style.display = "block";
  } else {
    heroVideo.pause();
    headerPlayButton.className = "fa-solid fa-play";
  }
});

// ======================= HEADER VIDEO VOLUME ==========================
let volumeOn = false;
headerVolumeButton.addEventListener("click", () => {
  volumeOn = volumeOn === true ? false : true;
  if (volumeOn) {
    heroVideo.muted = false;
    headerVolumeButton.className = "fa-solid fa-volume-off";
  } else {
    heroVideo.muted = true;
    headerVolumeButton.className = "fa-solid fa-volume-up";
  }
});
