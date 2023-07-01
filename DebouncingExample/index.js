const API_KEY = "2126f673";
const moviesContainer = document.getElementById("movies")
let timerId;

const searchMovie = async () => {
  try {
    let searchInput = document.getElementById("query").value;
    let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}`);
    let data = await res.json();
    return data.Search;
  } catch (err) {
    console.log(err);
  }
}

function displayData(moviesColl) {
  moviesContainer.innerHTML = '';
  moviesColl.forEach((movie) => {
    let p = document.createElement("p");
    p.textContent = movie.Title;
    moviesContainer.append(p);
  });
}

const main = async () => {
  let moviesList = await searchMovie();
  if (moviesList === undefined) {
    return false;
  }
  displayData(moviesList);
}

const debounce = (func, delay) => {
  if (timerId) {
    clearTimeout(timerId);
  }

	timerId = setTimeout(() => {
    func();
  }, delay);
}
