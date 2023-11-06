//Ejercicio 1 -Unidad 2-


function suma (a,b,callback){
    let c = a + b;
    callback(c);
}

// Definimos una función de devolución de llamada
function callback(c) {
    console.log(c)
}
  
// Llamamos a la función suma con los argumentos y la función de devolución de llamada
suma(5, 3, callback);


