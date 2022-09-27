import { getMovie } from "./screen.js"


document.getElementById("btn").addEventListener("click", function () {
  const movieName = document.getElementById("input").value;
  getMovie(movieName);
});

function validateEmptyInput(movieName) {
  if (movieName.length === 0) {
    alert("Preencha o campo");
    return true;
  }
}

document.getElementById("input").addEventListener("keyup", function (e) {
  const movieName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateEmptyInput(movieName)) return;
    getMovie(movieName);
  }
});



document.getElementById('logo').addEventListener('click', ()=>{
    location.reload()
})
