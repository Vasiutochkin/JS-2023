// - Знайти та вивести довижину настипних стрінгових значень
const string1: string = 'hello world';
const string2: string = 'lorem ipsum';
const string3: string = 'javascript is cool';

console.log(string1.length);
console.log(string2.length);
console.log(string3.length);


// - Перевести до великого регістру наступні стрінгові значення
const arr1: string [] = ['hello world', 'lorem ipsum', 'javascript is cool'];
const result1: string[] = arr1.map((value) => value.toUpperCase());
console.log(result1);

// - Перевести до нижнього регістру настипні стрінгові значення
const arr2: string[] = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
const result2: string[] = arr2.map((value) => value.toLowerCase());
console.log(result2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str: string = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2: string = 'Ревуть воли як ясла повні';
let stringToarray = (srt) => str.split(' ')
console.log(stringToarray(str2));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr3: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arr3.map((value) => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums: number[] = [11, 21, 3];
let sortNums = (nums, direction): void => {
    switch (direction) {
        case 'ascending':
            return nums.sort((a, b) => a - b)
        case 'descending':
            return nums.sort((a, b) => b - a)
    }
};
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

//
// ==========================
// - є масив
interface Course {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArr = coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration);
console.log(sortArr);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sortArr2 = coursesAndDurationArray.filter(({monthDuration}) => monthDuration > 5);
console.log(sortArr2);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let arr4 = coursesAndDurationArray.map((value, index) => {
    return {
        ...value,
        id: index+1
    }
});
console.log(arr4)


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker