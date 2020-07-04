const mongoose = require('./mongo-connection'), //para la conexion con mongo
        Schema = mongoose.Schema;

//estructura del esquema de las pelis en mongo
const movieSchema = new Schema({
    movie_id : "string",
    title : "string",
    release_year: "string",
    rating : "string",
    image : "string"
});

//creo el modelo para utilizar el esquema de Mongoose
Movie = mongoose.model ("Movie", movieSchema);


module.exports = Movie;


