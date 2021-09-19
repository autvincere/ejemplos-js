const months = ["Jan", "March", "April", "June"];
const seleccion = months.splice(months[0], 1);
// console.log(typeof seleccion);

const newArr = [...months, ...seleccion];
console.log(newArr);
