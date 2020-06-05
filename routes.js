const express = require('express')
const routes = express.Router()

const data = require('./data.json')

routes.get('/', function (req, res) {
    return res.render("home", { items: data.recipes })
})

routes.get('/about', function (req, res) {
    return res.render("about")
})

routes.get('/recipes', function (req, res) {
    return res.render("recipes", { items: data.recipes })
})

routes.get("/recipes/:id", function (req, res) {

    const id = req.params.id
    const recipe = data.recipes[id]

    return res.render("detailrecipe", { items: recipe })

})


// ADMIN


routes.get("/admin/recipes", function (req, res) {
    return res.render("admin/recipes/index", { items: data.recipes })
});

routes.get("/admin/recipes/create", function (req, res) {
    return res.render("admin/recipes/create", { items: data.recipes })
});

routes.get("/admin/recipes/:id", function (req, res) {

    const id = req.params.id
    const recipe = data.recipes[id]

    return res.render("admin/recipes/show", { items: recipe })

})

routes.get("/admin/recipes/:id/edit", function (req, res) {

    const id = req.params.id
    const recipe = data.recipes[id]

    return res.render('admin/recipes/edit', { items: recipe })
})

module.exports = routes