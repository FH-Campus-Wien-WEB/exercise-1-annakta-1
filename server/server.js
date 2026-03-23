const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
// Part 1: Returning the movie data from the /movies endpoint
// In this first part of the assignment, you have to structure movie data in JSON. 
// Choose at least three movies of your liking and use the Examples section of the OMDb API 
// to retrieve the data for these movies in JSON format.
  const movies =
  [
    {
      "Title": "Mulan",
      "Released": "1998-06-19",
      "Runtime": 87,
      "Genres": ["Animation", "Adventure", "Comedy"],
      "Directors": ["Tony Bancroft", "Barry Cook"],
      "Writers": ["Robert D. San Souci", "Rita Hsiao", "Chris Sanders"],
      "Actors": ["Ming-Na Wen", "Eddie Murphy", "BD Wong"],
      "Plot": "This retelling of the old Chinese folktale is about the story of a young Chinese maiden who learns that her weakened and lame father is to be called up into the army in order to fight the invading Huns. Knowing that he would never survive the rigours of war in his state, she decides to disguise herself and join in his place. Unknown to her, her ancestors are aware of this and to prevent it, they order a tiny disgraced dragon, Mushu to join her in order to force her to abandon her plan. He agrees, but when he meets Mulan, he learns that she cannot be dissuaded and so decides to help her in the perilous times ahead.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzU0ZTQxZDktOGY0Yy00NjdiLTllNDItMTMzMjI1YjMyYjRhXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 72,
      "imdbRating": 7.7
    },
    {
      "Title": "Final Destination 3",
      "Released": "10 Feb 2006",
      "Runtime": 93,
      "Genres": ["Horror", "Thriller"],
      "Directors": ["James Wong"],
      "Writers": ["Glen Morgan", "James Wong", "Jeffrey Reddick"],
      "Actors": ["Mary Elizabeth Winstead", "Ryan Merriman", "Kris Lemche"],
      "Plot": "Wendy Christensen and a group of teens who escaped a fatal roller-coaster crash face a bloody date with Death.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3NzE0MmEtYmFjZC00NTJhLWI4OWUtNGRmNDEwNGU3NzM0XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 43,
      "imdbRating": 5.9
    },
    {
      "Title": "Scream 2",
      "Released": "12 Dec 1997",
      "Runtime": 120,
      "Genres": ["Horror", "Mystery"],
      "Directors": ["Wes Craven"],
      "Writers": ["Kevin Williamson"],
      "Actors": ["Neve Campbell", "Courteney Cox", "David Arquette"],
      "Plot": "A year after the Woodsboro murders, the survivors try to move on at Windsor College in Ohio-but when a new Ghostface killer starts a campus killing spree, they must face terror all over again.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODE5YWJkMDMtN2ZiNC00MjI5LTkxYTgtOTkyZjUwMjU0YThiXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 62,
      "imdbRating": 6.3
    }
  ];
  res.json(movies);

})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

