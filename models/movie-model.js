const movieModel = require('./movie-schema');


const Movie = ()=>{
};

Movie.getAll = (cb)=>{  //le llega como argumento el callback que le paso desde el controlador

    movieModel.find({}).exec((err, docs)=>{
        if(err) throw err;
        cb(docs); //aqui ejecuta el callback , y renderiza todo lo que manda el controlador
    });
};

Movie.save = (doc,cb)=>{
    movieModel.create(doc, (err)=>{  //con create creo un documento como instancia del modelo "Movie" que esta en el esquema. 
        if(err) throw err;
        cb(doc);
    });
};


Movie.update = (movie_id, cb)=>{
    
    movieModel.findOne({'movie_id':`${movie_id}`}).exec((err, doc)=>{
        if(err) throw err
        cb(doc);
    });
};

Movie.saveUpdate = (oldMovie, updatedMovie, cb )=>{
    //console.log("la peli antigua:",oldMovie);
    //console.log("la peli nueva",updatedMovie);
    movieModel.findOneAndReplace(oldMovie, updatedMovie, null, (err, docs)=>{  //Este tiene 4 parametros, el 3ero de null son las opciones y si no lo tengo me borra todo el documento.
        if(err) throw err;
        cb(docs)
    })
};

Movie.delete = (movie, cb)=>{
    console.log("la peli que se va a borrar es :", movie);
    movieModel.deleteOne(movie, (err, result)=>{
        if(err) throw err
        console.log(result);
        cb();
    });
};


module.exports = Movie;