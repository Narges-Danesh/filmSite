const navLinkId = urlParams.get("id");
const navInput = urlParams.get("search");

// ===================== SHOW ALL SERIES =======================
if (navLinkId !== null) {
  if (navLinkId === "nav-series-link") {
    seriesData.map((film) => {
      const { img, title, rating, id } = film;
      return (searchContainer.innerHTML += `
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

    // ===================== SHOW ALL FILMS =======================
  } else if (navLinkId === "nav-film-link") {
    // show all 4 genres in searchContainer
    getAllFilms(searchContainer);
    addNewFilms();

    // ===================== SHOW FILM GENRES =======================
  } else if (!isNaN(navLinkId) && navLinkId.length < 4) {
    // the navLink ID is the same a the genre ID
    getFilmsFromAPI(navLinkId, searchContainer);
    addNewFilmsBasedOnGenre(navLinkId);

    // ===================== SHOW FILM YEARS =======================
  } else if (navLinkId.length > 3 && navLinkId > 1980 && navLinkId < 2012) {
    let thisLink = +navLinkId;
    extractYear(thisLink, 9);
    extractYear(thisLink, 7);
    extractYear(thisLink, 3);
    extractYear(thisLink, 17);
    extractYearNewFilms(thisLink);

    // ===================== SHOW FILMS FROM newFilmsArray =======================
  } else if (navLinkId.length > 3 && navLinkId > 2010 && navLinkId < 2024) {
    let thisLink = +navLinkId;
    extractYearNewFilms(thisLink);

    // ===================== IN CASE OF ERROR =======================
  } else {
    searchContainer.innerHTML = "نتیجه‌ای یافت نشد";
  }

  // ===================== SHOW FILMS FROM SEARCH BOX =======================
} else if (navInput !== null) {
  let filtered = [];
  let series;
  let films;
  filtered = allFilms.filter((film) => {
    let titleAndYear = `${film.title.toLowerCase()} ${film.year}`;
    return titleAndYear.includes(navInput);
  });
  series = filtered.filter((film) => film.id > 4000);
  films = filtered.filter((film) => film.id < 4000);

  series.map((film) => {
    const { img, title, rating, id } = film;
    searchContainer.innerHTML += `
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
  `;
  });
  films.map((film) => {
    const { img, title, rating, id, year } = film;
    searchContainer.innerHTML += `
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
  `;
  });
  // ===================== IN CASE OF ERROR =======================
} else {
  searchContainer.innerHTML = "نتیجه‌ای یافت نشد";
}

// ===================== A TAGS URL =======================
const downloadButtons = document.querySelectorAll(".film-details a");
downloadButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = `details.html?id=${btn.id}`;
  });
});
