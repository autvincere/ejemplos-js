<?php
/**
 * Template Name: Ofertas-json
 *
 * Description: A page template that provides a key component of WordPress as a CMS
 * by meeting the need for a carefully crafted introductory page. The front page template
 * in Twenty Twelve consists of a page content area for adding text, images, video --
 * anything you'd like -- followed by front-page-only widgets in one or two columns.
 *
 * @package WordPress
 * @subpackage Alvi
 * @since Alvi 1.2
 */

get_header();
?>

<?php
	//OBTENER json de custom postype

		$args = array(
			'post_type' => 'json',
			'posts_per_page'  => 1,

			'tax_query' => array(
				array(
					'taxonomy' => 'categorias',
					'field' => 'slug',
					'terms' => 'json_produccion'
					)
			 ) 
		 );	
	
	$category_posts = new WP_Query($args);

	if($category_posts->have_posts()) : 
     	while($category_posts->have_posts()) : 
			$category_posts->the_post();
			$json = get_field('json'); 
     	?>
			<script>  
			 const		
			  url = 'https://raw.githubusercontent.com/smuDesarrollo/repo-json/master/ofertas_alvi_14_20_sitio';

              //json antiguo
			 // url = 'https://raw.githubusercontent.com/smuDesarrollo/repo-json/master/ALVI_OS_24_30.json';

			//json emergencia
			// url = 'https://api.myjson.com/bins/16p02s';

			
				console.log(url);
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

	 <!-- Banner -->
	 <section class="container">
		<div class="item  ph12 i-b  v-middle  center">	
			<article class="container ph12   p1 md-p_5  sm12  ">
				<div class="bkg-cuponazo height-banner jc-center flex flex-wrap  md-flex-wrap ai-center">
					<div class="md4">
						<img src="http://www.alvi.cl/wp-content/uploads/2019/05/CUPONAZO_ALVI_FINAL.jpg" alt="cuponazo"/>
					</div>
					<div class="md5">
					<img src="http://www.alvi.cl/wp-content/uploads/2019/05/banner-cuponazo_02-3.png" alt="cuponazo"/>
					</div>
						
					<div class="md3">
						<a class="mayuscula btn-cuponazo adjust-btn-head" href="https://www.clubalvi.cl/" target="_blank">obtén tus cupones aquí</a>
					</div>
				</div>
			</article>
		</div>
	</section>
       <!-- Cierre Banner --> 

	  <div class="container  p_5  flex p-r">     
				<form class="ph12  p_5  mauto">
					<div id="buscador-component" class="buscador">
					</div>
				</form>
	 		</div>
 <div class="cont-ofertas">
<article id="app"></article>
<script>
	var app = document.getElementById('app');
	var content = document.createElement("div");
	content.setAttribute("id", "contenido");
	app.appendChild(content);

	var lista = document.createElement("div");
     lista.setAttribute("id", "lista");
     app.appendChild(lista);

	let 
	contenido = document.getElementById('contenido'),
	productosPorPagina = 6;	
	
	// AGREGAR PUNTO *********************************************	
	Number.prototype.format = function(){
   		return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	};
	// cierre AGREGAR PUNTO ***************************************

	// TRAER TIEMPO moment.js *********************************************	
	const
		fechaActual = moment().utc();
	// cierre TRAER TIEMPO moment.js ***************************************	

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

    //FUNCION PARA LEVANTAR POPUP() ***********************************************
    //*****************************************************************************

		function popUp(){
						const 
						cerrar = document.getElementsByClassName("cerrar");
						
						for(var i=0; i < cerrar.length; i++){
							cerrar[i].addEventListener('click',levantarPopup,false);
						}
						function levantarPopup() {
							$(this).toggleClass('d-rotate');
							$(this).parent().parent().parent().toggleClass("levantar");
							$(this).parent().parent().toggleClass("cont-popup");
							$(this).parent().siblings('#legal').toggleClass("d-block");
						}
					}
	//CIERRE FUNCION PARA LEVANTAR POPUP() ***************************************
    //*****************************************************************************


