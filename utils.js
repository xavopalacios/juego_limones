function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1 )) + min; // con esta función se genera un número aleatorio incluidos el mínimo y máximo 
}


function mostrarEnSpan(idSpan,valor){
    let componente=document.getElementById(idSpan);
    componente.textContent=valor;
}