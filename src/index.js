//Declarar evento boton encriptar y funciones 

let offset = document.getElementById('offset');
let mensaje = document.getElementById('mensaje');
const resCifrado = document.getElementById('resCifrado');

document.getElementById('botonCifrar').addEventListener('click', () => {
  offset = offset.value;
  mensaje = mensaje.value.toUpperCase();
  let resultado = window.cipher.encode(offset, mensaje);
  resCifrado.value = resultado;
 })

document.getElementById('botonDescifrar').addEventListener('click', () => {
  offset = offset.value;
  mensaje = mensaje.value.toUpperCase();
  let resultado = window.cipher.decode(offset, mensaje);
 resCifrado.value = resultado;
})
