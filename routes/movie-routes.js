const ControllerMovie = require('../controllers/movie-controller');

const controller = require('../controllers/movie-controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/movies', controller.getAll)
    .get('/movie/add', controller.add)
    .post('/movies', controller.saveAdd)
    .get('/movie/update/:movie_id', controller.update)
    .put('/movie/update/:movie_id', controller.saveUpdate) //aqui en crud sería post
    .delete('/movie/delete/:movie_id', controller.delete) //aqui en crud sería post



module.exports = router;