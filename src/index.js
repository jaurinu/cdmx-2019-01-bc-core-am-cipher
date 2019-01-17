//Declarar evento boton encriptar y funciones 
//const Cifrado = document.getElementById('botonCifrar')cifrado.addEventListener('click' , ()=>{

document.getElementById('botonCifrar').addEventListener('click',()=>{  

    //Obtener offset y texto a encriptar convertirlo a mayusculas
    let offset = document.getElementById ('offset').value;
    let mensaje = document.getElementById ('mensaje').value.toUpperCase();
    
    
    console.log(offset);
    console.log(mensaje);
    window.cipher.encode(offset,mensaje);
   
})
