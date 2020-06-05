const express = require('express')
const nunjuks = require('nunjucks')
const routes = require("./routes")

const server = express()



server.use(express.static('./public'))
server.use(routes)

server.set("view engine", "njk")

nunjuks.configure("views", {
  express: server
})

server.listen(5000, function () {
  console.log("running server...")

})




