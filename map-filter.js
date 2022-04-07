

const number = [12, 35, 55, 35, 76, 5]

// const output = [];
// for (let i = 0; i < number.length ; i++){

//     const element = number[i];
//     const result = element*element;
//     output.push(result);
// }

// const result = number.map( function(element){
//     // console.log(element, index, array);
//       return  element * element;
// //    console.log(result);
// })


// const result = number.map(element => element*element);
  const result = number.map(x => x * x);
  console.log(result);


//filter

//const number = [2, 3, 4, 5, 6,63, 73];

const bigger = number.filter(x => x > 5);
console.log(bigger);

//finder

//const number = [34, 64, 75, 85, 97];
const finde = number.find(x => x > 34);
console.log(finde);
