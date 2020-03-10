//leer formulario

const
     ui = new Interfaz()
     cotizador = new API('dfdda60b9dab6c098d37fe8a8d42cb4fabbaee2c0ee1e728860e0226b3b21dff')
     formulario = document.getElementById('formulario')
     
cotizador.obtenerMonedasAPI();
ui.mostrarMensaje()

formulario.addEventListener('submit',(e) => {
     e.preventDefault()
     // console.log('enviando...')
     
     // leer la moneda seleccionada
     const 
          monedaSelect = document.getElementById('moneda')
          monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value
     
          // leer la criptomoneda seleccionada
          criptoMonedaSelect = document.getElementById('criptomoneda')
          criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value

     // console.log(monedaSeleccionada);
     if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
          // arrojar alerta de error
          console.log('selecciona algo')
          ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center')
     } else {
          console.log('todo bien!')
          
     }
     
})