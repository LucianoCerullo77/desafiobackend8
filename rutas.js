const express = require('express');
const { Router } = express;
const router = Router();
const productos = require('./modules/products')

router.get('/api/productos', (req, res) => {
    res.json(productos)
})

router.get('/api/productos/:id', (req, res) => {
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
    res.json(producto)
    if (!producto) {
        res.status(404).json({ message: 'error : Producto no encontrado' })
    }
})

router.post('/api/productos', (req, res) => {
    const producto = req.body
    productos.push(producto)
    res.json(producto)
})

router.put('/api/productos/:id', (req, res) => {   
    const id = req.params.id
    const producto = req.body
    const index = productos.findIndex(producto => producto.id == id)
    productos[index] = producto
    res.json(producto)
})

router.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id
    const index = productos.findIndex(producto => producto.id == id)
    productos.splice(index, 1)
    res.json({})
})

module.exports = router