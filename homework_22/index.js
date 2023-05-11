/*
#### Task 1 
🖥 Выведи все элементы массива в консоль с помощью метода **`forEach`** 
```javascript const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987] ``` >
Реализуйте решение двумя способами, используя `function declaration` & `arrow function`
*/

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

console.log('Объявленная функция:');
function fibonacciDec(){
    for (let i = 0; i < fibonacci.length; i++){
        console.log(`${i+1}-й элемент массива: ${fibonacci[i]}`);
    }
}
fibonacciDec();

console.log('Стрелочная функция:');
fibonacci.forEach((item, index) => {
    console.log(`${index+1}-й элемент массива: ${item}`);
});

console.log(' ');
/*
#### Task 2 
🖥 Используя метод **`map`** создайте новый массив, на основе массива **`users`**, 
в котором каждый элемент массива будет содержать строку вида: 
> ['member 1: Darya', 'member 2: Masha', ... etc] 
```javascript const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'] ``` >
Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

console.log('Объявленная функция:');

function updUserDec(){
    const updUser = [];
    for (let i = 0; i < users.length; i++){
        updUser.push(`member ${(i + 1)}: ${users[i]}`);
    }
    console.log(updUser);
}
updUserDec();



console.log('Стрелочная функция:');
let updUsersArrow = users.map((item, index) => `member ${(index + 1)}: ${item}`);
console.log(updUsersArrow);
console.log('');
/*

#### Task 3 
🖥 С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел. 
```javascript const numbers = [7, -4, 32, -90, 54, 32, -21] ``` 
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/

const numbers = [7, -4, 32, -90, 54, 32, -21]
console.log('Объявленная функция:');

function negativeArrayDec() {
    const arr = [];
    for (let i = 0; i < numbers.length; i++){  
        if (numbers[i] < 0) {
            arr.push(numbers[i]);
        } 
    }
    console.log(arr);
    return arr;
}
negativeArrayDec();

console.log('Стрелочная функция:');
let negativeArrayArrow = numbers.filter((item) => item < 0);
console.log(negativeArrayArrow);
console.log(' ');

/*
#### Task 4
Используя метод **`reduce`** получите сумму всех чисел массива. 
```javascript 
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987] ``` 
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/

console.log('Объявленная функция:');
function resultDec (){
    let result = 0;
    for (let i = 0; i < fibonacci.length; i++) {
        result += fibonacci[i];
    }
    return result;
}
console.log(resultDec());

console.log('Стрелочная функция:');
let resultArrow = fibonacci.reduce((acc, item) => acc + item, 0);
console.log(resultArrow);
console.log('');

/*
#### Task 5 
🖥 Используя метод **`find`** найдите в массиве первое четное число.
```javascript const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5] ``` 
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
*/
const numbersToOdd = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
console.log('Объявленная функция:');
function oddDec(){
    let odd = 0;
    for (let i = 0; i < numbersToOdd.length; i++) {
        if (!(numbersToOdd[i] % 2)){
            odd += numbersToOdd[i];
            break;
        }
    }
    return odd;
}
console.log(oddDec());


console.log('Стрелочная функция:');
let oddArrow = numbersToOdd.find((item) => !(item % 2));
console.log(oddArrow);
console.log('');

/*
### ADVANCED level 
#### Task 1 
👨‍🏫 + Написать функцию конструктор **Student**
+ В каждом объекте студента должны быть поля **salary** , **rate** , **name** 
+ Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
+ На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени 
студента из вашей группы. 
+ Создать массив **students** и поместить в него студентов. 
+ Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе. 

**rate** имеет 4 категории A B C D 
+ **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат 
+ **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат 
+ **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат 
+ **D** - плохой рейтинг и мы не можем дать кредит 
*/

function Student(salary, rate, name ){
    this.salary = salary;
    this.rate = rate;
    this.name = name;

    this.creditRate = function() {
        switch(this.rate) {
            case 'A': return this.salary * 12;
            case 'B': return this.salary * 9;
            case 'C': return this.salary * 6;
            default: return 0;
        }
    }
}

