/**
 * Propiedades de reduce para recorrer arrays
 * numbers.reduce((acumulador, currentValue, index, array) => { })
 **/

// Array con numbers
const numbers = [2, 4, 6, 8, 10];

const res = (array) =>
  array.reduce((acumulador, currentValue) => acumulador + currentValue);
// console.log(res(numbers));

// Funcion reduce con inicializador
const resInicializador = (array) =>
  array.reduce((acumulador, currentValue) => acumulador + currentValue, 10);
// console.log(resInicializador(numbers));

// Array con strings
const strings = ["Mi", "nombre", "es", "Yayo"];
const resString = (array) =>
  array.reduce((acumulador, item) => acumulador + " " + item, "Hola");
// console.log(resString(strings));

// array de Objetos
const obj = [
  { nombre: "Marcos", edad: 15 },
  { nombre: "Pablo", edad: 45 },
];
// debe considerar un valor inicializador para empezar desde el primer objeto, con valor 0 dentro del array.
const resObj = (array, objKey) =>
  array.reduce((acumulador, item) => acumulador + item[objKey], 0);
// console.log(resObj(obj,'edad'));

// Reduce con otros metodos
const numbersBigs = [10, 0, 50, 125, 75, 6, 3];

// obtener el valor minimo
const resMin = (array) => array.reduce((acumulador, item) => Math.min(acumulador, item),0)
console.log(resMin(numbersBigs));

// obtener el valor maximo
const resMax = (array) => array.reduce((acumulador, item) => Math.max(acumulador, item),0)
console.log(resMax(numbersBigs));