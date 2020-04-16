//cosntructor para seguro
function Seguro(marca, anio, tipo){
this.marca = marca
this.anio = anio
this.tipo = tipo
}

// Todo lo que se muestra
function Interfaz(){

}

//eventListener
const formulario = document.getElementById('cotizar-seguro')

formulario.addEventListener('submit', function(e){
     e.preventDefault();
     console.log('presionado');
     const
          marca = document.getElementById('marca') 
          marcaSeleccionada = marca.event.target.value
          // .options[marca.selectedIndex].value

          console.log(marcaSeleccionada);
          
     
})
const 
     max = new Date().getFullYear()
     min = max - 20

     selectAnios = document.getElementById('anio')

for (let i = max; i >= min; i--) {
     let option = document.createElement('option')
     option.value = i
     option.innerHTML = i
     selectAnios.appendChild(option)
     
}
