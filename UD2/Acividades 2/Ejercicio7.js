let num;
let sum = 0;

do{
    num = parseInt(prompt("Introduce un número"));
    sum += num;
}while(num != 0);

alert("El resultado es: " + sum);