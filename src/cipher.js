window.cipher = {
//..
  encode: (offset,mensaje) => {
   
//for (let i=0; i<textoEncriptar.length; i++) {
//    let ascii = textoEncriptar.charCodeAt(i);
//    console.log (ascii);
    
//}

//let textoffset = ((ascii-65+numeroOffset)%26+65);
//console.log (textoffset);

//let ascii = "";
//let cadenaascii = [];
//const mensajeCifrado = () => {
//const arrascii = '';

for (let i=0; i<mensaje.length; i++) {
  let ascii = mensaje.charCodeAt(i);
  let numOffset = ((ascii-65+parseInt(offset))%26+65);
  console.log (ascii);
  console.log (numOffset);
  //arrascii += numOffset;
  
}


//console.log (mensajeCifrado);//
//}
},




//let textoffset = ((ascii-65+numeroOffset)%26+65);
//console.log (textoffset);







//let numeroOffset
//let textoEncriptar

  





  decode: () => {}
};
