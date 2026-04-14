let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=25;
const ALTO_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ALTO_LIMON=20;
const ANCHO_LIMON=20;


let puntaje=0;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTO_PERSONAJE);
let limonX=canvas.width/2;
let limonY=5;



function iniciarJuego(){    
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    
}

function dibujarSuelo(){
    ctx.fillStyle="#27b83f";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO)
    
}    

function dibujarPersonaje(){
    ctx.fillStyle= "yellow";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTO_PERSONAJE);
}
function dibujarLimon(){
    ctx.fillStyle= "green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}

function moverIzquierda(){
    personajeX=personajeX-10; 
    actualizarPantalla();
      
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
}



function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


function actualizarPantalla(){
    detectarColision();
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    
}

function detectarColision(){
    if(limonX+ANCHO_LIMON>personajeX && limonX<personajeX+ANCHO_PERSONAJE && limonY+ALTO_LIMON>personajeY && limonY<personajeY+ALTO_PERSONAJE){
     { alert("¡Colisión detectada!");  }
    }
}
