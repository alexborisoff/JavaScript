const btn = document.getElementsByTagName('button');
const input = document.getElementById('result');
let res = '';
let a;

for (let item of btn) {
    item.addEventListener('click', () => {
        switch (item.value) {
            case '=':  res = input.value;
            a = res.split(' ');
            switch(a[1]){
                case '-': return input.value = +a[0] - +a[2];
                case '+': return input.value = +a[0] + +a[2];
                case '/': return input.value = +a[0] / +a[2]; 
                case '*': return input.value = +a[0] * +a[2];
            }
            break;
            case 'clear': return input.value = '0';
            default: return input.value += item.value;
        } 
    })
}