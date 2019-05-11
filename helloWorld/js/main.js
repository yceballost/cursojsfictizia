var targetElement; // Declarar una variable

targetElement = 3; // Inicializar una variable
console.log("El valor de mi variable es " + targetElement + " y el tipo es " + typeof targetElement);

targetElement = "hola "; // Asignar un valor 
console.log("El valor de mi variable es " + targetElement + " y el tipo es " + typeof targetElement);

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