//Declarar evento boton encriptar y funciones 

const botonCifrar = document.getElementById ('botonCifrar').addEventListener ('click' , ()=>{  

    //Obtener offset y texto a encriptar convertirlo a mayusculas
    let numeroOffset = document.getElementById ('offset').value;
    let textoEncriptar = document.getElementById ('mensaje').value.toUpperCase();
    
    console.log(numeroOffset);
    console.log(textoEncriptar);
   
})
