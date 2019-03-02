window.onload = function() {
  fetchMovies();
}

var movies = [];
  
function fetchMovies() {
  fetch("../services/movies.json")
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        movies = result;
        loadMovies(movies);
        createButtonListener()
    });
}

function loadMovies(moviesList) {

  for(film of moviesList){
     var movie = document.createElement("div");
     movie.className = "movie";
     
    
     var movieImgContainer = document.createElement("div");
     movieImgContainer.className = "movieImg";

     var movieImg = document.createElement("img");
     movieImg.src = film.picture;

     movieImgContainer.appendChild(movieImg);
     movie.appendChild(movieImgContainer);



    var myBtn = document.createElement("div");
    myBtn.className = "myBtn";

    var buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.innerHTML = "See More";
    //buttonElement.addEventListener("click", getMovieById(event), false);

    myBtn.appendChild(buttonElement);
    movieImgContainer.appendChild(myBtn);

    document.getElementById("movie_container").appendChild(movie);

  }

}

function createButtonListener() {
  var allButtonsOnPage = document.querySelectorAll('.myBtn button');

  allButtonsOnPage.forEach(function(button, index) {
      button.addEventListener('click', function() {
        navigateToMovie(index + 1);
      });
  });
}

function goDetail() {
      location.assign("http://localhost/projekti_new/views/detail.html?id="+1);
}

function navigateToMovie(id){
  window.location.assign("../views/detail.html?id="+id);
}

