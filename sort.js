const cars = [
  {
    name: "Corolla",
    batchNumber: 2,
    mfgDate: "January 19, 2019",
  },
  {
    name: "Zen",
    batchNumber: 3,
    mfgDate: "March 23, 2019",
  },
  {
    name: "Swift",
    batchNumber: 1,
    mfgDate: "July 1, 2019",
  },
];

const sortArrayObjects = (array,number='') =>
  array.sort((a, b) => a[number] - b[number]);
// const sortArrayObjects = (a, b, positionNumber) => a.positionNumber - b.positionNumber;
const order = sortArrayObjects(cars, cars.batchNumber)
// console.log(order);

const sort = (array, keyToSort = '') => {
     return array.sort((a, b) => {
       const keyA = a[keyToSort]
       const keyB = b[keyToSort]
   
       return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
     });
   };
   console.log(sort(cars,'batchNumber'));