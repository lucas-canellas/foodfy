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

server.get("/recipes/:id", function (req, res) {
  
  const id = req.params.id
  const recipe = recipes[id]

  return res.render("detailrecipe", { items: recipe })

})


// ADMIN


server.get("/admin/recipes", function(req, res) {
  return res.render("admin/recipes/index", { items: recipes })
});

server.get("/admin/recipes/create", function(req, res) {
  return res.render("admin/recipes/create", { items: recipes })
});

server.get("/admin/recipes/:id", function (req, res) {
  
  const id = req.params.id
  const recipe = recipes[id]

  return res.render("admin/recipes/show", { items: recipe })

})

server.get("/admin/recipes/:id/edit", function(req, res) {

  const id = req.params.id
  const recipe = recipes[id]

  return res.render('admin/recipes/edit', {items: recipe})
})

server.listen(5000, function () {
  console.log("running server...")

})




