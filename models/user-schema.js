const config = require('./db-config'),
        mongoose = require('./mongo-connection'), //para la coneccion con mongo
        Schema = mongoose.Schema;

//estructura del esquema de los usuarios autenticados, en mongo
const userSchema = new Schema({
    username: "string",
    password : "string",
});

//creo el modelo para utilizar el esquema de Mongoose
User = mongoose.model ("User", userSchema);


module.exports = User;