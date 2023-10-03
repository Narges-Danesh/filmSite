const detailsContainer = document.querySelector(".film-desc");
const bgBlur = document.getElementById("bg-blur");
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelector(".tab-content");
const dlLinkTab = document.getElementById("dl-link");
const recommendedFilmsTab = document.getElementById("recommended-films");
const commentSectionTab = document.getElementById("comment-section");
const dlContainer = document.getElementById("dl-container");
const recommendedContainer = document.getElementById("recommended-container");
const commentContainer = document.getElementById("comment-container");
// comment elements
const commentForm = document.getElementById("comment-form");
const userNameElement = document.getElementById("user-name");
const userEmailElement = document.getElementById("user-email");
const commentTextElement = document.getElementById("comment-text");
const sendButton = document.getElementById("comment-send");
const publishedComments = document.querySelector(".published-comments");

// ======================== TABS ============================
function removeActive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActive();
    tab.classList.add("active");
  });
});
recommendedFilmsTab.addEventListener("click", () => {
  recommendedContainer.style.display = "flex";
  dlContainer.style.display = "none";
  commentContainer.style.display = "none";
});
commentSectionTab.addEventListener("click", () => {
  commentContainer.style.display = "block";
  dlContainer.style.display = "none";
  recommendedContainer.style.display = "none";
});
//======================== SHOW DETAILS ============================
function showFilmDetails(filmId) {
  const newFilms = [];
  if (filmId < 2000) {
    const url = `https://moviesapi.ir/api/v1/movies/${filmId}`;
    const options = {
      method: "GET",
    };

    (async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        newFilms.push(JSON.parse(result));
        const { title, poster, year, director, imdb_rating } = newFilms[0];
        bgBlur.style.backgroundImage = `url(${poster})`;
        thisPlot = filmPlotTranslation.find((plot) => plot.id == filmId);
        detailsContainer.innerHTML += `
        <img
          src="${poster}"
          alt=""
          class="poster"
        />
        <div class="details">
          <div>
            <h1 class="title">${title} ${year}</h1>
            <div class="rating">
              <img src="assets/imdb.png" alt="" />
              <span>${imdb_rating}</span>
            </div>
            <div class="director"> کارگردان: <span>${director}</span> </div>
            <div class="story"> توضیحات فیلم: <span>${thisPlot.plot}</span>  </div>
          </div>
          <div class="buttons">
            <a href="#dl-link" class="dlButton">دانلود</a>
            <button class="likeButton"><i class="fas fa-heart"></i></button>
            <small></small>
          </div>
        </div>
      </div>
        `;

        const dlButton = document.querySelector(".dlButton");

        dlButton.addEventListener("click", () => {
          removeActive();
          dlLinkTab.classList.add("active");
          dlContainer.style.display = "block";
          recommendedContainer.style.display = "none";
          commentContainer.style.display = "none";
        });
        dlLinkTab.addEventListener("click", () => {
          dlContainer.style.display = "block";
          recommendedContainer.style.display = "none";
          commentContainer.style.display = "none";
        });

        dlContainer.innerHTML += `
        <div class="header">فیلم</div>
        <div class="dl-box">
          <span>دانلود با کیفیت 720</span>
          <a href="#" target="_blank">دانلود</a>
        </div>
  `;
        filmLike();
      } catch (error) {
        console.error(error);
      }
    })();
  } else if (filmId < 4000) {
    let newFilmId = newFilmsArray.find((film) => film.id == parseInt(filmId));
    const { img, title, rating, plot, director, dl_link } = newFilmId;
    bgBlur.style.backgroundImage = `url(${img})`;

    detailsContainer.innerHTML += `
        <img
          src="${img}"
          alt=""
          class="poster"
        />
        <div class="details">
          <div>
            <h1 class="title">${title}</h1>
            <div class="rating">
              <img src="assets/imdb.png" alt="" />
              <span>${rating}</span>
            </div>
            <div class="director">${
              director === "" ? "" : ` کارگردان: <span>${director}</span>`
            } </div>
            <div class="story"> توضیحات فیلم: <span>${plot}</span>  </div>
          </div>
          <div class="buttons">
            <a href="#dl-link" class="dlButton">دانلود</a>
            <button class="likeButton"><i class="fas fa-heart"></i></button>
            <small></small>
          </div>
        </div>
      </div>
        `;
    const dlButton = document.querySelector(".dlButton");
    filmLike();

    dlContainer.innerHTML += `
    <div class="header">فیلم</div>
    <div class="dl-box">
      <span>دانلود با کیفیت 720</span>
      <a href="${dl_link}" target="_blank">دانلود</a>
    </div>
`;

    dlButton.addEventListener("click", () => {
      removeActive();
      dlLinkTab.classList.add("active");
      dlContainer.style.display = "block";
      recommendedContainer.style.display = "none";
      commentContainer.style.display = "none";
    });
    dlLinkTab.addEventListener("click", () => {
      dlContainer.style.display = "block";
      recommendedContainer.style.display = "none";
      commentContainer.style.display = "none";
    });
  } else {
    seriesId = seriesData.find((series) => series.id == parseInt(filmId));
    const { img, title, rating, plot, director, dl_link } = seriesId;
    bgBlur.style.backgroundImage = `url(assets/series/${img})`;

    detailsContainer.innerHTML += `
        <img
          src="assets/series/${img}"
          alt=""
          class="poster"
        />
        <div class="details">
          <div>
            <h1 class="title">${title}</h1>
            <div class="rating">
              <img src="assets/imdb.png" alt="" />
              <span>${rating}</span>
            </div>
            <div class="director">${
              director === "" ? "" : ` کارگردان: <span>${director}</span>`
            } </div>
            <div class="story"> توضیحات سریال: <span>${plot}</span>  </div>
          </div>
          <div class="buttons">
            <a href="#dl-link" class="dlButton">دانلود</a>
            <button class="likeButton"><i class="fas fa-heart"></i></button>
            <small></small>
          </div>
        </div>
      </div>
        `;
    const dlButton = document.querySelector(".dlButton");
    filmLike();

    let seasonCount = 0;
    for (link in dl_link) {
      seasonCount++;
      dlContainer.innerHTML += `
              <div class="header">دانلود فصل ${seasonCount}</div>
              <div class="dl-box">
                <span>دانلود با کیفیت 720</span>
                <a href="${dl_link[link]}" target="_blank">دانلود</a>
              </div>
        `;
    }

    dlButton.addEventListener("click", () => {
      removeActive();
      dlLinkTab.classList.add("active");
      dlContainer.style.display = "block";
      recommendedContainer.style.display = "none";
      commentContainer.style.display = "none";
    });
    dlLinkTab.addEventListener("click", () => {
      dlContainer.style.display = "block";
      recommendedContainer.style.display = "none";
      commentContainer.style.display = "none";
    });
  }
}
showFilmDetails(filmId);
// ======================== RECOMMENDED FILMS ============================
//   const newFilms = [];
//   const url = `https://moviesapi.ir/api/v1/genres/${genreID}/movies?page=1`;
//   const options = {
//     method: "GET",
//   };

