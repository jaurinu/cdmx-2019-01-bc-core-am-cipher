window.cipher = {
  //..
  encode: (offsetValue, mensajeCase) => {
   let palAscii = "";
    for (let i = 0; i < mensajeCase.length; i++) {
      let ascii = mensajeCase.charCodeAt(i);
      let numOffset = (ascii - 65 + (offsetValue)) % 26 + 65;
      let cambioLetra = String.fromCharCode(numOffset);
      palAscii += cambioLetra;
    }
   return palAscii;
    },

  decode: (offsetValue, mensajeCase) => {
    let palAscii = "";
    for (let i = 0; i < mensajeCase.length; i++) {
      let ascii = mensajeCase.charCodeAt(i);
      let numOffset = (ascii + 65 - (offsetValue)) % 26 + 65;
      let cambioLetra = String.fromCharCode(numOffset);
      palAscii += cambioLetra;
    }
    return palAscii;
  }

};
