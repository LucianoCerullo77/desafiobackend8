const express = require('express')
const productos = require('./rutas')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', productos)
app.use('/', express.static('public'))

const server = app.listen(8080, (req,res) => {
    console.log(`Server active. Running on port ${8080}`);
})

server.on("error", e => console.log(`Error in server ${e}`))


