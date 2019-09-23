
// Funcion para crear divs
   let createNewElement = (nombreElemento,nombreElementoString,claseElementoString) => {
     nombreElemento = document.createElement("div")
     nombreElemento.setAttribute("id", nombreElementoString)
     nombreElemento.setAttribute("class", claseElementoString)
     app.appendChild(nombreElemento)
     // var elementoSalida = document.getElementById(nombreElementoString)
     }
 // Cierre Funcion para crear divs
 export {createNewElement}