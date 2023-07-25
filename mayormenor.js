const arreglo = [1, 2, 4, 20, 15, 5];

const arregloOrdenado = arreglo.slice().sort((a, b) => a - b);

const numeroMenor = arregloOrdenado[0];

const numeroMayor = arregloOrdenado[arregloOrdenado.length - 1];

console.log("Arreglo ordenado de menor a mayor:", arregloOrdenado);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);