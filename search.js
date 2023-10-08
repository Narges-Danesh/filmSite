const navInput = urlParams.get("search");

// ===================== SHOW ALL SERIES =======================
if (navLinkId !== null) {
  if (navLinkId === "nav-series-link") {
    addNewFilms(seriesData, searchContainer);

    // ===================== SHOW ALL FILMS =======================
  } else if (navLinkId === "nav-film-link") {
    addNewFilms(newFilmsArray, searchContainer);

    // ===================== SHOW FILM GENRES =======================
  } else if (isNaN(navLinkId)) {
    addNewFilmsBasedOnGenre(navLinkId);

    // ===================== SHOW FILM YEARS =======================
  } else if (navLinkId.length > 3 && navLinkId > 1980) {
    let thisLink = +navLinkId;
    extractFilmYear(thisLink);
    // ===================== IN CASE OF ERROR =======================
  } else {
    searchContainer.innerHTML = "نتیجه‌ای یافت نشد";
  }
  // ===================== SHOW FILMS FROM SEARCH BOX =======================
} else if (navInput !== null) {
  const filtered = allFilms.filter((film) => {
    let titleAndYear = `${film.title.toLowerCase()} ${film.year}`;
    return titleAndYear.includes(navInput);
  });

  addNewFilms(filtered, searchContainer);
  // ===================== IN CASE OF ERROR =======================
} else {
  searchContainer.innerHTML = "نتیجه‌ای یافت نشد";
}
// ===================== 'A' TAGS URL =======================
const downloadButtons = document.querySelectorAll(".film-details a");
downloadButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = `details.html?id=${btn.id}`;
  });
});
