import { eachMonthOfInterval, format } from 'date-fns';
import { es } from 'date-fns/locale';

const fecha = '2011-12-15'

const formatStandardDate = (date) => {
  let _date = '';

  if (date) {
    const formattedDate = format(new Date(date), 'dd MMM u', {
      locale: es,
    });
    console.log(formattedDate);
    const [day, month, year] = formattedDate.split(/\s+/);

    const upperMonth = `${month[0].toUpperCase()}${month.substring(1)}`;

    _date = `${day} de ${upperMonth} ${year}`;
  }

  return _date;
};

export const patternSimpleDateFormat = (date, pattern) => {
     let fecha = '';
   
     try {
       if (date) {
         const formattedDate = format(new Date(date), pattern, {
           locale: es,
         });
   
         fecha = formattedDate;
       }
     } catch (err) {
       console.error(err);
     }
   
     return fecha;
};
   console.log(patternSimpleDateFormat(fecha, 'dd MMM.yyyy'));
console.log(formatStandardDate(fecha));