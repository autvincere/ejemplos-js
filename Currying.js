// foo(a, b)
// foo(a)(b)

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 6));

// Currying Básico
const sumarConCurrying = (a) => (b) => a + b;
console.log(sumarConCurrying(5)(6));

const sum2 = sumarConCurrying(4)
console.log(sum2(2));
// */

// const curry= (f) => a => b =>
function multiply(a, b) {
  return a * b;
}

// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

const curry = (f) => (a) => (b) => f(a, b);

const curriedMultiply = curry(multiply);

const duplicate = curriedMultiply(2);
console.log(duplicate(4));

const triplicate = curriedMultiply(3);
console.log(triplicate(3));
