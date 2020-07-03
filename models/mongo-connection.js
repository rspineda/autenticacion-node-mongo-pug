const config = require('./db-config'),
      mongoose = require('mongoose'),  


//conecto con mongo 
const connect = () => {
    return  mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.db}`, {useNewUrlParser: true, useUnifiedTopology: true});
 }
 
 connect()
     .then(data => console.log("CONNECTED--->", data))
     .catch(err => console.warn("ERROR!--->", err));


module.exports = mongoose; //lo exporto con este nombre y luego en los esquema haré el require.
