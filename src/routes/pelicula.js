const express = require('express')
const pelicula_routes = express.Router()

/* Crear una pelicula */
pelicula_routes.post('/pelicula', (req,res)=>{})

/* Listar todas las peliculas existentes */
pelicula_routes.get('/peliculas', (req,res)=>{})

/* Consultar una pelicula en especifico */
pelicula_routes.get('/peliculas:idPelicula', (req,res)=>{})

/* Actualizar una pelicula en especifico */
pelicula_routes.put('/peliculas:idPelicula', (req,res)=>{})

/* Eliminar una pelicula en especifico */
pelicula_routes.delete('/peliculas:idPelicula', (req,res)=>{})

module.exports = pelicula_routes