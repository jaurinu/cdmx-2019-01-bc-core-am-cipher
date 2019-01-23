//Declarar evento boton encriptar y funciones 
//const Cifrado = document.getElementById('botonCifrar')cifrado.addEventListener('click' , ()=>{

//const offset = document.getElementById('offset').value;
//const mensaje = document.getElementById('mensaje').value.toUpperCase();
const resCifrado = document.getElementById('resCifrado');

document.getElementById('botonCifrar').addEventListener('click', () => {

  //Obtener offset y texto a encriptar convertirlo a mayusculas
  
  let offset = document.getElementById('offset').value;
  let mensaje = document.getElementById('mensaje').value.toUpperCase();

 //console.log (mensaje);
  //console.log(offset);
  //console.log(mensaje);
 
  let resultado = window.cipher.encode(offset, mensaje);
  resCifrado.innerHTML = resultado;
  //console.log(resCifrado);
})

//let resultado=resCifrado.encode.window.cipher
//resultado.innerHTML = resCifrado;
//console.log(resultado);

document.getElementById('botonDescifrar').addEventListener('click', () => {

  //Obtener offset y texto a encriptar convertirlo a mayusculas
  let offset = document.getElementById('offset').value;
  let mensaje = document.getElementById('mensaje').value.toUpperCase();

  //console.log(offset);
  //console.log(mensaje);

 let resultado = window.cipher.decode(offset, mensaje);
 resCifrado.innerHTML = resultado;
})
