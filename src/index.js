//Declarar evento boton encriptar y funciones 

const resCifrado = document.getElementById('resCifrado');

document.getElementById('botonCifrar').addEventListener('click', () => {
  let offset = document.getElementById('offset').value;
  let mensaje = document.getElementById('mensaje').value.toUpperCase();
  let resultado = window.cipher.encode(offset, mensaje);
  resCifrado.innerHTML = resultado;
 })

document.getElementById('botonDescifrar').addEventListener('click', () => {
  let offset = document.getElementById('offset').value;
  let mensaje = document.getElementById('mensaje').value.toUpperCase();
  let resultado = window.cipher.decode(offset, mensaje);
 resCifrado.innerHTML = resultado;
})
