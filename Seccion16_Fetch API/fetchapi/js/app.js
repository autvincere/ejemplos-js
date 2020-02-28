const cargarTXT = () =>{
     fetch('datos.txt')
          // .then(res => console.log(res.text()))
          .then(res => res.text())
          .then(empleados => 
               {console.log(empleados)
               return document.getElementById('resultado').innerHTML = empleados
               }
          )
          .catch(error => console.log(error))
}

const cargarJSON = () => {
     fetch('empleados.json')
          // .then( res => console.log(res))

          // Aca hace la coneccion y definimos como queremos devuelta los datos (json)
          .then( res => res.json())
          .then( data => 
               {
                    console.log(data)
                    let html = `<ul>`
                    html += data.map(dato => {
                         return `<li>Nombre: ${dato.nombre}, Puesto: ${dato.puesto}</li>`
                    }).join('')
                    html += `</ul>` 
               return document.getElementById('resultado').innerHTML = html
               }
          )
          .catch(error => console.log(error))
}

const cargarREST

document.getElementById('txtBtn').addEventListener('click', cargarTXT)

document.getElementById('jsonBtn').addEventListener('click', cargarJSON)