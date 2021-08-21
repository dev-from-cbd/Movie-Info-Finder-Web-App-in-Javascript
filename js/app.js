const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <div class="movie__cover-inner">
        <img src="${movie.posterUrlPreview}" 
        class="movie__cover" 
        alt="${movie.nameEn}" 
        />
        <div class="movie__cover--darkend"></div>
      </div>
      <div class="movie__info">
        <div class="movie__title">${movie.nameEn}</div>
        <div class="movie__category">${movie.genres.map(
          (genre) => `${genre.genre}`
        )}</div>
        <div class="movie__average movie__average--green">${movie.rating}</div>
      </div>
        `;
    moviesEl.appendChild(movieEl);
  });
}