//   (async () => {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     newFilms.push(JSON.parse(result));
//     newFilms.map((film) => {
//       film.data.slice(0, 6).forEach((film) => {
//         const { poster, title, year, id, imdb_rating } = film;
//         recommendedContainer.innerHTML += `
//         <div class="film-card">
//       <img src="${poster}" alt="" />
//       <div class="film-details">
//         <div class="film-title">${title + " " + year}</div>
//         <div class="film-rating">
//           <span>${imdb_rating}</span>
//           <img src="assets/imdb.png" alt="" />
//         </div>
//         <a href="#" id="${id}">دانلود فیلم</a>
//       </div>
//       </div>
//         `;
//       });
//     });
//     const downloadButtons = document.querySelectorAll(".film-details a");
//     downloadButtons.forEach((btn) => {
//       btn.addEventListener("click", () => {
//         window.location.href = `details.html?id=${btn.id}`;
//       });
//     });
//   })();
// }

// randomRecommendedFilms(genres[randomGenre]);
let usedIndices = [];

function randomRecommendedFilms() {
  for (let i = 0; i < 6; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * newFilmsArray.length);
    } while (usedIndices.includes(randomNumber));
    usedIndices.push(randomNumber);
    const { img, title, year, id, rating } = newFilmsArray[randomNumber];
    recommendedContainer.innerHTML += `
    <div class="film-card">
  <img src="${img}" alt="" />
  <div class="film-details">
    <div class="film-title">${title + " " + year}</div>
    <div class="film-rating">
      <span>${rating}</span>
      <img src="assets/imdb.png" alt="" />
    </div>
    <a href="#" id="${id}">دانلود فیلم</a>
  </div>
  </div>
    `;
  }

  const downloadButtons = document.querySelectorAll(".film-details a");
  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `details.html?id=${btn.id}`;
    });
  });
}
randomRecommendedFilms();
// ======================== ADD COMMENT ============================
const commentCountElement = document.getElementById("comment-number");
let commentCount = 0;
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = userNameElement.value;
  let commentText = commentTextElement.value;
  let picture = userName.slice(0, 1);
  let iranianDate = new persianDate();
  let currentDate = iranianDate.toLocale("fa").format();
  commentCountElement.innerHTML = `${++commentCount} نظر`;
  publishedComments.innerHTML += `

  <div class="user-comment">
    <div class="user-info">
      <span>${picture}</span>
      <div class="user-name">${userName}</div>
    </div>
    <div class="comment-body">
      <div class="comment-date">${currentDate}</div>

      <div class="comment-text">${commentText}</div>
      <div class="comment-likes">
        <div class="like">
          <span>0</span>
          <i class="fa fa-thumbs-up"></i>
        </div>
        <div class="dislike">
          <span>0</span>
          <i class="fa fa-thumbs-down"></i>
        </div>
      </div>
    </div>
  </div>
    `;

  likeCount();
  dislikeCount();

  userNameElement.value = "";
  userEmailElement.value = "";
  commentTextElement.value = "";
});

