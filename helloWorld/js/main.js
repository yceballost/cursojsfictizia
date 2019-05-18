var targetElement; // Declarar una variable

targetElement = 3; // Inicializar una variable
//console.log("El valor de mi variable es " + targetElement + " y el tipo es " + typeof targetElement);

targetElement = "hola "; // Asignar un valor 
//console.log("El valor de mi variable es " + targetElement + " y el tipo es " + typeof targetElement);

function sayHello() {
    alert("Hola, Mundo"); // Mensaje de salida
}

function selfDestroy(me) {
    var targetElement;

    // 1) Capturar el target (self)
    targetElement = me;

    // 2) Destruir el target
    targetElement.style.display = "none";
}

function destroyOther() {
    var targetElement;

    // 1) Capturar el target (other)
    targetElement = document.getElementById("box1");

    // 2) Destruir el target
    targetElement.style.display = "none";
}

/*
--------------------------------
Programación orientada a eventos
--------------------------------

Requisitos/historias:

1) Al pinchar en un botón sale una ventana emergente saludando al mundo
2) Al pinchar en un círculo negro, este desaparece como si nunca hubiera existido

Tabla de eventos/comportamientos:

    Event | Trigger | Target  | Handler
          | Element | Element | Function
    ---------------------------------------
1)  click | #btn1   | -       | sayHello()
2)  click | .box    | self    | selfDestroy()
*/

/* --------------- Ejemplo con referencias a funciones --------------- */

var conEducacion = function( tipo ) {
    if( tipo == "doctor" ) {
        return "Dr. ";
    }

    return "";
}

var sinEducacion = function( tipo ) {
    return "";
}

function prefijo(tipo, funcionTratadora) {
    return funcionTratadora(tipo);
}

var tratamiento = "doctor";

function saludar() {
    document.getElementById("greeting").innerHTML += prefijo(tratamiento, conEducacion) + " David";
}

saludar();

/* --------------- Ejemplo arrays --------------- */

var misCosas = [ "ordenador", "pizarra" , "movil" ];
misCosas[1] = "pantalla";
//console.log(misCosas[1]); // pantalla

/* --------------- Ejemplo bucles --------------- */

var contador = 0;
var bonito = false;

while( bonito ) {
    console.log("Happy friends");

    if(contador < 3)
        contador++;
    else
        bonito = false;
}

var frutas = [ 'peras', 'limones', 'tomates' ];
frutas.push('papaya');

for(i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
