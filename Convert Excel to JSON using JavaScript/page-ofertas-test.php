<?php
    /**
     * @package WordPress
     * @subpackage Unimarc
     * @since Unimarc
     Template Name: test-ofertas-excel
     */
    
    get_header();
    ?>

<!-- OBTENER json de custom postype -->
<?php
    $args = array(
                  'post_type' => 'ofertas',
                  'posts_per_page'  => 1,
                  );
    
    $category_posts = new WP_Query($args);
    
    if($category_posts->have_posts()) :
    while($category_posts->have_posts()) :
    $category_posts->the_post();
    $ofertas = get('carga');
    
    ?>
<script>

const
url = '<?php echo $ofertas;?>'
console.log(url)

</script>
<?php
    endwhile;
    else:
    ?>
Vaya, no hay entradas.
<?php
    endif;
    ?>
<!-- cierre obtener json de custom postype -->
<style>
    h2,h4,h3{
      font-size: 0.8em;
      display: block;
      padding: 2px 0;
    }
    .filters .btn{margin-right: 5px;}
    #ofertas .col.product{
        width: 23%;
        height: auto;
        min-height: 450px;
        }
    .isotope-pager{padding: 0 0 0 10px;}
    .isotope-pager a{
        padding: 5px;
        background: #e22726;
        display: inline-block;
        color: #fff;
        margin: 0 11px 49px;
            border-radius: 4px;
            width: 20px;
        text-align: center;
    }
    .btn-default {
        color: #333;
        background-color: #fff;
        border-color: #ccc;
    }
    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        margin: 0 5px 5px 0;
    }
    
    .btn-default.active, .btn-default:active, .open>.dropdown-toggle.btn-default {
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
    }	
    
    .btn-default:hover {
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
    }
    
    .list-inline {
        padding-left: 0;
        margin-left: -5px;
        list-style: none;
        text-align: center;
    }
    #cajabotones .list-inline>li {
        padding: 0;
    }
    .list-inline>li {
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
    }
    .filters .btn {
        margin: 0 5px 5px 0;
    }
    .content .box-slider{height: auto;}
    #ofertas .swiper-wrapper{height: auto;}
    #cajabotones{ margin: 0 10px 30px; }
    #ofertas h2{margin: 0 10px 30px; }
    #ofertas .col.product .oferta p {font-family:'Trebuchet MS', Trebuchet, sans-serif;font-size: 12px;    padding: 10px 5px;
    background-color: #f7f7f7;
    color: #5a5a5a;
    margin-top: 5px;}
  
    .pagination {
        clear:both;
        padding:20px 0;
        position:relative;
        text-align: center;
        line-height:20px;
        font-family: 'clarendon_cn_btbold';
    }
  
    .pagination span, .pagination a {
        display:block;
        float:left;
        margin: 2px 2px 2px 0;
        padding:8px;
        text-decoration:none;
        width:20px;
        height:20px;
        color:#fff;
        background: #e7403d;
    }
  
    .pagination a:hover{
        background: #ffffff;
        color: #e7403d;
    }
  
    .pagination .current{
        padding:8px;
        background: #ffffff;
        color: #e7403d;
    }
    .capitalize::first-letter{
      text-transform: capitalize;
    }
    .levantar {
      position: absolute;
      left: 36%;
      top: 10vh;
      z-index: 4;
      box-shadow: 0px -7px 4px 3000px rgba(0, 0, 0, 0.7);
    }
    .cerrar{
      position: absolute !important;
      height: 30px !important;
      width: 30px !important;
      top: -24px !important;
      right: -24px !important;
      background-image: url('https://www.unimarc.cl/wp-content/uploads/2019/09/cancel.png');
      background-size: contain;
      background-color: #ffffff91;
      border-radius: 30px;
      cursor: pointer;
    }
    .legal{
      
    }
    .desaparece{
      display: none;
    }
    .aparece{
      display: block;
    }
    div#pop > div.grid-item{
      max-width: 321px; 
      width: 100% !important;
      margin: 0px !important;
    }
    .ahorras{
        font-family: "Trebuchet MS", Trebuchet, sans-serif;
        font-size: 16px;
    }
  </style>


<script src="https://www.unimarc.cl/wp-content/themes/unimarc/assets/js/moment-with-locales.min.js"></script>
<script src="https://www.unimarc.cl/wp-content/themes/unimarc/assets/js/xlsx.full.min.js"></script>

<main>
<div id="ofertas" class="content">
<div class="row">
<div class="col" id="col"></div>
</div>
</div>
</main>

<script>

const
app = document.getElementById('col')
productosPorPagina = 6

let
barraTags = document.createElement("div")
barraTags.setAttribute("id", "cajabotones")
barraTags.setAttribute("class", "button-group filter-button-group")
app.appendChild(barraTags)
barra = document.getElementById('cajabotones')

content = document.createElement("div")
content.setAttribute("id", "ofertas-container")
content.setAttribute("class", "grid")
app.appendChild(content)
contenido = document.getElementById('ofertas-container')

list = document.createElement("div")
list.setAttribute("id", "lista")
list.setAttribute("class", "pagination")
app.appendChild(list)
lista = document.getElementById('lista')


let excel;
let punto = precio => precio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")

