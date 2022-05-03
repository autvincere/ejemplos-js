// Includes devuelve true o false, combinado con otros metodos puede filtrar por el true

const animals = ["cat", "Chicken", "dog", "Pig", "Raccoon"]
const returnValue = animals.filter(
animal => animal.includes("c")
)
console.log(returnValue)