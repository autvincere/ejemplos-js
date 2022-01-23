const data = {
  15555: [],
  1700: [
    {
      id: 18182,
      numeroTarjeta: "**** **** **** 6900",
      numeroCuenta: 170024870,
      descripcion: "Débito Coopeuch",
      rut: "109258970",
      estado: "ACTIVA",
    },
     ],
     1900: [
          {
            id: 18182,
            numeroTarjeta: "**** **** **** 6900",
            numeroCuenta: 170024870,
            descripcion: "Débito Coopeuch",
            rut: "109258970",
            estado: "ACTIVA",
          },
        ],
};

const arr = Object.entries(data)
  .map((value) => value)
     .flat(1);
  
const arr2 = Object.entries(data).map((value) => value.flat());
const largo = arr2.filter(value => value.length > 1).flat()
const seleccion = largo.filter(value => value.estado === 'ACTIVA',)
 console.log(largo);

const obj = arr2.reduce(function (acc, cur, i) {
  acc[i] = cur;
  return acc;
}, []);
// console.log(obj);
// const arrSome = data.some((item)=> item.length)
