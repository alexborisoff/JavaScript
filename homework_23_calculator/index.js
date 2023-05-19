let btn = document.getElementsByTagName('button');
let input = document.getElementById('result');
let res = '';
let cl = '';
let a;

for (let item of btn) {
    item.addEventListener('click', () => {
        if (item.value === '=') {
            res = input.value;
            a = res.split(' ');
            switch(a[1]){
                case '-': return input.value = +a[0] - +a[2];
                case '+': return input.value = +a[0] + +a[2];
                case '/': return input.value = +a[0] / +a[2]; 
                case '*': return input.value = +a[0] * +a[2];
            }
        } else if (item.value === 'clear') {
            
        } else {
            input.value += item.value;
        }
    })
}