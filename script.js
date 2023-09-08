/**
 * Declare un nombre de función randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función devuelve el número hexadecimal.
 */

function randomHexaNumberGenerator() {
  // numeracion decimal (10 digitos) => 0 - 9
  // numeracion hexadecimal (16 digitos) => 0 - 9, a - f (a,b,c,d,e,f)
  const valoresHexa = "0123456789abcdef";
  const indexHexa = Math.floor(Math.random() * valoresHexa.length);
  // console.log('indice: ', indexHexa);
  return valoresHexa[indexHexa];
}
// console.log(randomHexaNumberGenerator());

function randomHexaNumberGeneratorV2(caracteres) {
  // const valoresHexa = "0123456789abcdef";
  const indexRandom = Math.floor(Math.random() * caracteres.length);
  return caracteres[indexRandom];
}
console.log("String: ", randomHexaNumberGeneratorV2("0123456789abcdefHGTRESDWFDFH%^&%^&$#%#$@$#"));

console.log("Array: ", randomHexaNumberGeneratorV2(['u', 'y', '&', '(', '%']));


function getRandomColorHexa() {
  let colorHexa = '#';
  for (let iter = 1; iter <= 6; iter++) {
    colorHexa += randomHexaNumberGenerator();
  }
  return colorHexa;
}

console.log(getRandomColorHexa());

// posible aplicabilida de la funcion de generar colores aleatorios
// function changeBody() {
//   const bgColor = getRandomColorHexa();
//   document.body.style.backgroundColor =  bgColor;
//   console.log(bgColor);
// }

// Cristian version!!
const mimatriz = ["ay!", "por", "que", "el", "mio", "no", "se", "ve", "igual?"]

function invertirArreglo(arreglo) {
  let invertido = [];
  for (let i = 0; i < arreglo.length; i++) {
    invertido[i] = arreglo[arreglo.length - 1 - i]
  }
  return invertido;
}

console.log(invertirArreglo(mimatriz));

// Otra forma (complicada como nos gusta)
function reverseArray(arreglo) {
  let aux;
  for (let index = 0; index < (arreglo.length - 1 - index); index++) {
    console.log("index: ", index);
    console.log("index invert: ", arreglo.length - 1 - index);
    aux = arreglo[index];
    arreglo[index] = arreglo[arreglo.length - 1 - index];
    arreglo[arreglo.length - 1 - index] = aux;
  }
  return arreglo;
}


console.log("Invertir es complicado: ", reverseArray(mimatriz));