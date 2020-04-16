// creo un array asociativo (array sin numeros),
let 
     imagenes = []
     imagenes['Cauchin'] = 'assets/vaca.png'
     imagenes['Pokacho'] = 'assets/pollo.png'
     imagenes['Tocinauro'] = 'assets/cerdo.png'

     // que es lo mismo que un objeto literal (clave:valor)
     // imagen = {'Cauchin':'vaca.png','Pokacho':'pollo.png','Tocinauro':'cerdo.png'}
     // console.log(typeof(imagen));

     collection = []

class Pakiman{
     constructor(n,v,a)
     {
          this.imagen = new Image();
          this.nombre = n;
          this.imagen.src = imagenes[this.nombre]
          this.vida = v;
          this.ataque = a;
     }
     hablar(){
          alert(this.nombre)
     }
     mostrar()
     {                                        
          let 
               content = document.createElement("figure")
               document.body.appendChild(content)
          let ficha = 
                    `
                    <img src="${this.imagen.src}" alt="${this.nombre}"/>
                    <figcaption>
                         <h2>${this.nombre}</h2>
                         <p>Vida: ${this.vida}</p>
                         <p>Ataque: ${this.ataque}</p>
                    </figcaption>
                    `
          return content.innerHTML += ficha
     }
//     agregar(){
         
//                collection.push(this)
//                console.log(collection)
//      }
    
}
const
     cauchin = new Pakiman("Cauchin", 100, 30)
     pokacho = new Pakiman("Pokacho", 180, 50)
     tocinauro = new Pakiman("Tocinauro", 120, 40)

collection.push(cauchin,pokacho,tocinauro)
collection.map( collect => collect.mostrar() )

// for(let pakin of collection){
//      pakin.mostrar()
//      console.log(pakin);
     
// }

     
     
     console.log(`
     ${cauchin} 
     ${pokacho} 
     ${tocinauro}`);

     console.log(cauchin,pokacho,tocinauro);
     