// Task 1
// Дан массив
// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];
console.log(`Длинна массива равна: ${colors.length}`);

// Task 2
// Дан массив
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];
console.log(`Последний элемент массива animals: ${animals[animals.length - 1]}`);

// Task 3
// Дан массив
// Удалите все элементы в массиве и выведите в консоль полученный результат.

const numbers = [5, 43, 63, 23, 90];

for (let i = numbers.length; i != 0; i--) {
    numbers.pop();
    console.log(numbers);
}


// Task 4
// Дан массив
/*
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль.
*/

const students = ['Polina', 'Dasha', 'Masha'];

if (students[students.length - 1]) {
    students.pop();
    students.push('Borya');
}

if (students[0]) {
    students.shift();
    students.unshift('Andrey');
}

console.log(students);

// Task 5
// Дан массив
// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.
const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let item of cats){
    console.log(item);
}

// Task 6
/* 
+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`**
*/ 

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

for (let i = 0; i < evenNumbers.length; i++) {
    oddNumbers.push(evenNumbers[i]);
}
console.log(oddNumbers);
console.log(`Элемент массива под индексом [8]: ${oddNumbers[8]}`);


// Task 7
/*
+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.
*/

const binary = [0, 0, 0, 0,];

const join = function(array, one){
    let updArray = array[0];
    for (let i = 1; i < array.length; i++) {
        updArray += one + array[i];
        
    }
    return updArray + '1';
};

console.log(join(binary, '1'));




/*
        ADVANSED
*/
// Task 1
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.
const palindrome = function(text){
    let forCheck = text.length;
    for (let i = 0; i < forCheck/2; i++) {
        if (text[i] !== text[forCheck - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome('алола'));
console.log(palindrome('google'));


// Task 2
// Выведите в консоль среднее значение чисел в многомерном массиве.
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let counter = 0;
let sum = 0;
console.log(matrix);
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        sum += matrix[i][j];
        counter++;
    } 
}
sum /= counter;
console.log(sum);


// Task 3
// Создайте два массива, в один поместите все положительные числа включая 0,
// в другой все отрицательные. Оба массива затем выведите в консоль. 
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const positive = [];
const negative = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    (mixedNumbers[i] < 0) ? negative.push(mixedNumbers[i]) : positive.push(mixedNumbers[i]);
}

console.log(`Массив положительных чисел: ${positive}`);
console.log(`Массив отрицательных чисел: ${negative}`);


// Task 4
// Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
// Далее написать алгоритм который берет все числа из исходного массива, возводит 
// их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

let randomArray = [];
let cubeArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.round(Math.random() * ((10 - ( -1)) + 1)));
    cubeArray[i] = randomArray[i] * randomArray[i] * randomArray[i];
    console.log(randomArray[i]);

}

console.log(cubeArray);
console.log(randomArray);