</script>

<div id="primary" class="site-content">
	<div id="content" role="main" style="text-align: center;">
			
<aside class="aside ph12">
	<a href="<?php echo get_site_url(); ?>/ofertas/">
		<h3 class="sansita p1 lg-f2  bg-ofertas  ctb">ofertas</h3>
	</a>
		<?php
				if( is_page('ofertas') ) {	
		?>	
		
		
		<?php	
				}else{
		?>	
				<script>
				//console.log('no estas en ofertas')	
				</script>	
		<?php
				}
		?>	
  


 <!-- <div class="toggle">
    		<a href="<?php echo get_site_url(); ?>/cuponazo/">
              <h3 class="p1 tog" data-category="cuponazo">Cuponazo <br>Comerciante

              <?php
				if( is_page('cuponazo')) {
			?>				
					<img id="mas" class="" style="max-width: 25px;transform: rotate(135deg);vertical-align: bottom;" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="cuponazo" class="despegable">

			<?php	
				}else{
			?>	
						 <img id="close" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
						</h3>
						</a>	
						<ul id="cuponazo" class="despegable d-none">
			<?php
					}
			?>	
		
		
		</ul>
    </div> 
					
   <hr class="line-hr"> -->

   <div class="toggle">
    		<a href="<?php echo get_site_url(); ?>/semanales/">
			<h3 class="p1 tog" data-category="semanales">Semanales

			<?php
				if( is_page('semanales')) {
			?>				
					<img id="mas" class="" style="max-width: 25px;transform: rotate(135deg);vertical-align: bottom;" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="semanales" class="despegable">

			<?php	
				}else{
			?>	
						 <img id="close" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
						</h3>
						</a>	
						<ul id="semanales" class="despegable d-none">
			<?php
					}
			?>	
		
				<li class="father" data-subcategory="almuerzo">
				almuerzo
				</li>
				<li class="father" data-subcategory="bebes">
				Bebés
				</li>	
				<li class="father" data-subcategory="celebracion">
				Celebración
				</li>
				<li class="father" data-subcategory="colaciones">
				colaciones
				</li>
				<li class="father" data-subcategory="cuidado-personal">
				cuidado personal
				</li> 	
				<li class="father" data-subcategory="limpieza">
				limpieza
				</li>
				<li class="father" data-subcategory="once-comida">
				once/comida
				</li>
					<li class="father" data-subcategory="mascotas">
				Mascotas
				</li>		
		</ul>
    </div> 

    <!-- <hr class="line-hr"> -->

   <div class="toggle">
    		<a href="<?php echo get_site_url(); ?>/copa-del-socio/">
			<h3 class="p1 tog" data-category="copa-del-socio">Copa del Socio

			<?php
				if( is_page('copa-del-socio')) {
			?>				
					<img id="mas" class="" style="max-width: 25px;transform: rotate(135deg);vertical-align: bottom;" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="copa-del-socio" class="despegable">

			<?php	
				}else{
			?>	
						 <img id="close" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
						</h3>
						</a>	
						<ul id="copa-del-socio" class="despegable d-none">
			<?php
					}
			?>	
		
				<!-- <li class="father" data-subcategory="almuerzo">
				almuerzo
				</li> -->
				<!-- <li class="father" data-subcategory="bebes">
				Bebés
				</li> -->	
				<li class="father" data-subcategory="celebracion">
				Celebración
				</li>
				<!-- <li class="father" data-subcategory="colaciones">
				colaciones
				</li> -->
				<!-- <li class="father" data-subcategory="cuidado-personal">
				cuidado personal
				</li> -->	
				<!-- <li class="father" data-subcategory="limpieza">
				limpieza
				</li> -->
				<!-- <li class="father" data-subcategory="once-comida">
				once/comida
				</li> -->	
		</ul>
    </div> 
					
  <!-- <hr class="line-hr">

 	 <div class="toggle">
		<a href="<?php echo get_site_url(); ?>/dias-del-socio/">
			<h3  class="p1 tog" data-category="dias-del-socio">Días del Socio

			<?php
				if( is_page('dias-del-socio') ) {	
			?>	
					<img id="mas" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="dias-del-socio" class="despegable">
			<?php	
				}else{
			?>	
					<img id="close" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="dias-del-socio" class="despegable d-none">
			<?php
					}
			?>	
	
					<li data-subcategory="almuerzo" class="father">
					almuerzo
					</li>

					<li data-subcategory="mascotas" class="father">
					mascotas
					</li>

					<li data-subcategory="bebes" class="father">
					Bebés
					</li>

					<li data-subcategory="celebracion" class="father">
					Celebración
					</li>

					<li data-subcategory="colaciones" class="father">
					colaciones
					</li>

				<li data-subcategory="cuidado-personal" class="father">
					cuidado personal
					</li>

					<li data-subcategory="limpieza" class="father">
					limpieza
					</li>

					<li data-subcategory="once-comida" class="father">
					once/comida
					</li>		
		</ul>
	</div> -->
	
	  <!--<hr class="line-hr">  

	<div class="toggle">
		<a href="<?php echo get_site_url(); ?>/botilleros/">
			<h3  class="p1 tog" data-category="botilleros">Botilleros

		<?php
				if( is_page('botilleros') ) {	
		?>	
					<img id="mas" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="botilleros" class="despegable">
				<?php	
				}else{
			?>	
					<img id="close" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="botilleros" class="despegable d-none">
			<?php
					}
			?>	
					<li data-subcategory="almuerzo" class="father">
					almuerzo
					</li>

					<li data-subcategory="bebes" class="father">
					Bebés
					</li>

					<li data-subcategory="celebracion" class="father">
					Celebración
					</li>

					<li data-subcategory="colaciones" class="father">
					colaciones
					</li>

					<li data-subcategory="cuidado-personal" class="father">
					cuidado personal
					</li>

					<li data-subcategory="limpieza" class="father">
					limpieza
					</li>

					<li data-subcategory="once-comida" class="father">
					once/comida
					</li>		
		</ul>
	</div>
	
	<hr class="line-hr"> -->

	<!--<div class="toggle">
		<a href="<?php echo get_site_url(); ?>/horeca/">
			<h3  class="p1 tog" data-category="horeca">Horeca
		
		<?php
				if( is_page('horeca') ) {	
		?>	
					<img id="mas" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="horeca" class="despegable">
				<?php	
				}else{
			?>	
					<img id="close" class="" src="https://www.alvi.cl/wp-content/uploads/2019/03/mas_btn.png" alt="<?php bloginfo('name'); ?>"/>
					</h3>
					</a>	
					<ul id="horeca" class="despegable d-none">
			<?php
					}
				
			?>
			
					<li data-subcategory="almuerzo" class="father">
					almuerzo
					</li>

					<li data-subcategory="bebes" class="father">
					Bebés
					</li>

					<li data-subcategory="celebracion" class="father">
					Celebración
					</li>

					<li data-subcategory="colaciones" class="father">
					colaciones
					</li>

					<li data-subcategory="cuidado-personal" class="father">
					cuidado personal
					</li>

					<li data-subcategory="limpieza" class="father">
					limpieza
					</li>

					<li data-subcategory="once-comida" class="father">
					once/comida
					</li>		
		</ul>
	</div>
	
	<hr class="line-hr"> -->
