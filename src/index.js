//Declarar constantes del offset y del texto que obtengo del documento html



const botonEncriptar = document.getElementById ('buttonEncriptar').addEventListener ('click' , function() {
    let numeroOffset = document.getElementById ('offset').value;
    let textoEncriptar = document.getElementById ('textEncriptar').value;
    
    console.log(numeroOffset);
    console.log(textoEncriptar);
    })
