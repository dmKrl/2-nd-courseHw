// Task-1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
 
//  // Допишите колбэк для sort, изучите, как работает колбэк, в документации
//  console.log(people.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1;
//     } 
//     if (a.age < b.age) {
//         return -1;
//     }
//  }));
 


//  Task-2

    // function isPositive(arr) {
    //     return arr > 0;
    // }
    // function isMale(arr) {
    //     if (arr.gender === 'male') {
    //         return arr
    //     }
    // }
    // function filter(arr, ruleFunction) {
    //     const newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (ruleFunction(arr[i])) {
    //             newArr.push(arr[i])
    //         }
    //     }
    //     return newArr
    // }
    
    // console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    // const people = [
    //    {name: 'Глеб', gender: 'male'},
    //    {name: 'Анна', gender: 'female'},
    //    {name: 'Олег', gender: 'male'},
    //    {name: 'Оксана', gender: 'female'}
    // ];
    
    // console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]




// Task-3

// const myDate = new Date();

// const timer = (date) => {
//     const interval = setInterval(() => {
//         console.log(myDate)
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//     }, 30 * 1000);
// }

// timer(myDate);




// Task-4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000)
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })




// Task-5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// setTimeout(() => {
//    sayHi('Глеб'); 
// }, 2000);
// delayForSecond();


