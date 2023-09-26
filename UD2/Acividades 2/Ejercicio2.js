let ciudad = prompt("¿Dónde vives?");
let edad = parseInt(prompt("¿Cúal es tu edad?"));

if (ciudad == "Alicante" && edad >= 18 && edad <= 35){
    alert("Puedes acceder al carnet de empresarios emprendedores");
} else{
    alert("No puedes acceder al carnet de empresarios emprendedores");
}