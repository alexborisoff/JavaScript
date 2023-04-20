let userNumber = +prompt('Input number');
let userCountIteration = +prompt('Input iteration count');
let updValue;

for (let i = 0; i <= userCountIteration; i++) {
    updValue = userNumber * i;
}

(updValue % 2 === 0) ? alert(`${updValue} - even number`) : alert(`${updValue} - odd number`);