const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Manzana"];
// console.log(fruits.length);

// const sliceFruits = (arr) => {
//   if (arr.length > 3) {
//     return arr.slice(0, 3);
//   } else {
//     return [...arr];
//   }
// };

const sliceFruits = (arr) => (arr.length > 3 ? arr.slice(0, 3) : [...arr]);

console.log(sliceFruits(fruits));

function chunkArray(array, size) {
  if (size >= array.length) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}
const dividedArray = chunkArray(fruits, 3);
console.log(dividedArray);

console.log(dividedArray.map((item) =>  item ));
