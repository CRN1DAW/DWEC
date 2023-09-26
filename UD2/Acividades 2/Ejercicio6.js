let num1 = parseInt(prompt("Introduce un número"));
let num2 = parseInt(prompt("Introduce un número"));
let signo = prompt("Introduce un signo de una operación (+, -, *, /)");
let resultado = "El resultado es: ";

if(signo == "+"){
    resultado += num1 + num2;
} else if(signo == "-"){
    resultado += num1 - num2;
} else if(signo == "*"){
    resultado += num1 * num2;
} else if(signo == "/"){
    resultado += num1 / num2;
} else{
    resultado = "El signo no es correcto";
}

alert(resultado);
