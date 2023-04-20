let userNumber = +prompt('Input number');
let userCountIteration = +prompt('Input iteration count');

for (let i = 0; i <= userCountIteration; i++) {
    if (i === 0) continue;
    userNumber *= i;
}

(userNumber % 2 === 0) ? alert(`${userNumber} - even number`) : alert(`${userNumber} - odd number`);