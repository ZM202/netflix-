// Create a Movie constructor with properties that would identify 
// each information from the movie description. There should be at least 7 properties

function movies(movieTitles, movieDescription, yes, no){    
    this.firstMovie = movieTitles;
    this.firstGenre = movieDescription;
    this.secondMovie = movieTitles;
    this.secondGenre = movieDescription;
    this.thirdMovie = movieTitles;
    this.thirdGenre = movieDescription;
    this.fourthMovie = movieTitles;
    this.fourthGenre = movieDescription;
    this.movieWatched = yes;
    this.movieNotWatched = no;
}
// And add another property to represent if you have seen this movie or not. 
// This will make it a total of 8 properties

// Create all 4 objects using the NEW keyword. 

Movies.prototype.SeenorNot = function(){   
    return this.firstMovie + this.firstGenre;    
}

let firstMovie = new Movie("SpiderMan", "Animation");  
let secondMovie = new Movie("Klaus", "Animation");  
let thirdMovie = new Movie("GroundHog Day", "Comedy");  
let fourthMovie = new Movie("Life of Brian", "Comedy");  

