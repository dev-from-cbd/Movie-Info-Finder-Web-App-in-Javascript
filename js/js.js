const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  data.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `<img src="img/freeGuy.jpg" alt="movie" />

    <div class="movie-info">
      <h3>Movie title</h3>
      <span class="green">9.8</span>
    </div>

    <div class="overview">
      <h3>Overview</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      consequuntur numquam necessitatibus esse maiores minima quae quis
      perferendis et dolor.
    </div>`;
  });
}