</aside>

<script>
	
//CAPTURAR URL Y SEGMENTARLA
	const 
		URLactual = window.location.href,
		newArr = URLactual.slice(0, -1),
		separados = newArr.split("/"),
		ultimoItem = separados.pop ()
		;
          console.log(ultimoItem);  
         
	fetch(url)
			.then(res => res.json())
			.then(datos =>
			// console.log(datos)
			  traerDatos(datos,ultimoItem)
			);

//FUNCION CARGA DE CONTENIDO SEGUN URL DE CADA CATEGORIA(PADRE) **************************************************************
//****************************************************************************************************************************

	function traerDatos(datos,categoria) {
		//console.log(datos);
		let 
			approved = datos.filter(function(user){
			const
				fechaPublicacion = moment(user.fechaPublicacion)
     			fechaDespublicacion = moment(user.fechaDespublicacion)
				diferenciaPublicacion = fechaPublicacion.diff(fechaActual,'hour')
    				diferenciaDespublicacion = fechaDespublicacion.diff(fechaActual,'hour')

			if (
				user.categoria == categoria
				&&
				user.timer == "si"
				&&
				diferenciaPublicacion <= 0 
				&& 
				diferenciaDespublicacion >= 0
               ) 
			{
               	return true
			}
			else {
				return false
               	console.log('cerrado');
          		}
			});
			console.log(approved);

			let 
				aprobado = datos.filter(function(user){
				const
					fechaPublicacion = moment(user.fechaPublicacion)
					fechaDespublicacion = moment(user.fechaDespublicacion)
					diferenciaPublicacion = fechaPublicacion.diff(fechaActual,'hour')
					diferenciaDespublicacion = fechaDespublicacion.diff(fechaActual,'hour')

				if (
					user.timer == "si"
					&&
					diferenciaPublicacion <= 0 
					&& 
					diferenciaDespublicacion >= 0	
				) 
				{
					return true
				} 
				else {
					return false
					console.log('cerrado');
				}
			})
			console.log(aprobado);

			//LIMPIAR INDICE
			lista.innerHTML = ``;

					
	if (ultimoItem == "ofertas") {
		 console.log('estas en: ' + ultimoItem)
		 
		 let
			divisionPaginas = separar (aprobado, productosPorPagina);
			for (let i = 0; i < divisionPaginas.length; i++) {
				lista.innerHTML += `<button class="indice" id="${[i]}">${[i+1]}</button>`
			}
			let indice = document.getElementsByClassName('indice');

		 for (i = 0; i < indice.length; i++) {
			indice[i].addEventListener("click", getProduct,false);
			}

			function getProduct() {
          			let valorId = this.getAttribute('id');
          			let numero = parseInt(valorId)
          			//console.log(numero )
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[numero]) {

					contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">${!valor.porcentajeDescuento ? `Desde` : ""}</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dscto.</strong></li>`
									}

									</ul>
								</div>
								
								${ !valor.precioNosocio || valor.precioNosocio == null
											? 
											"" 
											: 
											`
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") } ${valor.formatoPrecio}
								</p>
											`
								}

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
					//LEVANTAR POPUP DE PRODUCTO
					popUp()					
					}	
				}

			function iniciarApp() {
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[0]) {
						contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">${!valor.porcentajeDescuento ? `Desde` : ""}</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dscto.</strong></li>`
									}

									</ul>
								</div>
								
								${ !valor.precioNosocio || valor.precioNosocio == null
											? 
											"" 
											: 
											`
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") } ${valor.formatoPrecio}
								</p>
											`
								}

								

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
						//LEVANTAR POPUP DE PRODUCTO
						popUp()
					}
				}
			iniciarApp();		
	}
     else if (ultimoItem == "cuponazo"){
		console.log('estas en: '+ ultimoItem);

		let
			divisionPaginas = separar (approved, productosPorPagina);
			if (divisionPaginas.length > 1 ) {	
				for (let i = 0; i < divisionPaginas.length; i++) {
					lista.innerHTML += `<button class="indice" id="${[i]}">${[i+1]}</button>`
				}
			}
			let indice = document.getElementsByClassName('indice');

		for (i = 0; i < indice.length; i++) {
			indice[i].addEventListener("click", getProduct,false);
			}

			function getProduct() {
          			let valorId = this.getAttribute('id');
          			let numero = parseInt(valorId)
          			//console.log(numero )
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[numero]) {

					contenido.innerHTML += `	
					<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>

								<div class="bg-y  bord  flex">
									
									<ul class="precios-env flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;width: 100%; margin: 0 auto; margin-left: 9px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dcto.  Adicional</strong></li>`
									}

									</ul>
								</div>
							

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
					//LEVANTAR POPUP DE PRODUCTO
					popUp()					
					}	
				}
				function iniciarApp() {
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[0]) {
						contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}

								</center>

								<div class="bg-y  bord  flex">
									
									<ul class="precios-env flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;width: 100%; margin: 0 auto; margin-left: 9px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dcto.  Adicional</strong></li>`
									}

									</ul>
								</div>
							

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
						//LEVANTAR POPUP DE PRODUCTO
						popUp()
					}
				}
			iniciarApp();
	}	
	else if (ultimoItem == ultimoItem){		
		let
			divisionPaginas = separar (approved, productosPorPagina);
			console.log(divisionPaginas);
			

		if (divisionPaginas.length > 1 ) {	
			for (let i = 0; i < divisionPaginas.length; i++) {
				lista.innerHTML += `<button class="indice" id="${[i]}">${[i+1]}</button>`
			}
		}
		let indice = document.getElementsByClassName('indice');

		for (i = 0; i < indice.length; i++) {
			indice[i].addEventListener("click", getProduct,false);
			}

			function getProduct() {
          			let valorId = this.getAttribute('id');
          			let numero = parseInt(valorId)
          			//console.log(numero )
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[numero]) {					
					
						contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">${!valor.porcentajeDescuento ? `Desde` : ""}</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dscto.</strong></li>`
									}

									</ul>
								</div>
								
								${ !valor.precioNosocio || valor.precioNosocio == null
											? 
											"" 
											: 
											`
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") } ${valor.formatoPrecio}
								</p>
											`
								}

								

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
					//LEVANTAR POPUP DE PRODUCTO
					popUp()					
					}	
				}
			function iniciarApp() {
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[0]) {
						//contenido.innerHTML = '';
						contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">${!valor.porcentajeDescuento ? `Desde` : ""}</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dscto.</strong></li>`
									}

									</ul>
								</div>
								
								${ !valor.precioNosocio || valor.precioNosocio == null
											? 
											"" 
											: 
											`
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") } ${valor.formatoPrecio}
								</p>
											`
								}

								

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
						//LEVANTAR POPUP DE PRODUCTO
						popUp()
					}
				}
			iniciarApp();	
		
	 }
	 else{
		 console.log('has nada');	 
	 }
	
	//CIERRE FUNCION CARGA DE CONTENIDO SEGUN URL DE CADA CATEGORIA(PADRE) **************************************************************
	//****************************************************************************************************************************
