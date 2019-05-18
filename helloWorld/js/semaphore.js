/* ----------- Ejercicio 1 ----------- */

var switcherOn = false;

function changeSwitcher() {
    // Si el interruptor está apagado...
    if( !switcherOn ) {
        // ... lo enciendo
        switcherOn = true;

        document.getElementById("switcher1").className = "switcherBtn on";
        document.getElementById("switcher1").innerHTML = "ON";
    }
    else { //  Si el interruptor está encendido...
        // ... lo apago
        switcherOn = false;
        
        document.getElementById("switcher1").className = "switcherBtn off";
        document.getElementById("switcher1").innerHTML = "OFF";
    }
}

/* ----------- Ejercicio 2 ----------- */

var stateSemaphore = 0;
/*
    0: OFF
    1: green
    2: orange
    3: red
*/

//function changeSemaphoreIfElse() {
var changeSemaphoreIfElse = function() {
    if( stateSemaphore == 0 ) {
        // ... lo enciendo (en verde)
        stateSemaphore++;

        document.getElementsByClassName("semLight")[2].className = "semLight green";
    }
    else
    if( stateSemaphore == 1 ) {
        stateSemaphore++;

        document.getElementsByClassName("semLight")[1].className = "semLight orange";
        document.getElementsByClassName("semLight")[2].className = "semLight";
    }
    else
    if( stateSemaphore == 2 ) {
        stateSemaphore++;

        document.getElementsByClassName("semLight")[0].className = "semLight red";
        document.getElementsByClassName("semLight")[1].className = "semLight";
    }
    else {
        stateSemaphore = 1;

        document.getElementsByClassName("semLight")[2].className = "semLight green";
        document.getElementsByClassName("semLight")[0].className = "semLight";
    }
}

var changeSemaphoreSwitchCase = function() {
    switch( stateSemaphore ) {
        case 0:
            /* ... */
            break;
        case 1:
            /* ... */
            break;
        case 2:
            /* ... */
        default:
            /* ... */
    }
}

var changeSemaphore = changeSemaphoreIfElse;
