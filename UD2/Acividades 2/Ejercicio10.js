let numSecreto = parseInt(prompt("Introduce un número"));
let num = parseInt(prompt("Adivina el número"));

while(num !== numSecreto){
    if(num > numSecreto){
        alert("El número secreto es menor que " + num);
    }else{
        alert("El número secreto es mayor que " + num);
    }
    num = parseInt(prompt("Adivina el número"));
}

alert("¡Correcto! El número es: " + num);