// LLAMAR A SUBCATEGORIA CON BOTONERA ASIDE **********************************************
//************************************************************************************************
let btn = document.getElementsByClassName('father');

for(var i=0; i<btn.length; i++){
	btn[i].addEventListener('click',capturarBtn,false);
}

function capturarBtn(e) {	
//console.log(event.target);
//console.log(event.currentTarget);
let elementoClikeado = e.target;
let padreCapturado = elementoClikeado.parentNode.getAttribute('id');
let hijoCapturado = elementoClikeado.getAttribute('data-subcategory')
console.log(padreCapturado + ' + ' + hijoCapturado);
//console.log(event.target.dataset.category);
//console.dir(event.target.parentElement.children.nodeName);
e.stopPropagation();

fetch(url)
	 .then(res => res.json())
	.then(datos =>
		//console.log(datos)
		traerProducto(datos,padreCapturado)
	);
		
	function traerProducto(datos,categoria) {
			const contenido = document.querySelector('#contenido');

			let approved = datos.filter(function(user){
				
				const
				fechaPublicacion = moment(user.fechaPublicacion)
				fechaDespublicacion = moment(user.fechaDespublicacion)
				diferenciaPublicacion = fechaPublicacion.diff(fechaActual,'hour')
				diferenciaDespublicacion = fechaDespublicacion.diff(fechaActual,'hour')

				if (
					user.categoria == padreCapturado
					&&
					user.subcategoria == hijoCapturado
					&&
					user.timer == "si"
					&&
					diferenciaPublicacion <= 0 
					&& 
					diferenciaDespublicacion >= 0
				) 
				{
					console.log('diferencia con fecha de publicacion actual: ' + diferenciaPublicacion);
					console.log('diferencia con fecha de despublicacion: '+ diferenciaDespublicacion);
					return true
				} 
				else {
				return false
				console.log('cerrado');
				}
			})

			console.log(approved,approved.length);

			let
			divisionPaginas = separar (approved, productosPorPagina);
			console.log('la cantidad de paginas es de: '+ divisionPaginas.length);	
				/*Limpiar listado*/
				lista.innerHTML = ``;
		if (divisionPaginas.length > 1 ) {	
			for (let i = 0; i < divisionPaginas.length; i++) {
			
				lista.innerHTML += `<button class="indice" id="${[i]}">${[i+1]}</button>`
			}
		}
		let indice = document.getElementsByClassName('indice');

		for (i = 0; i < indice.length; i++) {
			indice[i].addEventListener("click", getProduct,false);
			}
			function getProduct() {
          			let valorId = this.getAttribute('id');
          			let numero = parseInt(valorId)
          			//console.log(numero )
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[numero]) {					
						contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">${!valor.porcentajeDescuento ? `Desde` : ""}</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dscto.</strong></li>`
									}

									</ul>
								</div>
								
								${ !valor.precioNosocio || valor.precioNosocio == null
											? 
											"" 
											: 
											`
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") } ${valor.formatoPrecio}
								</p>
											`
								}

								

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
					//LEVANTAR POPUP DE PRODUCTO
					popUp()					
					}	
				}
				function iniciarApp() {
				// let
				// divisionPaginas = separar(approved, productosPorPagina)

          			//console.log(numero )
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[0]) {
						//contenido.innerHTML = '';
						contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">${!valor.porcentajeDescuento ? `Desde` : ""}</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dscto.</strong></li>`
									}

									</ul>
								</div>
								
								${ !valor.precioNosocio || valor.precioNosocio == null
											? 
											"" 
											: 
											`
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") } ${valor.formatoPrecio}
								</p>
											`
								}

								

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
						//LEVANTAR POPUP DE PRODUCTO
						popUp()
					}
				}
			iniciarApp();
			
			if (approved.length == 0) {
				//console.log('categoria sin contenido');
				//LIMPIAR INDICE
				lista.innerHTML = ``;
				contenido.innerHTML = `<h2 style="text-align: center;margin-top: 44px; color: #00319f82;">Categoría sin contenido</h2>`;
			} 
	}
}
	
