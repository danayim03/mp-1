function getNumbers() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Your inputs are not valid numbers :(";
        document.getElementById("output").style.color = "red";
        return null;
    }
    return { num1, num2 };
}

function updateOutput(result) {
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(result);
    if (result < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "white";
    }
}

function addition() {
    let numbers = getNumbers();
    if (numbers) {
        updateOutput(numbers.num1 + numbers.num2);
    }
}

function subtraction() {
    let numbers = getNumbers();
    if (numbers) {
        updateOutput(numbers.num1 - numbers.num2);
    }
}

function multiplication() {
    let numbers = getNumbers();
    if (numbers) {
        updateOutput(numbers.num1 * numbers.num2);
    }
}

function division() {
    let numbers = getNumbers();
    if (numbers) {
        if (numbers.num2 === 0) {
            document.getElementById("output").innerHTML = "You can't divide by zero :(";
            document.getElementById("output").style.color = "red";
        } else {
            updateOutput(numbers.num1 / numbers.num2);
        }
    }
}

function exponentiation() {
    let numbers = getNumbers();
    if (numbers) {
        let result = 1;
        for (let i = 0; i < numbers.num2; i++) {
            result = result * numbers.num1;
        }
        updateOutput(result);
    }
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black";
}
