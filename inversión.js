const userInput = window.prompt('Ingrese varios numeros separados por coma:');
const arrayPalabras = userInput.split(',');

for (let i = 0; i < arrayPalabras.length; i++) {
  arrayPalabras[i] = parseFloat(arrayPalabras[i]);
}

console.log(arrayPalabras);