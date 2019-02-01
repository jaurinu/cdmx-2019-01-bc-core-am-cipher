//Declarar evento boton encriptar y funciones 

let offset = document.getElementById('offset');
let mensaje = document.getElementById('mensaje');
const resCifrado = document.getElementById('resCifrado');

document.getElementById('botonCifrar').addEventListener('click', () => {
  let offsetValue = offset.value;
  offsetValue = parseInt(offsetValue);
  let mensajeCase = mensaje.value.toUpperCase();
  let resultado = window.cipher.encode(offsetValue, mensajeCase);
  resCifrado.value = resultado;
 })

document.getElementById('botonDescifrar').addEventListener('click', () => {
  let offsetValue = offset.value;
  offsetValue = parseInt(offsetValue);
  let mensajeCase = mensaje.value.toUpperCase();
  let resultado = window.cipher.decode(offsetValue, mensajeCase);
 resCifrado.value = resultado;
})