let alex = new Student(1000, 'A', 'Alex');
let anton = new Student(1000, 'B', 'Anton');
let misha = new Student(1000, 'A', 'Misha');
let lesha = new Student(1000, 'B', 'Lesha');
let kolya = new Student(1000, 'D', 'Kolya');
console.log(alex.creditRate());

const students = [alex, anton, misha, lesha, kolya];

let salaryRate = students.reduce((accamulator, item) => {
    return accamulator + item.creditRate();
}, 0);

console.log(`Общая сумма кредита: ${salaryRate}`);
console.log('');

/**
#### Task 2 
👨‍🏫 Тролли атакуют наш раздел с комментариями!!! 
+ Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу. 
+ Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными. 
+ Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!". > 
Примечание: для этой задачи **`y`** не считается гласной.
*/

const vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let str = prompt('Input string');
const clearVowels = (str) => str.split('').filter(item => !vowelsArr.includes(item)).join('');

console.log(clearVowels(str));
console.log('');
/*
#### Task 3 
👨‍🏫 Нет истории, нет теории 
+ В приведенных ниже примерах показано, как написать функцию: 
```javascript 
accum("abcd") -> "A-Bb-Ccc-Dddd" accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" accum("cwAt") -> "C-Ww-Aaa-Tttt" ``` > 
Параметр - это строка, которая включает только буквы от a..z и A..Z.
*/
let text = 'AbCd';
let accum = text.split('')
                .map((item, index) => (item = item.toLowerCase().repeat(index+1)) &&
                item.charAt(0).toUpperCase() + item.slice(1)).join('-');
console.log(accum);                

/**
#### Task 4
Самый высокий и самый низкий 
+ В этом небольшом задании вам дается строка чисел, разделенных пробелами,
и вы должны возвращать наибольшее и наименьшее число. 
```javascript 
highAndLow("1 2 3 4 5"); // return "5 1" highAndLow("1 2 -3 4 5"); // 
return "5 -3" highAndLow("1 9 3 4 -5"); // 
return "9 -5" ```
> Строка вывода должна состоять из двух чисел, разделенных одним пробелом, 
при этом наибольшее число должно быть первым. 
*/

const strNumbers = ('1 2 -3 4 5');
function highAndLow() {
    let arrayNumbers = strNumbers.split(' ').sort((min, max) => max - min);
    let max = arrayNumbers.at(-1);
    let min = arrayNumbers[0];
    return max + ' ' + min;
}
console.log(highAndLow());
console.log('');

/*
#### Task 5 
👨‍🏫 Изограммы + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем. 
```javascript 
isIsogram("Dermatoglyphics") == true isIsogram("aba") == false isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
    const isogramArray = str.split('');
    const seenLetters = [];
    let isIsogramLetter = true;

    isogramArray.forEach(letter => {
        (seenLetters.indexOf(letter) === -1) ? seenLetters.push(letter) : isIsogramLetter = false;
    })
    return isIsogramLetter;
}

console.log(isIsogram('aAbf'));

/**
#### Task 6 
👨‍🏫 Считаем коды символов 
+ Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число.
Поместите результат в переменную **`total1`** 
+ Затем замените все числа `7` на число `1` и назовите это число **`total2`** 
+ После верните разницу между суммой цифр **`total1`** и **`total2`** > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667 
*/

let asciiStr = 'ABC';
const total1 = asciiStr.split('').map((item)=> item.codePointAt()).join('');
let total2 = total1.split('').map(item => item === '7' ? '1' : item).join('');

let resTotal = total1 - total2;

console.log(total1);
console.log(total2);
console.log(`Разница между total1 и total2: ${resTotal}`);

/*
#### Task 7 
👨‍🏫 Дубликаты 
+ Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен **`(`**,
если этот символ появляется только один раз в исходной строке, или **`)`**, 
если этот символ встречается более одного раза в исходной строке. 
Игнорируйте использование заглавных букв при определении дубликата символа. 
```javascript "din" => "(((" "recede" => "()()()" "Success" => ")())())" "(( @" => "))((" ```
*/

const duplicate = 'redece';

const transformString = duplicate.toLocaleLowerCase().split('')
        .map((item, index, arr) => arr.indexOf(item) !== arr.lastIndexOf(item) ? item = ')' : item = '(')
        .join('');
console.log(transformString);