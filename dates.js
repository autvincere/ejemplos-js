 let date = new Date();
const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export const formatDate = (date='')=>{
    let formatted_date = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()
    return formatted_date;
}
console.log(formatDate("2020-04-13"));