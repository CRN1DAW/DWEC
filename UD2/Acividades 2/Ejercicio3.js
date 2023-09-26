let numHermanos = parseInt(prompt("¿Cuántos hermanos tienes?"));
let cantidad = parseFloat(prompt("Introduce una cantidad"));

if(numHermanos >= 3){
    cantidad -= cantidad * 0.15;
    alert("Cantidad total con descuento del 15%: " + cantidad);
}
else if(numHermanos > 0){
    cantidad -= cantidad * 0.05;
    alert("Cantidad total con descuento del 5%: " + cantidad);
}
else{
    alert("Cantidad total: " + cantidad);
}