// ======================== COMMENT LIKE ============================
let likeStatus = false;
let dislikeStatus = false;
function likeCount() {
  const likeButtons = document.querySelectorAll(".like");
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      likeStatus = likeStatus === false ? true : false;
      const span = button.querySelector("span");
      const icon = button.querySelector("i");
      if (likeStatus) {
        span.innerHTML++;
        icon.style.color = "green";
      } else {
        span.innerHTML--;
        icon.style.color = "white";
      }
    });
  });
}
likeCount();

function dislikeCount() {
  const dislikeButtons = document.querySelectorAll(".dislike");
  dislikeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      dislikeStatus = dislikeStatus === false ? true : false;
      const span = button.querySelector("span");
      const icon = button.querySelector("i");
      if (dislikeStatus) {
        span.innerHTML++;
        icon.style.color = "red";
      } else {
        span.innerHTML--;
        icon.style.color = "white";
      }
    });
  });
}
dislikeCount();

// ======================== FILM LIKE ============================
function filmLike() {
  const filmLikeButton = document.querySelector(".likeButton");
  const likeCountContainer =
    filmLikeButton.parentElement.querySelector("small");
  let filmLikeCount = 7;
  likeCountContainer.innerHTML = `+${filmLikeCount}`;
  let clicked = true;
  filmLikeButton.addEventListener("click", () => {
    if (clicked) {
      filmLikeButton.classList.add("liked", "animation");
      likeCountContainer.innerHTML = `+${++filmLikeCount}`;
      clicked = clicked === true ? false : true;
    } else {
      filmLikeButton.classList.remove("liked", "animation");
      likeCountContainer.innerHTML = `+${--filmLikeCount}`;
      clicked = clicked === true ? false : true;
    }
  });
}
