const
     
     diferenciaDias = (fecha) => {
          const
          today = moment()
          convert = moment(fecha,'DD/MM/YYYY')
          differenceDays = today.diff(convert, 'days') // calculate difference in days
          return differenceDays;
     }

     diferenciaHoras = (hora) => {
          const
          today = moment()
          convert = moment(hora,'H')
          differenceHour= today.diff(convert, 'hour') // calculate difference in days
          return differenceHour;
     }

     fechaPublicacion ='06/02/2019'
     fechaDespublicacion = '09/02/2019'

     horaPublicacion = 10
     horaDespublicacion = 16
     console.log(diferenciaHoras(horaPublicacion))
     console.log(diferenciaHoras(horaDespublicacion))
     
     if (
          diferenciaDias(fechaPublicacion) >= 0 
          && diferenciaDias(fechaDespublicacion) <= 0
          &&  diferenciaHoras(horaPublicacion) >= 0
          && diferenciaHoras(horaDespublicacion) >= 0
          ) {
          console.log('se publica producto');
     } else {
          console.log('no se publica');
     }