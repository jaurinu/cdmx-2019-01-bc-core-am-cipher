window.cipher = {
  //..
  encode: (offset, mensaje) => {

   let palAscii = "";

    for (let i = 0; i < mensaje.length; i++) {
      let ascii = mensaje.charCodeAt(i);
      //console.log (ascii);
      let numOffset = ((ascii - 65 + parseInt(offset)) % 26 + 65);
      //console.log (numOffset);
      let cambioLetra = String.fromCharCode(numOffset);
      palAscii += cambioLetra;
    }
    //console.log (palAscii); 
   return palAscii;
    },

    

  decode: (offset, mensaje) => {
    let palAscii = "";

    for (let i = 0; i < mensaje.length; i++) {
      let ascii = mensaje.charCodeAt(i);
      //console.log (ascii);
      let numOffset = ((ascii + 65 - parseInt(offset)) % 26 + 65);
      //console.log (numOffset);
      let cambioLetra = String.fromCharCode(numOffset);
      palAscii += cambioLetra;
    }
    //console.log (palAscii);
    return palAscii;
    
  }








};
