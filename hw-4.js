// // Task-1

// function minNum(a, b) {
//     return Math.min(a, b);
// }


// // Task-2

// function evenOdd(num) {
//     return num % 2 === 0 ? console.log(`Число ${num} чётное`) : console.log(`Число ${num} нечётное`)
// }


// Task-3

// function square(num) {
//     return console.log(Math.pow(num, 2))
// }


// Task-4

// const num = () => {
//     const age = Number(prompt('Сколько вам лет?'));
//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     }
//     if (age >= 0 && age <= 12) {
//         alert('Привет друг!');
//     }
//     if (age >= 13) {
//         alert('Добро пожаловать!');
//     }
// }


// Task-5

// const num = (a, b) => {
//     return typeof a === 'number' && typeof b === 'number' 
//         ? console.log(a * b)
//         : console.log('Одно или оба значения не являются числом');
// }


// Task-6

// const cube = () => {
//     const n = 0;
//     const nCube = Math.pow(n, 3);
//     return typeof n === 'number' ? console.log(`${n} в кубе равняется ${nCube}`) : console.log('Переданный параметр не является числом')
// }




// Task-7
// function getCircleArea() {
//     return 3.14 * Math.pow(this.radius, 2);
// }

// function getCirclePerimeter() {
//     return 3.14 * 2 * this.radius;
// }

// const circle1 = {
//     radius: 10,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter
// }
// const circle2 = {
//     radius: 12,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter
// }
// console.log(circle2.getPerimeter());


// Test version ( TASK - 7 )

// const circle1 = {
//     radius: 10,
//     getArea() {
//         return console.log(Math.pow(this.radius, 2) * 3.14);
//     },
//     getPerimeter() {
//         return console.log(this.radius * 3.14 * 2); 
//     }
// }
// const circle2 = {
//     radius: 12,
//     getArea() {
//         return console.log(Math.pow(this.radius, 2) * 3.14);
//     },
//     getPerimeter() {
//         return console.log(this.radius * 3.14 * 2); 
//     }
// }



// Task-8

function game1() {
    const numMonth = Number(prompt('Введите номер месяца!'));
        if (numMonth === 12 || numMonth <= 2 && numMonth > 0) {
            alert('Зима');
        }
        if (numMonth >= 3 && numMonth <= 5) {
            alert('Весна');
        }
        if (numMonth >= 6 && numMonth <= 8) {
            alert('Лето');
        }
        if (numMonth >= 9 && numMonth <= 11) {
            alert('Осень');
        } 
        if (numMonth < 1 || numMonth > 12 || typeof numMonth !== 'number') {
            alert('Такого времени года нет!');
        }
}