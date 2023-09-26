let resultado = "";

for(let i = 25; i > 0; i--){
    if (i % 2 == 0) {
        resultado += i + " ";
    }
}

alert("Los números pares entre 25 y 1 son: " + resultado);