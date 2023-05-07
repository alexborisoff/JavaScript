let str = prompt('Input string');
let space = ' ';
let newStr = '';

function ucFirst(){
    str.trim().toLowerCase(); 
    for (let i = 0; i < str.length; i++) {
        newStr += (str[i - 1] === space) ? str[i].toUpperCase() : str[i];
    }
    return newStr[0].toUpperCase() + newStr.slice(1).trim();
}


console.log(ucFirst());