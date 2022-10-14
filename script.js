const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const previousDisplay = document.querySelector("#previousDisplay");
const currentDisplay = document.querySelector("#currentDisplay");

let operandOne = "";
let operandTwo = "";
let operation = "";
let result = "";

const clear = () => {
    operandOne = "";
    operandTwo = "";
    operation = "";
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
};

const backspace = () => {
    if (operandOne === "") return;
    operandOne = operandOne.slice(0, operandOne.length - 1);
};

const pushNumber = (value) => {
    if (value === "." && operandOne.includes(".")) return;
    operandOne += value;
};

const updatePreviousDisplay = (value) => {
    if (operandOne === "") return;
    if (operandTwo !== "") {
        operate();
    }
    operation = value;
    operandTwo = operandOne;
    operandOne = "";
};

const updateDisplay = () => {
        currentDisplay.textContent = operandOne;
    if (operation != "") {
        previousDisplay.textContent = `${operandTwo} ${operation}`;
    }
    else {
        previousDisplay.textContent = "";
    }
};

const operate = () => {
    opOne = parseFloat(operandOne);
    opTwo = parseFloat(operandTwo);
    if (operandOne === NaN || operandTwo === NaN) return
    switch (operation) {
        case "+":
            result = opTwo + opOne;
            break
        case "-":
            result = opTwo - opOne;
            break
        case "x":
            result = opTwo * opOne;
            break
        case "/":
            if (opOne === 0) {
                result = "ERROR";
                break
            }
            result = opTwo / opOne;
            break
        default:
            return
    }
    operandOne = result;
    operation = "";
    operandTwo = "";
};

clearButton.addEventListener("click", () => {
    clear();
})

deleteButton.addEventListener("click", () => {
    backspace();
    updateDisplay();
})

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        pushNumber(button.textContent);
        updateDisplay();
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        updatePreviousDisplay(button.textContent);
        updateDisplay();
    })
});

equalsButton.addEventListener("click", () => {
    operate();
    updateDisplay();
})