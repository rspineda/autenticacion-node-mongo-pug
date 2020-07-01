const Errors = ()=>{

};

//para cuando van a una ruta no establecida
Errors.http404 = (req,res,next)=>{
    let error = new Error();
    error.status = 404;
    let locals = {
        title: "ERROR 404",
        description: "RECURSO NO ENCONTRADO",
        error: error
    }
    res.render("error", locals);
}

//para cuando quieren entrar sin autenticarse
Errors.http401 = (req,res,next)=>{
    let error = new Error();
    error.status = 401;
    let locals = {
        title: "ERROR 401",
        description: "RECURSO NO AUTORIZADO",
        error: error
    }
    res.render("error", locals);
}

//para cuando falla el servidor
Errors.http500 = (req,res,next)=>{
    let error = new Error();
    error.status = 500;
    let locals = {
        title: "ERROR 500",
        description: "ERROR INTERNO DEL SERVIDOR",
        error: error
    }
    res.render("error", locals);
}
module.exports = Errors;