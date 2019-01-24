window.cipher = {
  //..
  encode: (offset, mensaje) => {
   let palAscii = "";
    for (let i = 0; i < mensaje.length; i++) {
      let ascii = mensaje.charCodeAt(i);
      let numOffset = ((ascii - 65 + parseInt(offset)) % 26 + 65);
      let cambioLetra = String.fromCharCode(numOffset);
      palAscii += cambioLetra;
    }
   return palAscii;
    },

  decode: (offset, mensaje) => {
    let palAscii = "";
    for (let i = 0; i < mensaje.length; i++) {
      let ascii = mensaje.charCodeAt(i);
      let numOffset = ((ascii + 65 - parseInt(offset)) % 26 + 65);
      let cambioLetra = String.fromCharCode(numOffset);
      palAscii += cambioLetra;
    }
    return palAscii;
  }








};
