const config = require('./db-config'),
        mongoose = require('mongoose'),
        Schema = mongoose.Schema;

       
//mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.db}`, );


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


//conecto con mongo 
const connect = () => {
    return  mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.db}`, {useNewUrlParser: true, useUnifiedTopology: true});
 }
 
 connect()
     .then(data => console.log("CONNECTED--->", data))
     .catch(err => console.warn("ERROR!--->", err));


module.exports = Movie;


