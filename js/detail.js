//movies list - for search simulation
window.onload = function() {
  fetchMovies();
}

var movies = [];
var movieId = "";

function fetchMovies() {
  fetch("../services/movies.json")
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        movies = result;
        //get movieId and extract
        movieId =  location.href.split('=')[1];
        //create and load movie detail
        getMovieById(movieId);
    });
}

function getMovieById(id) {
    for(film of movies){
        if(film.id == id){
            var movie = document.createElement("div");
            movie.className = "movie";
            
            var movieImgContainer = document.createElement("div");
            movieImgContainer.className = "movieImg";

            var movieImg = document.createElement("img");
            movieImg.src = film.picture;

            movieImgContainer.appendChild(movieImg);
            movie.appendChild(movieImgContainer);

            document.getElementById("movie_detail").appendChild(movie);
        }
    }
}

function goBack() {
    window.history.back();
}
