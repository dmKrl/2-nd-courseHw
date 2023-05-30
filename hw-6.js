// Task-1 
// let someStr = 'Some text';
// console.log(someStr.toUpperCase());


// Task-2

// function arrAndStr(arr, str) {
//     let newArr = [];
//     arr.forEach((el) => {
//         if (el.toLowerCase().startsWith(str.toLowerCase())) {
//             newArr.push(el);
//         }
//     })
//     console.log(newArr);
// }
// arrAndStr(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');


// Task-3 

// function someNum(num) {
//     console.log(Math.floor(num)); //до меньшего
//     console.log(Math.ceil(num)); // до большего
//     console.log(Math.round(num)); //до ближайшего
// }
// someNum(32.58884);


// // Task-4 
// function arrMinMax() {
//     console.log(Math.max(52, 53, 49, 77, 21, 32));
//     console.log(Math.min(52, 53, 49, 77, 21, 32));
// }
// arrMinMax();



// Task-5

// function randomNum(minValue, maxValue) {
//     console.log(Math.round(Math.random() * (maxValue - minValue) + minValue));    
// }
// randomNum(1, 10);



// Task-6

// function getRandomArrNumbers(num) {
//     return (Array.from({length: num / 2}, () => Math.round(Math.random() * num)));
// }
// console.log(getRandomArrNumbers(10))



// Task-7 

// function randomRoundNumber(firstValue, secondValue) {
//     return Math.round(Math.random() * (secondValue - firstValue) + firstValue);
// }
// console.log(randomRoundNumber(4, 12));



// Task-8 
// let myDate = new Date();

// console.log(myDate);



// Task-9
// const currentDate = new Date();
// const finalDate = new Date(currentDate);

// finalDate.setDate(currentDate.getDate() + 73);
// console.log(finalDate);


// // Task-10 

// const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

// function dateFn(date) {
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds(); 
    
//     if (hour < 10) {
//       hour = "0" + hour;
//     }
//     if (minute < 10) {
//       minute = "0" + minute;
//     }
//     if (second < 10) {
//       second = "0" + second;
//     };

//     console.log(`Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года - это ${week[date.getDay()]} 
//     Время: ${hour}:${minute}:${second}`)
// }
// dateFn(new Date());


// Task-11 

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function game2() {
    const newFruits = fruits.sort(() => Math.random() - 0.5);
    alert(newFruits);

    const firstFruit = prompt('Чему равнялся первый элемент массива?');
    const secondFruit = prompt('Чему равнялся второй элемент массива?');

    if (newFruits[0].toLowerCase() === firstFruit.toLowerCase() && newFruits[6].toLowerCase() === secondFruit.toLowerCase()) {
        alert('Ты угадал все фрукты! Поздравляем!')
    } else if(newFruits[0].toLowerCase() === firstFruit.toLowerCase() || newFruits[6].toLowerCase() === secondFruit.toLowerCase()) {
        alert('Ты был близок к победе!')
    } else {
        alert('Ты не угадал ни одного слова')
    }

}


