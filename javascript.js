var storedNum1 = '';
var storedNum2 = '';
var storedOperation1 = '';

function addNums () {
  return '+';
}

function subtractNums () {
  return '-';
}

function multiplyNums () {
  return '*';
}

function divideNums () {
  return '÷';
}

function operate(mathFunc) {
  if (storedNum1 == '') {
    //nothing
  } else if (storedOperation1 == '') {
    storedOperation1 = window[mathFunc]();
    var targetDiv = document.getElementById('outputDisplay');
    targetDiv.innerHTML += storedOperation1;
    console.log('StoredOperation = ' + storedOperation1);
  } else {
    runCalc();
    storedOperation1 = window[mathFunc]();
    var targetDiv = document.getElementById('outputDisplay');
    targetDiv.innerHTML = storedNum1 + storedOperation1;
    console.log('StoredOperation = ' + storedOperation1);
  }
}

function appendNums(numClicked) {
  if (storedOperation1 == '') {
    clearDisplay();
    const numPicked = document.getElementById(numClicked).textContent;
    console.log('NumPicked = ' + numPicked);
    var targetDiv = document.getElementById('outputDisplay');
    storedNum1 += numPicked;
    targetDiv.innerHTML = storedNum1;
    console.log('storedNum1 = ' + storedNum1);
  } else {
    const numPicked = document.getElementById(numClicked).textContent;
    console.log('NumPicked = ' + numPicked);
    var targetDiv = document.getElementById('outputDisplay');
    targetDiv.innerHTML += numPicked;
    storedNum2 += numPicked;
    console.log('storedNum2 = ' + storedNum2);
  }
}

function appendDecimal(decClicked) {
  if (storedOperation1 == '') {
    clearDisplay();
    const numPicked = document.getElementById(decClicked).textContent;
    console.log('NumPicked = ' + numPicked);
    var targetDiv = document.getElementById('outputDisplay');
    storedNum1 += numPicked;
    targetDiv.innerHTML = storedNum1;
    console.log('storedNum1 = ' + storedNum1);
  } else {
    const numPicked = document.getElementById(decClicked).textContent;
    console.log('NumPicked = ' + numPicked);
    var targetDiv = document.getElementById('outputDisplay');
    targetDiv.innerHTML += numPicked;
    storedNum2 += numPicked;
    console.log('storedNum2 = ' + storedNum2);
  }
}

function equalSign() {
  runCalc();
  var targetDiv = document.getElementById('outputDisplay');
  targetDiv.innerHTML = answer;
  console.log('The Answer is ' + answer);
  clearNums();
}

function runCalc() {
  if (storedOperation1 == '+') {
    answer = Number(storedNum1) + Number(storedNum2);
  } else if (storedOperation1 == '-') {
    answer = Number(storedNum1) - Number(storedNum2);
  } else if (storedOperation1 == '*') {
    answer = Number(storedNum1) * Number(storedNum2);
  } else if (storedOperation1 == '÷') {
    answer = Number(storedNum1) / Number(storedNum2);
  }
  storedNum1 = answer;
  storedNum2 = '';
  console.log('runCalc ran, answer = ' + answer + 'storedNum1 = ' + storedNum1);
}

function clearAll() {
  clearNums();
  clearDisplay();
  console.log('Cleared');
  console.log('storedNum1 = ' + storedNum1);
  console.log('storedNum2 = ' + storedNum2);
  console.log('StoredOperation = ' + storedOperation1);
}

function clearNums() {
  storedNum1 = '';
  storedNum2 = '';
  storedOperation1 = '';
  answer = '';
  console.log('clearNums ran');
}

function clearDisplay() {
  var targetDiv = document.getElementById('outputDisplay');
  targetDiv.innerHTML = '';
}

function appendDecimal() {
  if (storedOperation1 == '') {
    clearDisplay();
    const numPicked = document.getElementById('addDecimal').textContent;
    if (storedNum1.includes('.')) {
      console.log('NumPicked = ' + numPicked);
      var targetDiv = document.getElementById('outputDisplay');
      targetDiv.innerHTML = storedNum1;
      console.log('storedNum1 = ' + storedNum1);
    } else {
    console.log('NumPicked = ' + numPicked);
    var targetDiv = document.getElementById('outputDisplay');
    storedNum1 += numPicked;
    targetDiv.innerHTML = storedNum1;
    console.log('storedNum1 = ' + storedNum1);
  }
  } else {
    const numPicked = document.getElementById('addDecimal').textContent;
    if (storedNum2.includes('.')) {
    console.log('storedNum2 = ' + storedNum2);
    } else {
    console.log('NumPicked = ' + numPicked);
    var targetDiv = document.getElementById('outputDisplay');
    targetDiv.innerHTML += numPicked;
    storedNum2 += numPicked;
    console.log('storedNum2 = ' + storedNum2);
    }
  }
}
