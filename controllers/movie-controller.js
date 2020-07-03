const movieModel = require('../models/movie-model'),
      errors = require('../middlewares/errors');


const ControllerMovie = ()=>{
};



ControllerMovie.getAll = (req, res, next)=>{

    if(req.session.username){
        return movieModel.getAll((docs)=>{  // función como parametro a la función getAll del modelo.
                let locals = {
                    title: "Lista de Peliculas",
                    user: req.session.username,
                    data: docs
                }
                res.render('index', locals);
                });
    }else{
        return errors.http401(req,res,next);
    }
    

};


ControllerMovie.add = (req, res, next)=>{
    if(req.session.username){
        return res.render('add-form', {title:'Añadir Película a la base de datos'});
    }else{
        return errors.http401(req,res,next);
    }
    
};


ControllerMovie.saveAdd = (req, res, next)=>{
    let newMovie = {
        movie_id : req.body.movie_id,
        title : req.body.title,
        release_year : req.body.release_year,
        rating : req.body.rating,
        image: req.body.image 
    };
    if(req.session.username){
        return movieModel.save(newMovie, ()=>{res.redirect("/");})
    }else{
        return errors.http401(req,res,next);
    }
    
};


ControllerMovie.update = (req, res, next)=>{
    let movie_id = req.params.movie_id;
    if(req.session.username){
        return movieModel.update(movie_id, (doc)=>{
            let locals = {
                title : "Editar pelicula",
                data : doc
            }
            //console.log(doc);
            res.render("edit", locals);
        })
    }else{
        return errors.http401(req,res,next);
    }
    
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
    
    if(req.session.username){
        return movieModel.saveUpdate(oldMovie, updatedMovie, (docs)=>{
            console.log(docs)
            res.redirect('/');
        });
    }else{
        return errors.http401(req,res,next); 
    }
    
};

ControllerMovie.delete = (req, res, next)=>{
    let movie = {
        movie_id : req.params.movie_id
    }

    if(req.session.username){
        return movieModel.delete(movie, ()=>{
            res.redirect('/');
        })
    }else{
        return errors.http401(req,res,next);
    }
    
};

module.exports = ControllerMovie;