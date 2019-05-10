// let expiration = "2020-02-11T16:00:00+0000"
// const now = moment();
// const exp = moment(expiration);

// console.log(exp.format());

// days = exp.diff(now, 'days');
// hours = exp.subtract(days, 'days').diff(now, 'hours');
// minutes = exp.subtract(hours, 'hours').diff(now, 'minutes');

// //console.log(days, hours, minutes)
// console.log(minutes)

// // const now = moment("2019-02-11T16:00:00+0000");
// // const expiration = moment("2020-02-11T17:00:00+0000");

// // // get the difference between the moments
// // const diff = expiration.diff(now);

// // //express as a duration
// // const diffDuration = moment.duration(diff);

// // // display
// // console.log("Days:", diffDuration.days());
// // console.log("Hours:", diffDuration.hours());
// // console.log("Minutes:", diffDuration.minutes());

var a = moment('2019-02-11 18:00:00.000');
var b = moment('2019-02-10 18:00:00.000');
//var b = moment().utc();
var d = a.diff(b,'hour');
console.log(d);

// if (d > 0){
//    //a is bigger than b actual moment.
// } else if (d < 0){
//    //a is smaller than b actual moment.
// }else{
//    //a =  b
// }

if (
     resultado <= 0 
     ) {
     document.write("<h1>se publica producto</h1>")
     //console.log('se publica producto');
} else if (
  resultado >= 0 
){
   document.write("<h1>no se publica producto</h1>")
}

else {
     document.write("<h1>No hace nada</h1>")
     //console.log('no se publica');
}