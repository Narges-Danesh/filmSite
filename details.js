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

const filmId = urlParams.get("id");
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
  if (filmId < 5000) {
    let newFilmId = newFilmsArray.find((film) => film.id == parseInt(filmId));
    const { img, title, year, rating, plot, director, dl_link } = newFilmId;
    bgBlur.style.backgroundImage = `url(${img})`;

    detailsContainer.innerHTML += `
        <img
          src="${img}"
          alt=""
          class="poster"
        />
        <div class="details">
          <div>
            <h1 class="title">${title} ${year}</h1>
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
    <div class="film-title">${title} ${year}</div>
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
let commentCount = 1;

const commentCountElement = document.getElementById("comment-number");
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = userNameElement.value;
  let commentText = commentTextElement.value;
  let picture = userName.slice(0, 1);

  // comment date
  let iranianDate = new persianDate();
  let currentDate = iranianDate.toLocale("fa").format();
  // comment count
  commentCountElement.innerHTML = `${++commentCount} نظر`;
  // generate unique id for each comment
  let commentId = "f";
  let digits = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * digits.length);
    commentId += digits[randomIndex];
  }
  // add comment to DOM
  publishedComments.innerHTML += `
  <div class="user-comment" id=${commentId}>
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
          <i onclick="likeCount(${commentId})" class="fa fa-thumbs-up"></i>
        </div>
        <div class="dislike">
          <span>0</span>
          <i onclick="dislikeCount(${commentId})" class="fa fa-thumbs-down"></i>
        </div>
      </div>
    </div>
  </div>
    `;

  const userPic = document.querySelector(`#${commentId} .user-info span`);
  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const lightness = Math.floor(Math.random() * 41) + 30;

    const color = `hsl(${hue},100%,${lightness}%)`;
    return color;
  }
  userPic.style.backgroundColor = getRandomColor();

  userNameElement.value = "";
  userEmailElement.value = "";
  commentTextElement.value = "";

  likedStates[commentId] = false;
  dislikedStates[commentId] = false;
});

// ======================== COMMENT LIKE ============================
const likedStates = { asdflkjh: false };
const dislikedStates = { asdflkjh: false };
let disliked = false;
function likeCount(id) {
  const likeIcon = id.querySelector(".fa-thumbs-up");
  let selectedComment = id;
  let thisState = likedStates[selectedComment.id];
  likedStates[selectedComment.id] =
    likedStates[selectedComment.id] === false
      ? (likedStates[selectedComment.id] = true)
      : (likedStates[selectedComment.id] = false);
  const likeElement = document.querySelector(
    `#${selectedComment.id} .like span`
  );

  if (thisState) {
    thisState = false;
    likeElement.innerHTML--;
    likeIcon.style.color = "white";
  } else {
    thisState = true;
    likeElement.innerHTML++;
    likeIcon.style.color = "green";
  }
}

function dislikeCount(id) {
  const dislikeIcon = id.querySelector(".fa-thumbs-down");
  let selectedComment = id;
  let thisState = dislikedStates[selectedComment.id];
  dislikedStates[selectedComment.id] =
    dislikedStates[selectedComment.id] === false
      ? (dislikedStates[selectedComment.id] = true)
      : (dislikedStates[selectedComment.id] = false);
  const dislikeElement = document.querySelector(
    `#${selectedComment.id} .dislike span`
  );

  if (thisState) {
    thisState = false;
    dislikeElement.innerHTML--;
    dislikeIcon.style.color = "white";
  } else {
    thisState = true;
    dislikeElement.innerHTML++;
    dislikeIcon.style.color = "red";
  }
}

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
