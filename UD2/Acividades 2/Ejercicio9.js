let num = parseInt(prompt("Introduce un número"));
let i = 1;
let res = 1;

while (i <= num){
    res *= i;
    i++;
}

alert("El factorial del número " + num + " es: " + res);