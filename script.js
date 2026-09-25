// JavaScript Timer
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//Form Validation
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

//JavaScript Clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//JavaScript Calculator

let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); 
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}