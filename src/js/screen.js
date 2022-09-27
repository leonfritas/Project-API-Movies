import { movie } from "./movieapi.js";

function getMovie(movieName) {
  movie(movieName).then((movieData) => {
    let movieInfo = `<div class="movie-info">
                              <h1 class="movie-title">${movieData.results[0].title} </h1>
                              <img class="movie-img "src="https://image.tmdb.org/t/p/original/${movieData.results[0].poster_path}">
                              <p class="movie-text">${movieData.results[0].overview}</p>
                              <p class="movie-data">${movieData.results[0].release_date}</p>
                              <button id="voltar" class="botao-volta" onclick="volta()">Back</button>
                          </div>`;
    
    document.querySelector(".painel").innerHTML = movieInfo;
    document.getElementById("voltar").addEventListener("click", () => {
      location.reload();
    });
  });
}

export { getMovie };


