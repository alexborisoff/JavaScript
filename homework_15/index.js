var srtValue = 'Value: ';
var srtType = 'Type of variable: ';
var bool = true;
var string = 'test string';
var number = 1.15 + 2.30;
var empty = null;

alert('Welcome H1');
alert('I have 4 variables: \n 1. Boolean \n 2. String \n 3. Number \n 4. Null');

alert(srtValue + bool);
alert(srtType + typeof bool);
alert(srtValue + string);
alert(srtType + typeof string);
alert(srtValue + number);
alert(srtType + typeof number);
alert(srtValue + empty);
alert(srtType + typeof empty);

var confirmAnswer = confirm('Do you like it?');
console.log(confirmAnswer);