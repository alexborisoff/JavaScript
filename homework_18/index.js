// Task 1
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

let sneakers = {
    brand: 'Nike',
    size: 39
}

delete sneakers.brand;
delete sneakers.size;
console.log(sneakers);

// Task 2
// Создать любой обьект с двумя ключами и любыми значениями в них, 
// а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

let car = {
    brand: 'BMW',
    model: 'e36'
}

for (let key in car) {
    (car[key] === car.brand) ? console.log('**true**') : console.log('**false**');
}

// Task 3
//Дан обьект:
//C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(`Ключ объекта student: ${key}`);
    console.log(`Значение объекта student: ${student[key]}`);   
}

//Task 4
//Дан обьект:
//Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);



//Task 5
//Дан обьект:
//Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную


let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
}

let sum = 0;
let avgValue = 0;

for (let key in salaries) { 
    sum += salaries[key];
    avgValue++;
}

let avg = function(){
    return sum /= avgValue;;
}
avg();
console.log(sum);



//Task 6
//Дан обьект:
//Сделайте полное клонирование обьекта с помощью цикла for in и проверки значение ключа typeof 
//так чтобы потом я мог поменять любое значение в обьекте user, при этом в cloneUserObject объекте 
//остануться старые данные 

let user = {
	name: 'Petya',
	age: 20,
	isMarried: true,
	family: null,
	address: undefined,
	friend: {
		name: 'Misha'
	}
};

let cloneUserObject = {};

console.log(typeof (user.family));

for (let key in user) {   
    if (typeof user[key] === 'object' && user[key] !== null) {
        cloneUserObject[key] = {};
        for (let prop in user[key]){
            cloneUserObject[key][prop] = user[key][prop];
        }
        continue;
    }
    cloneUserObject[key] = user[key];
}


console.log(user);
cloneUserObject.name = 'Denis';
cloneUserObject.friend.name = 'Alex';
console.log(cloneUserObject);
console.log(user === cloneUserObject);
console.log(user.friend === cloneUserObject.friend);

