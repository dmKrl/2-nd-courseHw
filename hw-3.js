// // Задание на цикл While

// while (true) {
//     const messageUser = prompt('Введите сообщение');
//     if (messageUser === 'continue') {
//         continue;
//     }
//     if (messageUser === 'break') {
//         break;
//     }
//     console.log(messageUser);
// }




// Task-1
// for (let i = 0; i < 2; i++) {
//         console.log('Привет');
// }


// // Task-2
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// Task-3
// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// }


// Task-4
// const obj = {
//     Коля: '200',
//     Вася: '300',
//     Петя: '400'
// }

// for (const key in obj) {
//     if (obj[key]) {
//         console.log(`${key} - зарплата ${obj[key]} долларов`)
//     }
// }


// Task-5

// let n = 1000;
// let num = 0;

// do {
//     n = n / 2;
//     num++;
// } while (n > 50);

// console.log(n);
// console.log(num);


// Task-6

// let friday = 1;

// while (friday < 31) {
//     console.log(`Сегодня пятница ${friday}-е число. Необходимо подготовить отчёт`);
//     friday += 7;
//     if (friday > 31) {
//         break;
//     }
// }