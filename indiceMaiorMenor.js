var random = [2, 3, 1, 4, 6, 5];

// Funcao para retornar o menor valor de um array
Array.min = function(array) {
  return Math.min.apply(Math, array);
};
// Funcao para retornar o maior valor de um array
Array.max = function(array) {
  return Math.max.apply(Math, array);
};
console.log( Array.min(random) ); // Menor valor
console.log( Array.max(random) ); // Maior valor

// Retorna a posicaoo do numero 1 no array
console.log( random.indexOf(1) ); 
