// Operadores
// devuelven un valor de comparacion
// referencia https://www.youtube.com/watch?v=anoXxubzh6w

// ||=
// Si el valor  es(undefined, null, 0, '', NaN o false), devuelve un valor (es mas estricto).

// ??=
// Si el valor es : null o undefined, devuelve un valor.

// const handleUrl = (history = null, url = null) => {
//   const history = history || "DESCONOCIDO";
//   const url = url || "DESCONOCIDO";
//   //return checkHistory && checkUrl ? { history, url } : false;
//   return { history, url };
// };

// const history = "";
// const url = "1";
// handleUrl(history, url)
// console.log(handleUrl(history, url));

// class Persona {
//      constructor(datos) {
//        this.nombre = datos.nombre;
//        this.segundoNombre = datos.segundoNombre ?? 'DESCONOCIDO';
//        this.apellido = datos.apellido;
//        this.edad = datos.edad;
//        this.hijos = datos.hijos ??'DESCONOCIDO';
//        this.licencia = datos.identificaciones?.licencia ??'DESCONOCIDO';
//      }

//      print() {
//        console.log(
//          `Nombre: ${this.nombre}`,
//          `Segundo Nombre: ${this.segundoNombre}`,
//          `Apellido: ${this.apellido}`,
//          `Edad: ${this.edad}`,
//          `Numero de Hijos: ${this.hijos}`,
//          `Numero de Licencia: ${this.licencia}`
//        );
//      }
//    }

//    var persona = new Persona({
//      nombre: 'Jose',
//      segundoNombre: null,
//      apellido: 'Gomez',
//      edad: 18,
//      hijos: null,
//    //   identificaciones: {
//    //     //licencia: 1324143,
//    //     id: 12131231
//    //   }
//    });

//    persona.print();

// const cash = ''

// const getCash = cash || 0

// console.log(getCash);

const getUserdefinedSettings = () => {
     return {
          difficylty: 'easy',
          startingCash: 0
     }
}

const cash = getUserdefinedSettings().startingCash || 500
console.log(cash);