// CIERRE LLAMAR A SUBCATEGORIA Y CATEGORIA BOTONERA ASIDE **********************************************
//************************************************************************************************				



//BUSCADOR ***************************************************************************************
//************************************************************************************************
	const 
	buscadorComponent = document.querySelector('#buscador-component');
	buscadorComponent.innerHTML = `<input type="search" name="buscador" id="campoBuscar" class="form-control  ph12 search-json" placeholder="Buscar Productos.."><button type="submit" class="lupa"><i class="fa fa-search"></i></button>`
	campoBuscar = document.querySelector('#campoBuscar')
	campoBuscar.addEventListener("keyup",buscador,false)
	// const btnBuscar = document.querySelector('#btnBuscar');

	function buscador() {
		fetch(url)
		.then(res => res.json())
		.then(datos =>
			//console.log(datos)
			filtrar(datos,"si")
		);  
	}

	function filtrar (datos,positivo){
		//console.log(campoBuscar.value);
		const contenido = document.querySelector('#contenido');
		contenido.innerHTML = '';
		const texto = campoBuscar.value.toLowerCase();

		let approved = datos.filter(function(user){
			
			const
					fechaPublicacion = moment(user.fechaPublicacion)
					fechaDespublicacion = moment(user.fechaDespublicacion)
					diferenciaPublicacion = fechaPublicacion.diff(fechaActual,'hour')
					diferenciaDespublicacion = fechaDespublicacion.diff(fechaActual,'hour')

			if (
					user.timer == "si"
					&&
					user.buscador == positivo
					&&
					diferenciaPublicacion <= 0 
					&& 
					diferenciaDespublicacion >= 0
				) 
				{
					return true
				} 
				else {
					return false
					console.log('cerrado');
				}
			})

		for (let valor of approved) {
			let nombre = valor.producto.toLowerCase();

			if (nombre.indexOf(texto) !== -1) {
				
				//LIMPIAR INDICE
				lista.innerHTML = ``;

				//contenido.innerHTML = '';
				contenido.innerHTML += `	
						<div class="popup d-inline item  ph12  sm5 lg4 m-auto borde">
							<div class="bg-w top-unidades shadow-card hover-shadow borde text-center">
							<div class="cont-cerrar">
								<img class="cerrar d-rotate-45 cursor" src="../wp-content/uploads/2019/02/close-button.svg"/>
							</div>
							<img src="
							${ valor.img ? '../wp-content/uploads/img-ofertas/' + valor.img : ""}
							"/>
							<div class="box  b-color  p_75">
								<center>
									<strong class="ctb  p_75  alvi">
									${ valor.producto }</strong>
									
									${ !valor.descripcion || valor.descripcion == null
											? 
											"" 
											: 
											`<p class="descripcion f_75  p_5 ctb  alvi">
											${valor.descripcion}. 
											</p>`
									}


								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">${!valor.porcentajeDescuento ? `Desde` : ""}</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">

									${ valor.ofertaPrecioUno <= 1
											? 
											""
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno} <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ 
											${valor.ofertaPrecioUno.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}
											</strong></li>` 
									}

									${ valor.ofertaPrecioDos <= 1
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span> $ ${valor.ofertaPrecioDos.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} ${valor.formatoPrecio}</strong></li>`
									}
										
									${ !valor.porcentajeDescuento || valor.porcentajeDescuento == null
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita font-dscto">${valor.porcentajeDescuento} % Dscto.</strong></li>`
									}

									</ul>
								</div>
								
								${ !valor.precioNosocio || valor.precioNosocio == null
											? 
											"" 
											: 
											`
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") } ${valor.formatoPrecio}
								</p>
											`
								}

								

								</div>
									${ valor.legal.length >= 5
										?
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
										:
										`<div id="legal"></div>` 
									}  
								</div>
							</div>
							`;
						//LEVANTAR POPUP DE PRODUCTO
						popUp()
			}   
		}

		if (contenido.innerHTML === '') {

			//LIMPIAR INDICE
			lista.innerHTML = ``;

			contenido.innerHTML = '';
			contenido.innerHTML += `
			<h2 style="text-align: center; margin-top: 44px; color: #00319f82;"> Producto no encontrado...</h2>
			`
		}
		if (campoBuscar.value.length === 0) {
			//LIMPIAR INDICE
			lista.innerHTML = ``;
			
			// contenido.innerHTML = ``;
			contenido.innerHTML = ''
			
			if( ultimoItem == "ofertas"){
				traerDatos(datos,ultimoItem)
			}
			else{
				traerDatos(datos,ultimoItem)
			}
		}
	}
};

//CIERRE BUSCADOR
</script>
</div>	
<?php get_footer(); ?>
