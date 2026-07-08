let display = document.getElementById("display");

// Add number or operator
function append(num) {
    display.value = display.value + num;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Delete one character
function deleteLast() {
    display.value = display.value.substring(0, display.value.length - 1);
}

// Calculate answer
function calculate() {
    let result;

    result = eval(display.value);

    display.value = result;
}