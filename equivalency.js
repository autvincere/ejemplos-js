const data = [
  {
    id: "1",
    descripcion: "Todos",
    icono: "",
  },
  {
    id: "2",
    descripcion: "Hogar y servicios",
    icono: "Hogar y Servicios",
  },
  {
    id: "3",
    descripcion: "Salud",
    icono: "Salud",
  },
  {
    id: "4",
    descripcion: "Transporte",
    icono: "Transporte",
  },
  {
    id: "5",
    descripcion: "Viajes",
    icono: "Viajes",
  },
  {
    id: "6",
    descripcion: "Alimentación",
    icono: "Alimentación",
  },
  {
    id: "7",
    descripcion: "Educación",
    icono: "Educación",
  },
  {
    id: "8",
    descripcion: "Mundo Verde",
    icono: "Mundo Verde",
  },
  {
    id: "9",
    descripcion: "Supermercados",
    icono: "Supermercado",
  },
  {
    id: "10",
    descripcion: "Comercio",
    icono: "Tienda",
  },
];
const name = "Tienda"
const equivalency = data.filter(item => item.type === name).map(item => item.icono)
//console.log(equivalency);

const DEFAULT_LOKI = 'Loki'
const DISFRACES_LOKI = {
  'iron-man': 'Magneto',
  Hulk: 'Thanos',
  Thor: 'Odin'
}

const loki = DISFRACES_LOKI['Thor'] || DEFAULT_LOKI
//console.log(loki);

const perro = {
  nombre: "Scott",
  color: "Negro",
  macho: true,
  null: 5,
  '': 'Caja',
};

// console.log(perro['null']);
// console.log(perro[null]);
// console.log(perro['']);

const MEDIO_DE_PAGO_HIPOTECARIO = {
  '': 'Caja',
  2: 'PAC Tarjeta de Credito',
  4: 'PAC Automático',
  NP: 'No Programado',
};
const medioDePago = 'NP'
console.log(MEDIO_DE_PAGO_HIPOTECARIO[medioDePago.toString()]);