const movieModel = require('../models/movie-model');

const ControllerMovie = ()=>{
};

ControllerMovie.error404 = (req, res, next)=>{
    let error = new Error();
    error.status = 404;
    let locals = {
        title: "ERROR 404",
        description: "RECURSO NO ENCONTRADO",
        error: error
    }
    res.render("error", locals);
};

ControllerMovie.getAll = (req, res, next)=>{
    movieModel.getAll((docs)=>{  //toda esta función la lanzo coo parametro a la función getAll del modelo.
        let locals = {
            title: "Lista de Peliculas",
            data: docs
        }
        res.render('index', locals);
    });

};

ControllerMovie.add = (req, res, next)=>{
    res.render('add-form', {title:'Añadir Película a la base de datos'});
};

ControllerMovie.saveAdd = (req, res, next)=>{
    let newMovie = {
        movie_id : req.body.movie_id,
        title : req.body.title,
        release_year : req.body.release_year,
        rating : req.body.rating,
        image: req.body.image 
    };
    movieModel.save(newMovie, ()=>{res.redirect("/");})
};

ControllerMovie.update = (req, res, next)=>{
    let movie_id = req.params.movie_id;
    movieModel.update(movie_id, (doc)=>{
        let locals = {
            title : "Editar pelicula",
            data : doc
        }
        //console.log(doc);
        res.render("edit", locals);
    })
};

ControllerMovie.saveUpdate = (req, res, next)=>{
    let oldMovie = {
        movie_id : req.body.movie_id
    };
    let updatedMovie = {
        movie_id : req.body.movie_id,
        title : req.body.title,
        release_year : req.body.release_year,
        rating : req.body.rating,
        image: req.body.image 
    };
    movieModel.saveUpdate(oldMovie, updatedMovie, (docs)=>{
        console.log(docs)
        res.redirect('/');
    });
};

ControllerMovie.delete = (req, res, next)=>{
    let movie = {
        movie_id : req.params.movie_id
    }
    movieModel.delete(movie, ()=>{
        res.redirect('/');
    })
};

module.exports = ControllerMovie;