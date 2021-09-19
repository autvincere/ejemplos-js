
const data =[
     {
         id: "1",
         descripcion: "Todos"
     },
     {
         id: "2",
         descripcion: "Hogar y Servicio"
     },
     {
         id: "3",
         descripcion: "Salud"
     },
     {
         id: "4",
         descripcion: "Transporte"
     },
     {
         id: "5",
         descripcion: "Viajes"
     },
     {
         id: "6",
         descripcion: "Alimentación"
     },
     {
         id: "7",
         descripcion: "Educación"
     },
     {
         id: "8",
         descripcion: "Mundo Verde"
     },
     {
         id: "9",
         descripcion: "Supermercados"
     },
     {
         id: "10",
         descripcion: "Comercio"
     }
]
 /**
  * 
  * @param {Array.<Object>}
  * @param {string} keyValue 
  * @param {string} keyLabel 
  * @returns {Array.<Object{value:number, label:String }>} retorna un array de objetos
  */
// const changeValuesData = (data,keyA='',keyB='') => data.map(item => {
//      const container = {}
//      container[keyA] = parseInt(item.id)
//      container[keyB] = item.descripcion

//      return container
// })
const formatArrayForSelect = (data,keyA='',keyB='') => data.map(item => ({
    [keyA] : parseInt(item.id),
    [keyB] : item.descripcion
}))

console.log(
    formatArrayForSelect(data, 'value', 'label')
);

/**
 * 
 * @param {*} data 
 * @returns devuelve la data original + los campos 'label'y 'value'
 */
const changeValuesDataMap = (data,keyA = '', keyB = '') => data.map(item => ({
    [keyA]: `Crédito de ${item.descripcion} Nº ${item.id}`,
    [keyB]: item.id,
    ...item
}))

// console.log(changeValuesDataMap(data,'label','value'));