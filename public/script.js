//esta funcion activa un confirm para eliminar cada pelicula

function eliminar(input){
    let deleteOk = confirm("¿estas seguro de que quieres eliminar la película?");
    //console.log(deleteOk)
    return (deleteOk)?input.parentNode.submit():false;
}

//al utilizar parentNode, accedo al padre del boton input, osea al formulario , y así puedo procesar el forumalrio ya que he quitado el type submit en lugar de type button para prevenir el envío del formulario y que asi se active la funcion eliminar.
