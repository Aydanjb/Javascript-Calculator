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

const clear = () => {
    operandOne = "";
    operandTwo = "";
    operation = "";
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
};

const backspace = () => {

};

const pushNumber = (value) => {
    if (value === "." && operandOne.includes(".")) return;
    operandOne += value;
};



const updatePreviousDisplay = (value) => {
    if (operandOne === "") return;
    if (operandTwo !== "") {
        evaluate();
    }
    operation = value;
    operandTwo = operandOne;
    operandOne = "";
};

const updateDisplay = () => {
    currentDisplay.textContent = operandOne;
    previousDisplay.textContent = operandTwo;
};

clearButton.addEventListener("click", () => {
    clear();
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