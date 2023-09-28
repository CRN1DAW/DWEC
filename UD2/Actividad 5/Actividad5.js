let nombre = prompt("Introduce tu nombre");
let apellidos = prompt("Introduce tus apellidos");
let salario = parseFloat(prompt("Introduce tu salario"));
let edad = parseInt(prompt("Introduce tu edad"));

if (salario < 1000){
    if (edad > 45){
        salario += salario * 0.15;
    } else if (edad >= 30){
        salario += salario * 0.03;
    } else{
        salario = 1100;
    }
} else if (salario <= 2000){
    if (edad > 45){
        salario += salario * 0.03;
    } else{
        salario += salario * 0.10;
    }
}

alert("Nombre y apellidos: " + nombre + " " + apellidos + "\nEdad: " + edad + "\nSalario: " + salario)
