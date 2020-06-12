const express = require('express')
const routes = express.Router()
const fs = require('fs')

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

routes.post("/admin/recipes", function(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == ""){
          return res.send('Please, fill all fields!')
        }
    
    }
    
    let {image, ingredients, preparation, information } = req.body

    const id = Number(data.recipes.length)

    data.recipes.push({
        id,
        image,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) {
          throw err;
        }
        
        return res.redirect(`/admin/recipes/${id}`)
    })

    
})

routes.put("/admin/recipes", function(req,res) { 
  
    
    
    
   
    return res.send()
}) // Editar uma receita



module.exports = routes