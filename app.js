const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),  
      morgan = require('morgan'),
      helmet = require('helmet'),
      routes = require('./routes/movie-routes'),
      auth = require('./routes/auth-routes'),
      errors = require('./middlewares/errors'),
      methodOverride = require('method-override'), //para rutas PUT y DELETE
      app = express();

app.set('view engine', 'pug');      
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride(function (req, res) { 
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
    }
}));
//app.set('trust proxy', 1) // en producción lo necesitaría (para el session) si tuviera habilitado en secure: true, pero tambien necesitaría el https
app.use(session({
    secret: 'peluso',
    resave: true, 
    saveUninitialized: true,
    //cookie: { secure: true } //no lo necesito ahora, pero en produccion con https lo tendría.
  }))
app.use(morgan('dev'))
app.use(express.static('public'));
app.use(routes);  
app.use(auth); //middleware
app.use(errors.http404); 
      

module.exports = app;