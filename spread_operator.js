
// se borra el parentesis
const array = [...[1, 2, 3]]
// console.log(array);
// [ 1, 2, 3 ]

const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

// se crea un array multidimensional, no se logra unir los arrays llamados
const attemptToMerge = [array1, array];
//console.log(attemptToMerge);
// [ [ 1, 2, 3 ], [ 1, 2, 3 ] ]

// para unirlos en un solo array se hace con el spread
const mergedArray = [...array1, ...array2]
// console.log(mergedArray);
// [ 1, 2, 3, 4, 5, 6 ]

/**
 * merged objects
 * Cuando se combinan 2 objetos y hay una coincidencia de valor llave,
 * queda asignado el valor de la ultima llave agregada
 */
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);
// { foo: 'baz', x: 42, y: 13 }