const url = 'planilla.json'

var app = document.getElementById('app');



var buscador = document.createElement("div")
buscador.setAttribute("id", "buscador-component")
buscador.setAttribute("class", "container");
app.appendChild(buscador)
buscadorComponent = document.getElementById('buscador-component')
buscadorComponent.innerHTML = `
<div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">search</i>
        <input id="campoBuscar" name="buscador" type="search" class="validate">
        <label for="icon_prefix">Busca aquí tu producto</label>
      </div>
    </div>
  </form>
</div>
`
campoBuscar = document.getElementById('campoBuscar')
campoBuscar.addEventListener("keyup",filtrar,false)

function filtrar (datos,positivo){
  fetch(url)
  .then(res => res.json())
  .then(datos =>
    filtrar(datos,"si")
    )
  .catch(err => console.log(err)); 
  // contenido.innerHTML = ``;
  // contenido.innerHTML += `
  // <h1 class="header center orange-text">Productos</h1>
  // <div class="row center">   
  //    <h5 class="header col s12 light">La cantidad de productos es de: ${data.length} items</h5>
  //  </div>
  //  <div class="row">
  //  ${data.map(productTemplate).join('')}
  //  </div> 
  //  `
  // const contenido = document.getElementById('contenido');
  // contenido.innerHTML = '';
  // const texto = campoBuscar.value.toLowerCase();
  console.log('aprete tecla');
}

var content = document.createElement("div");
content.setAttribute("id", "contenido");
content.setAttribute("class", "container");
app.appendChild(content);


var lista = document.createElement("div");
lista.setAttribute("id", "lista");
app.appendChild(lista);

let punto = precio => precio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); 
  
//   function punto(precio) {
//     return precio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); 
// }
     
let productTemplate = valor =>
    `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${'img-ofertas/' + valor.img}"/>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
        <span class="card-title">${ valor.producto }</span>
        <p>${ valor.descripcion }</p>
          <h2>${valor.ofertaPrecioUno ? `$${punto(valor.ofertaPrecioUno)}` : ''}</h2>
          <h3>${valor.ofertaPrecioDos? `$${punto(valor.ofertaPrecioDos)}` : ''}</h3>
          <blockquote>
            valor precio no socio: ${valor.precioNosocio ? `$${punto(valor.precioNosocio)}`:''}
          </blockquote>
        </div>
      </div>
    </div>
    `; 
    
// function traerDatos(datos) {
 let traerDatos = data => {

  contenido.innerHTML = ``;
  contenido.innerHTML += `
  <h1 class="header center orange-text">Productos</h1>
  <div class="row center">   
     <h5 class="header col s12 light">La cantidad de productos es de: ${data.length} items</h5>
   </div>
   <div class="row">
   ${data.map(productTemplate).join('')}
   </div> 
   `
   };


     fetch(url)
			.then(res => res.json())
			.then(datos =>
			 //console.log(datos)
				traerDatos(datos)
               )
      .catch(err => console.log(err));

     