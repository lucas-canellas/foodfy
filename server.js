const express = require('express')
const nunjuks = require('nunjucks')

const server = express()

const recipes = require('./data')

server.use(express.static('./public'))
server.set("view engine", "njk")

nunjuks.configure("views", {
  express: server
})

server.get('/', function (req, res) {
  return res.render("home", { items: recipes })
})

server.get('/about', function (req, res) {
  return res.render("about")
})

server.get('/recipes', function (req, res) {
  return res.render("recipes", { items: recipes })
})

server.get("/recipes/:index", function (req, res) {
  const index = req.params.index
  const recipe = recipes[index]

  return res.render("detailrecipe", { items: recipe })

})


server.listen(5000, function () {
  console.log("running server...")

})
