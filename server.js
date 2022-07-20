const express = require('express')
const productos = require('./rutas.js')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', productos)
app.use('/', express.static('public'))

app.get('/api/productos', (req, res) => {
    res.json(productos)
})

const server = app.listen(8080, (req,res) => {
    console.log(`Server active. Running on port ${8080}`);
})

server.on("error", e => console.log(`Error in server ${e}`))

// app.get('/api/productos/:id', (req, res) => {
//     const id = req.params.id
//     const producto = productos.find(producto => producto.id == id)
//     res.json(producto)
//     if (!producto) {
//         res.status(404).json({ message: 'error : Producto no encontrado' })
//     }
// })

// app.post('/api/productos', (req, res) => {
//     const producto = req.body
//     productos.push(producto)
//     res.json(producto)
// })

// app.put('/api/productos/:id', (req, res) => {   
//     const id = req.params.id
//     const producto = req.body
//     const index = productos.findIndex(producto => producto.id == id)
//     productos[index] = producto
//     res.json(producto)
// })

// app.delete('/api/productos/:id', (req, res) => {
//     const id = req.params.id
//     const index = productos.findIndex(producto => producto.id == id)
//     productos.splice(index, 1)
//     res.json({})
// })

