// extrae la primera coincidencia encontrada y solo una.

const post = [
  { id: 1, title: "Apple", description: "Description of post 1" },
  { id: 2, title: "Orange", description: "Description of post 2" },
  { id: 3, title: "Guava", description: "Description of post 3" },
  { id: 4, title: "Banana", description: "Description of post 4" },
];
const find = post.find((post) => post.title == "Guava");
//console.log(found.id);

const rubro = [
  { value: "Todos", label: "Todos", dataname: "Todos" },
  {
    value: "2",
    label: "Hogar y servicios",
    dataname: "Hogar Y Servicios",
  },
  { value: "8", label: "Mundo Verde", dataname: "Mundo Verde" },
  { value: "9", label: "Supermercados", dataname: "Supermercados" },
  { value: "1", label: "Comercio", dataname: "Comercio" },
  { value: "6", label: "Alimentación", dataname: "Alimentación" },
  { value: "5", label: "Viajes", dataname: "Viajes" },
  { value: "4", label: "Transporte", dataname: "Transporte" },
  { value: "7", label: "Educación", dataname: "Educación" },
  { value: "3", label: "Salud", dataname: "Salud" },
];

//const found = (array, keyA = '', value) => array.find(elemt => elemt.keyA == value)

const found = (array,keyA = '', id) => array.find(elem => elem[keyA] == id)

console.log(found(rubro,'value',3).label);

 const findByKey = (arrItems = [], keyToFind, valueToMach) => arrItems.find((item) => item[keyToFind] === valueToMach);


console.log(findByKey(rubro,'value','3').label);