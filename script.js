var display = document.getElementById('display');
var operator = '';
var operand1 = 0;
var operand2 = 0;

function btn(num) {
    display.value += num;
}

function calculate() {
    var result=eval(display.value);
    display.value=result;
    }


function clearScreen() {
    display.value = '';
    operator = '';
    operand1 = 0;
    operand2 = 0;
}