const authModel = require('./user-schema'); //para la conexión con la base de datos

const Auth = ()=>{

};

Auth.getUser = (user, cb)=>{
    authModel.findOne({'username': `${user.username}`, 'password': `${user.password}`}).exec((err,doc)=>{
        if(err) throw err
        cb(doc) 
    })
};

Auth.setUser = (doc, cb)=>{ //doc el es el usuario que lanzo desde el controlador.
    authModel.create(doc, (err)=>{
        if(err) throw err;
        cb(doc)
    })
};

module.exports = Auth;