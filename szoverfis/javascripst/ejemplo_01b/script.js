
//Crea un elemento parrafo cada vez que hacemos click en el boton
//Lo agrea al final del documento

function crearParrafo () {
    let para = document.createElement("p");
    para.textContent = "Has pulsado el buton";
    document.body.appendChild(para);
}
/* Recorre el documento en busca de los botones que hay*/
const buttons = document.querySelectorAll ("button"); 
// mennyi selector van a documentben
console.log("Hay" + buttons.length + "botonrd rn rl documento");
for (let i=0 ; i < buttons.length ; i++){
    buttons[i].addEventListener("click",crearParrafo);
}

// momentario de una sola linea

/* Esto es un bloque
 de comentario */

