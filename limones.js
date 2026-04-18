let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=25;
const ALTO_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ALTO_LIMON=20;
const ANCHO_LIMON=20;


let puntaje=0;
let vidas=3;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTO_PERSONAJE);
let limonX=canvas.width/2;
let limonY=5;

let idIntervaloTiempo;
let metaPuntaje = 3;
const maxVidas=7;

const desplazamientoPersonaje=30;
const desplazamientoLimon=10;
let velocidadLimon;


function iniciarJuego(){    
    clearInterval(idIntervaloTiempo);
    idIntervaloTiempo=setInterval(bajarLimon,velocidadLimon);
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    aparecerLimon();

}

function reiniciarJuego(){
    
    puntaje=0;
    vidas=3;
    limpiarCanvas();          
    personajeX=canvas.width/2;
    personajeY=canvas.height-(ALTURA_SUELO+ALTO_PERSONAJE);
    limonX=canvas.width/2;
    limonY=5;
    velocidadLimon = 60+ ((maxVidas - 3) * 75)
    iniciarJuego();
    mostrarEnSpan("txtPuntaje",0);
    mostrarEnSpan("txtVida",3);
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
    personajeX=personajeX-desplazamientoPersonaje; 
    actualizarPantalla();
      
}

function moverDerecha(){
    personajeX=personajeX+desplazamientoPersonaje;
    actualizarPantalla();
    
}

function bajarLimon(){
    limonY=limonY+desplazamientoLimon;
    actualizarPantalla();
}



function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function ajustarVelocidad() {
    let vidasActuales = parseInt(document.getElementById("txtVida").textContent);
  
    velocidadLimon = 60+ ((maxVidas - vidasActuales) * 25);
    clearInterval(idIntervaloTiempo);
    idIntervaloTiempo=setInterval(bajarLimon,velocidadLimon);
}

function actualizarPantalla(){
    envolverPersonaje();
    detectarFinJuego();
    detectarAtrapado();
    detectarPiso();
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    
}

function detectarAtrapado(){
    if(limonX+ANCHO_LIMON>personajeX && limonX<personajeX+ANCHO_PERSONAJE && limonY+ALTO_LIMON>personajeY && limonY<personajeY+ALTO_PERSONAJE){
     aparecerLimon();
     puntaje=puntaje+1;
     vidaGanada();
     ajustarVelocidad();

     
     let componentePuntaje=document.getElementById("txtPuntaje");
        componentePuntaje.textContent= puntaje;
    }
}


function detectarPiso(){
    if(limonY+ALTO_LIMON>canvas.height-ALTURA_SUELO){
        aparecerLimon();    
        vidas=vidas-1;
        ajustarVelocidad();
        
        let componenteVida=document.getElementById("txtVida");
        componenteVida.textContent= vidas;
    }
}


function aparecerLimon(){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=5;
    actualizarPantalla();
}

function detectarFinJuego(){
    
    if(vidas==0){
        alert("Game Over. Tu puntaje fue: "+puntaje);
        reiniciarJuego();
    }  }

    function vidaGanada() {
    if (puntaje > 0 && puntaje % metaPuntaje === 0 && vidas < maxVidas) {
        vidas = vidas + 1;
        let componenteVida = document.getElementById("txtVida");
        componenteVida.textContent = vidas;
    }
}
function envolverPersonaje() {
    
    if (personajeX > canvas.width) {
        personajeX = 0;
    } 
    else if (personajeX < 0) {
        personajeX = canvas.width;
    }
}