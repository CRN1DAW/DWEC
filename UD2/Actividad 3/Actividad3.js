function generarColorAleatorio() {
    let combinaciones = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color += combinaciones[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
  document.body.style.backgroundColor = generarColorAleatorio();
  