let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let puntaje=0;
let personajeX=canvas.width/2;
let personajeY=0;
let limonX=0;
let limonY=0;

const ALTURA_SUELO=20;
const ALTO_PERSONAJE=40;
const ANCHO_PERSONAJE=20;

function iniciarJuego(){    
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle="#27b83f";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO)
    
}    

function dibujarPersonaje(){
    ctx.fillStyle= "yellow";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTO_PERSONAJE),ANCHO_PERSONAJE,ALTO_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}