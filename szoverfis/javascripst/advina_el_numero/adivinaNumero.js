//genera numero aleatorio
let randomNumber = Math.floor(Math.random()*100)+1;

//0.99*100=99 Math.random() (Genera entre 0.00 y 0.99)

//guarda la referencia a cada parrafo de informaticion
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const low0rHi = document.querySelector(".low0rHi");

//guardan informacion a la entrada de texto y al boton "enviar"
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector (".guessField");

//Variable para los intentos
//La segunda guarda la referencia al buton reset
let guessCount = 1;
let resetButton;
guessField.focus();

//Function para comprobar el numero a adivinar 
function checkGuess(){
    //Guarda el valor ingresado en el campo numero y se asegura que es un numero
    //Con Number()
    let userGuess = Number(guessField.value);

    //Compueba si el jugador esta en el primer intento
    if (guessCount === 1){
        guesses.textContent = "Intentos anteriores:";
    }
    guesses.textContent += userGuess + " ";

    /* Este bloque conditional compreueba:
    1.Si el numero insertado ha sido adivianado.
    Si es asi ,lanza el mesaje de felicitacion con un fondo verde.
    2.Si no , Compreueba si el numero de intentos es 10
    Si es asi,lanza el mesaje fin del juego
    3.Si no ,lanza el mesaje numero no adiviando con fondo rojo.
    Comprueba si el numero es mayor o menor que el que hay que adivinar
    Lanzando los mensajes correspundientes
    */

    if (userGuess === randomNumber){
        lastResult.textContent = "Felicidades!Lo adivinaste!";
        lastResult.style.backgroundColor = "green";
        low0rHi.textContent = " ";
        setGameOver();
    }
    else if (guessCount === 10){
        lastResult.textContent = "Fin del Juego!"; //End the game
        setGameOver()
    }
    else {
        lastResult.textContent = "Incorrecto!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber){
            low0rHi.textContent = "El numero es muy bajo!";
        }
        else if (userGuess > randomNumber){
            low0rHi.textContent = "El numero es muy grande!";

        }
    }

    // Preparan las variables para el siguiente intento.
    //Vaciando el valor del campo numero
    //y aplicando el foco a este.
    guessCount++;
    guessField.value = " ";
    guessField.focus();
}

//Agregamos un evento escucha al boton guessSubmit
guessSubmit.addEventListener("click",checkGuess);


function setGameOver(){
    guessField.disabled = true; // deshabilita el campo de texto
    guessSubmit.disabled = true; //deshabilita el boton de enviar
    //crea un boton para resetar el juego y lo agrega al html
    resetButton = document.createElement ("button");
    resetButton.textContent = "Iniciar nuevo juego";
    document.body.append (resetButton);
    //generamos un evento escucha para cuando pulsemos el boton reset
    resetButton.addEventListener("click", resetGame);
}
//funcion que reseta el juego a los valores iniciales
function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = " ";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
}





