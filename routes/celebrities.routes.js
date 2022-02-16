// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")

router.route("/celebrities/create")
.get((req, res)=>{
    res.render("celebrities/new-celebrity")
  })

.post((req,res)=>{
    const name = req.body.name
    const occupation = req.body.occupation
    const catchPhrase = req.body.catchPhrase

    const newCelebrity = {name, occupation, catchPhrase}

    Celebrity.create(newCelebrity)
    .then(res.redirect("/"))
})

router.get("/celebrities", (req, res)=>{
    Celebrity.find()
    .then((celebrity) => 
    res.render("celebrities/celebrities", {celebrity}))
  })

module.exports = router