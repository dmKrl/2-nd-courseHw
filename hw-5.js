// Task-1
// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 10) {
//         break;
//     }
//     console.log(arr[i]);    
// }


// Task-2

// const arr = [1, 5, 4, 10, 0, 3];

// const positionNum = () => {
//     console.log(arr.indexOf(4));
// }


// Task-3

// const arr = [1, 3, 5, 10, 20];

// const arrJoin = () => {
//     console.log(arr.join(' '));
// };


// Task-4
// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(1);
//   }
// }
// console.log(arr)


// Task-5

// const pushArr = (arr) => {
//     arr.push(2, 2, 2);
//     return console.log(arr);
// }
// pushArr([1, 1, 1])


// Task-6

// function arrSort(arr) {
//     arr.sort().pop();
//     console.log(arr);
// }
// arrSort([9, 8, 7, 'a', 6, 5]);



// Task-7
// const num = Number(prompt('Введите число'));

// function checkNum(arr) {
//   return (arr.find(el => el === num)) 
//         ? console.log('Данное число содержится в массиве') 
//         : console.log('Данного числа нет в массиве');
// }
// checkNum([9, 8, 7, 6, 5]);


// Task-8

// function rev(str) {
//     console.log(str.split('').reverse().join(''));
// }
// rev('abcdef');



// Task-9

// function arrMach(arr) {
//   return console.log(arr.join().split(',').map(Number));
// }
// arrMach([[1, 2, 3,],[4, 5, 6]])


// Task-10

// const arr = (Array.from({length: 10}, () => Math.round(Math.random() * 10)));

// function arrSum() {
//  for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
//  }
// }



// Task-11

// function squareArr(arr) {
//     return console.log(arr.map(el => Math.pow(el, 2)));
// }
// squareArr([1, 2, 3, 4, 5])


// Task-12

// function lengthSrt(arr) {
//     return arr.map(el => {
//         console.log(el.length);
//     });
// }
// lengthSrt(['слово', '', 'слог', 'длинное предложение', 'буква'])



// Task-13
// function filterPositive(array) {
//     return console.log(array.filter(el => el < 0))
//   }
  
//   filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
//   filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]


// Task-14
// const arr = (Array.from({length: 10}, () => Math.round(Math.random() * 10)));

// function arrEven() {
//   const newArr = arr.filter(el => el % 2 === 0);
//   return console.log(arr, newArr);
// }



// Task-15
// const arr = (Array.from({length: 6}, () => Math.round(Math.random() * 10)));

// function arrMean() {
//     return console.log(arr.reduce((sum, acc) => sum + acc, 0) / arr.length);
// }