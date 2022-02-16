// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")

// all your routes here

router.route("/movies/create")
.get((req, res)=>{
    Celebrity.find()
    .then((celebrity)=>{
        res.render("movies/new-movie", {celebrity})
    })
})

.post((req,res)=>{
    const title = req.body.title
    const genre = req.body.genre
    const plot = req.body.plot
    const cast = req.body.cast

    const newMovie = {title, genre, plot, cast}

    Movie.create(newMovie)
    .then(res.redirect("/movies"))
})

router.get("/movies", (req,res)=>{
    Movie.find()
    .then((movie)=>{
        res.render("movies/movies", {movie})
    })
})

module.exports = router