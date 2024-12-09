// DOM elements to create

const container = document.querySelector(".container");
const inputValue = document.getElementById("movie-search");
const submnitButton = document.getElementById("submit-button");
const movieTitle = document.createElement("h2");
const moviePlot = document.createElement("p");
const posterImage = document.createElement("img");
const displayValue = document.createElement("p");

// API key
const apiKey = "a28273ae";

// API URL
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

// API Call
async function getMovie(movieName) {
  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
    const data = await response.json();
    const title = data.Title;
    movieTitle.textContent = title;
    container.appendChild(movieTitle);
    const plot = data.Plot;
    moviePlot.textContent = plot;
    container.appendChild(moviePlot);
    const poster = data.Poster;
    posterImage.src = poster;
    container.appendChild(posterImage);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Event Listeners
inputValue.addEventListener("input", (e) => {
  displayValue.textContent = e.target.value;
});

submnitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const movieName = inputValue.value;
  inputValue.value = "";
  console.log(movieName);

  getMovie(movieName);
});
