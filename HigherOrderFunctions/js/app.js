const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

// antiguamente

let colorNegro = []
for (let i = 0; i < autos.length; i++) {
	 const element = autos[i].marca;
	// console.log(element);
	// if (autos[i].precio > 40000){
	// 	console.log(autos[i]);	
	// }
	// if (autos[i].puertas === 4) {
	// 	// console.log(autos[i]);
	// 	let puertas = autos[i]
	// 	console.log(puertas);	
	// }

	// if (autos[i].color === 'Negro') {
	// 	colorNegro.push(autos[i])	
	// }		
}
// console.log(colorNegro);

// forEach
// let colorRojo = []
//  autos.forEach(auto => {
// 	if(auto.color === 'Rojo'){
// 		colorRojo.push(auto)
// 	}
//  })
//  console.log(colorRojo)

//Imitando al metodo "map"
// let resultado = autos.forEach(auto =>{
// 	return auto
// })
// console.log(resultado)

// map
//El map siempre va a crear un nuevo arreglo a diferencia de el for o forEach que necesita de un push
// let resultado = autos.map(auto => {
// 	//  return auto

// 	//En estos casos conviene mejor usar filter
// 	if (auto.marca === 'BMW') {
// 		return auto
// 	}
// })
// console.log(resultado)

// filter
// let resultado = autos.filter(auto => {
// 	return auto.marca == 'BMW'
// })
// let resultado = autos.filter(auto => auto.year >= 2015 && auto.year <= 2017)
// let resultado = autos.filter(auto => auto.transmision == 'manual')
// console.table(resultado);

// find
// el find retorna el 'primer elemento' que encuentre en el arreglo
// let resultado = autos.find(auto => auto.modelo == 'Mustang')
// let resultado = autos.find(auto => auto.marca == 'BMW')
// console.table(resultado)

// reduce
//recibe 2 parametros, un valor acumulador y un valor del array, este se va acumulando y realizando la operacion declarada hasta haber recorrido todo el array.
//Tambien se puede agregar un tercer parametro opcional al final de la

// let resultado = autos.reduce((total, auto) =>  total + auto.precio, 0 ) 
// const numeros = [1,2,3]
// let resultado = numeros.reduce((total, numero) => total + numero, 0)
// console.log(resultado);

// some
// Es muy similar a filter, pero devuelve solo 1 valor "true" o "false"
let resultado = autos.some(auto => auto.marca === 'caca')
console.log(resultado);

