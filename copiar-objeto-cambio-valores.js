const orders = [
  {
    orderNum: 1,
    total: "Oscar Blancarte",
    customer: "Oscar Blancarte",
  },
  {
    orderNum: 2,
    total: "Carlos Raygoza",
    customer: "Carlos Raygoza",
  },
  {
    orderNum: 3,
    total: "Andres Bedoya",
    customer: "Andres Bedoya",
  },
];

// const nuevo = orders.map( a => a.total.toLowerCase());
const nuevo = orders.map((a) => ({ lagos: a.customer }));
console.log(nuevo);
console.table(nuevo);
