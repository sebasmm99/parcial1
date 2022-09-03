const mongoose = require('mongoose')
const peliculaSchema = mongoose.Schema({
    movie_name:{
        type: String,
        require: true,
        unique: true
    },
    season:{
        type: number,
        require: true
    },
    autors:{
        type: Array,
        require: true
    }
})

module.exports = mongoose.model('PeliculaCollection', peliculaSchema)
