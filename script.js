'use strict';


const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const total = document.querySelector('.result');
const reset = document.querySelector('.calc__btn-discharge');
const remove = document.querySelector('.calc__btn-delete');
const output = document.querySelector('.calc__screen');

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

function calc(operator, num1, num2) {
	switch (operator) {
		case '+':
			return +num1 + +num2;
		case '–':
			return num1 - num2;
		case '×':
			return num1 * num2;
		case '÷':
			return num1 / num2;
	}
}

for (let number of numbers) {
	number.addEventListener("click", function () {
		if (num1 === '') {
			output.innerHTML += number.innerHTML;
		} else if (num2 === '') {
			num2 = output.innerHTML = number.innerHTML;
		} else {
			output.innerHTML += number.innerHTML;
			num2 = output.innerHTML;
		}
		if (output.innerHTML.length >= 6) {
			output.style.fontSize = '70px';
		}
		if (output.innerHTML.length >= 9) {
			output.style.fontSize = '50px';
		}
		if (output.innerHTML.length >= 12) {
			output.style.fontSize = '40px';
		}
	})
}


for (let sign of operators) {
	sign.onclick = function () {
		if (result !== '') {
			num2 = '';
			result = '';
		}
		if (num1 === '') {
			num1 = output.innerHTML;
		}
		operator = sign.innerHTML;
	}
}


total.onclick = function () {
	if (num1 !== '' && num2 !== '' && operator !== '') {
		result = output.innerHTML = calc(operator, num1, num2);
		if (!Number.isInteger(result) && typeof result !== 'string') {
			output.innerHTML = result.toFixed(2);
		}
		num1 = result;
	}
	if (num1 !== '' && num2 === '' && operator !== '') {
		num2 = num1;
		num1 = result = output.innerHTML = calc(operator, num1, num2);
	}
	if (output.innerHTML.length >= 6) {
		output.style.fontSize = '70px';
	}
	if (output.innerHTML.length >= 9) {
		output.style.fontSize = '50px';
	}
	if (output.innerHTML.length >= 12) {
		output.style.fontSize = '40px';
	}
}


reset.addEventListener("click", function () {
	output.innerHTML = '';
	output.style.fontSize = '96px';
	num1 = '';
	num2 = '';
	operator = '';
	result = '';
})


remove.addEventListener("click", function () {
	if (output.innerHTML.length === 1) {
		output.innerHTML = '';
	} else output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1);
	if (output.innerHTML.length < 12) {
		output.style.fontSize = '50px';
	}
	if (output.innerHTML.length < 9) {
		output.style.fontSize = '70px';
	}
	if (output.innerHTML.length < 6) {
		output.style.fontSize = '96px';
	}
})