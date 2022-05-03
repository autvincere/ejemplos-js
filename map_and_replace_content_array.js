const state = [
  {
    userId: 1,
    id: 100,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 101,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 102,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 103,
    title: "et porro tempora",
    completed: false,
  },
];

/** 
 cambiar cada item del array con una condicion
**/
// const newState = state.map((item) =>
//     item.id === 101 ? true  : false
// );

/**
 * Cambiar solo el item del array que coincida con la condicion y hacer una copia del resto
 */
const newState = state.map((item) =>
  item.id === 101 ? { ...item, completed: true } : item
);
// console.log({ state });
console.log(newState);

/**
 * Crear Key y asignar value de objeto en array
 */
// const nuevo = state.map((item) => ({ lagos: item.title }));

/**
 * Crear Key y asignar value de objeto en array con clausula por si no existe key
 */
// const nuevo = state.map((item) => ({ lagos: item.title }));
const nuevo = state.map((item) =>
  item.peo ? { lagos: item.peo } : { lagos: item.title }
);

console.log(nuevo);
