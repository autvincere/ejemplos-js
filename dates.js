let date = new Date();
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const formatDate = (date = "") => {
  let formatted_date =
    date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
  return formatted_date;
};
// console.log(formatDate("2020-04-13"));

const today = new Date();
const year = today.getFullYear();
year - 6;

const arrYear = [year];

const filledArray = [...new Array(6)].map((item, i) => year - i);

console.log(filledArray);

const two = arrYear.fill().map((_, i) => {
  if (year === year - 6) {
    return (i = year);
  } else {
    return (i = year - 1);
  }
});
//console.log(two);

var a = [1, 2, 3, 4, 5];
a.forEach((val, index, array) => {
  if (val == 5) {
    array.push(6);
  }
});
console.log(a);

const lastYears = (currentYear, substractYear) => {
  const yearsArr = [];
  for (let index = 0; index < substractYear; index++) {
    const year = currentYear - index;
    yearsArr.push(year);
  }
  return yearsArr;
};

console.log(lastYears(year, 6)); 
