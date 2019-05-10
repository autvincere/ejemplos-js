				//LIMPIAR INDICE
				lista.innerHTML = ``;

				let
				divisionPaginas = separar(approved, productosPorPagina),
				indicePaginas = divisionPaginas.length;
				console.log(divisionPaginas);
				
				for (let i = 0; i < divisionPaginas.length; i++) {
					
     				lista.innerHTML += `<button class="indice" id="${[i]}">nº ${[i+1]}</button>`
    				}
				
				const indice = document.getElementsByClassName('indice');
				
				for (i = 0; i < indice.length; i++) {
     				indice[i].addEventListener("click", getProduct,false);
     			}
				
				function getProduct() {
          			let valorId = this.getAttribute('id');
          			let numero = parseInt(valorId)
          			//console.log(numero )
          			contenido.innerHTML = ``;

					for (let valor of divisionPaginas[numero]) {
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
									<p class="f_75  p_5 ctb  alvi">
									${ valor.descripcion }
									</p>
								</center>
								<div class="bg-y  bord  flex">
									<section class="ph4  flex-auto  borde-r">
										<p class="precio-socio f1  alvi  bold">Precio<br>Socio<br><strong class="f_75">Desde</strong></p>
									</section>
									<ul class="precios-env ph8 flex-precios">
										${ valor.ofertaPrecioUno === undefined 
											? 
											"" 
											: 
											`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioUno}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ ${valor.ofertaPrecioUno} ${valor.formatoPrecio}</strong></li>`}

											${ valor.ofertaPrecioDos === undefined 
												? 
												"" 
												: 
												`<li style="padding: 4%;margin-left: 0px;"><strong class="f1 sansita">${valor.desdePrecioDos}  <span style="text-transform: capitalize;">${valor.formatoDesde}</span>  $ ${valor.ofertaPrecioDos} ${valor.formatoPrecio}</strong></li>`}
												</ul>
											</div>
											<p class="alvi f_75  p_25 center">Precio No Socio / Desde 1 <span style="text-transform: capitalize;">${valor.formatoDesde}</span>. $${ valor.precioNosocio } ${valor.formatoPrecio}</p>
											</div>
									${ valor.legal.length === undefined  
										?
										""
										:
										`<div id="legal" style="background-color: #e8e8e8;">${ valor.legal}</div>` 
									}  
								
							</div>
						</div>
						`;
						//LEVANTAR POPUP DE PRODUCTO
						popUp()
					}





