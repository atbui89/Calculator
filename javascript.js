function addNums (num1, num2) {
  return num1 + num2;
}

function subtractNums (num1, num2) {
  return num1 - num2;
}

function multiplyNums (num1, num2) {
  return num1 * num2;
}

function divideNums (num1, num2) {
  return num1 / num2;
}

function operate (mathFunc) {
  var numOne = Number(document.getElementById('num1').value);
  var numTwo = Number(document.getElementById('num2').value);
  console.log('Number one : ' + numOne);
  console.log('Number two : ' + numTwo);
  var addNums = numOne + numTwo;
 
  var addedNums = window[mathFunc](numOne, numTwo);

  console.log('Result = ' + addedNums);

}

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(testArray) {
	return testArray.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(testArray) {
  return testArray.reduce((partialMultiply, a) => partialMultiply * a, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0) return 1;
  let factFn = 1;
  for (let i = num; i > 0; i--) {
    factFn *= i;
  }
  return factFn;
};