//FUNCION PARA DIVIDIR ARRAY DE OBJETOS ***************************************
//*****************************************************************************
function separar(base, maximo) {
    var resultado = [[]];
    var grupo = 0;
    
    for (var i = 0; i < base.length; i++) {
        if (resultado[grupo] === undefined) {
            resultado[grupo] = [];
        }
        
        resultado[grupo].push(base[i]);
        
        if ((i + 1) % maximo === 0) {
            grupo = grupo + 1;
        }
    }
    return resultado;
}
//CIERRE FUNCION PARA DIVIDIR ARRAY DE OBJETOS ********************************
//*****************************************************************************

// TRAER TIEMPO moment.js *********************************************
const
fechaActual = moment().format('YYYY-MM-DD HH:mm')
// console.log(fechaActual);

// cierre TRAER TIEMPO moment.js ***************************************

let productTemplate = (valor) =>
      `
      <div class="grid-item col product" id="${valor.id}">
                <div class="product-img">
	                <img src="${ valor.imgHeader ? 'https://www.unimarc.cl/wp-content/uploads/img-header/' + valor.imgHeader : "" }"/>
	  
                <a class="inline cboxElement">
                    <img src="${ valor.img ? 'https://www.unimarc.cl/wp-content/uploads/img-ofertas/' + valor.img : "" }"/>
                    </a>
                </div>
                <div class="text oferta-text">
                  <a class="inline cboxElement">
                    <!-- Nombre Producto -->
                    ${ !valor.producto ? "" : `<h4 class="nombre-oferta">${valor.producto}</h4>`}
                  </a>

                  <!-- Descripcion Producto -->
                  ${ !valor.descripcion ? "" : ` <p class="capitalize">${valor.descripcion}.</p>`}
                </div>

                <div class="oferta">

                  <!-- Cantidad -->
                    ${ !valor.cantidad ? "" : `<h4>${valor.cantidad} $${punto(valor.precioCantidad)}</h4>` }

                  <!-- Precio Oferta -->
                  <h2>${ !valor.detallePrecioOferta ? "" : valor.detallePrecioOferta} ${ !valor.precioOfertaPorcentaje ? "" : `${valor.precioOfertaPorcentaje}% dcto <br>`} 
                 ${ !valor.PrecioOferta ? "" : `$${punto(valor.PrecioOferta)}` } ${ !valor.unidadPrecioOferta ? "" : valor.unidadPrecioOferta }</h2>

                  <!-- Precio normal -->
                  ${ !valor.tipoPrecio ? "" : `<h4>${valor.tipoPrecio} ${!valor.precioNormal ? "" : `$${punto(valor.precioNormal)}`} ${ !valor.unidad ? "" : valor.unidad } ${ !valor.medida ? "" : valor.medida } </h4>` }

                  <!-- Ahorras -->
                  ${ !valor.ahorras ? "" : `<h3 style="text-transform: uppercase;"> AHORRAS: $${punto(valor.ahorras)}</h3>`}
                  
                  <!-- Precio con tarjeta -->
                 ${ !valor.precioConTarjeta ? "" : `<h4>Precio con tarjeta: $${punto(valor.precioConTarjeta)} ${ !valor.medida ? "" : valor.medida } </h4>` }
                  
                 <!-- comentarioUno -->
                 ${ !valor.comentarioUno ? "" : `<h4>${valor.comentarioUno} $${punto(valor.precioComentarioUno)}</h4>` }

                 <!-- comentarioDos -->
                 ${ !valor.comentarioDos ? "" : `<h4>${valor.comentarioDos} $${punto(valor.precioComentarioDos)}</h4>` }

                  <!-- legal -->
                  ${ !valor.legal ? "" : `<p class="legal desaparece">${valor.legal}</p>`}
                
               </div>
      </div>
      `

  const traerDatos = (data) => {

// Variable de publicacion por tiempo moment.js
  const approved = data.filter(
      function publicacion(user){
      // console.log(`fecha: ${user.fechaDespublicacion}`);
      
        fechaPublicacion = moment(user.fechaPublicacion)
        fechaDespublicacion = moment(user.fechaDespublicacion)
        diferenciaPublicacion = fechaPublicacion.diff(fechaActual,'hour')
        diferenciaDespublicacion = fechaDespublicacion.diff(fechaActual,'hour')
        // console.log(fechaPublicacion);
        //console.log(diferenciaDespublicacion); 
    if (
        diferenciaPublicacion <= 0 
        && 
        diferenciaDespublicacion >= 0
       ) 
        {
          return true
        }
    else {
      // console.log('cerrado');
      return false
        }
    }
)
// Cierre variable de publicacion por tiempo moment.js


    contenido.innerHTML = '';
    contenido.innerHTML += `${approved.map(productTemplate).join("")}`
}

fetch(url)
      .then(
        fail = (res) => {
          /* get the data as a Blob */
          if (!res.ok) throw new Error("fetch failed");
          return res.arrayBuffer();
        }
          )
      .then(
        load = (ab) => {
          /* parse the data when it is received */
          let data = new Uint8Array(ab);
          let workbook = XLSX.read(data, {
            type: "array"
          });

          /* DO SOMETHING WITH workbook HERE */
          let first_sheet_name = workbook.SheetNames[0];
          /* Get worksheet */
          let worksheet = workbook.Sheets[first_sheet_name];
          excel = XLSX.utils.sheet_to_json(
            worksheet, {
              raw: true
            }
          )
          console.log(excel)
          traerDatos(excel)
        }
      )
      .catch(err => console.log(err));

</script>

<?php get_footer(); ?>

