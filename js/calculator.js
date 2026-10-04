class Calculator {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;
        this.display = this.container.querySelector('#display');
        this.buttonsPanel = this.container.querySelector('.culculator-buttons');
        this.result = 0;
        this.firstNumber = "";
        this.secondNumber = "";
        this.operation = "";
        this.buttonsPanel.addEventListener('click', (e) => {
            this.handleBtnClick(e);
        });

    }
    read(value) {
        this.result = value;
        return this;
    }
    add(value1 = this.result, value2) {
        this.result = value1 + value2;
        return this;
    }
    subtract(value1 = this.result, value2) {
        this.result = value1 - value2;
        return this;
    }
    multiply(value1 = this.result, value2) {
        this.result = value1 * value2;
        return this;
    }
    divide(value1 = this.result, value2) {
        if (value2 === 0) {
            console.log("Error! Dividing by zero");
            return this;
        }
        this.result = value1 / value2;
        return this;
    }
    getResult() {
        return this.result;
    }
    reset() {
        this.result = 0;
        return this;
    }
    enterValue(val) {
        if (this.operation === "") {
            this.firstNumber += val;
            this.display.value = this.firstNumber;
        } else {
            this.secondNumber += val;
            this.display.value = this.secondNumber;
        }
    }
    enterDecimal() {
        if (this.operation === "") {
            if (!this.firstNumber.includes(".")) {
                this.firstNumber = this.firstNumber === "" ? "0." : this.firstNumber + ".";
                this.display.value = this.firstNumber;
            }
        } else {
            if (!this.secondNumber.includes(".")) {
                this.secondNumber = this.secondNumber === "" ? "0." : this.secondNumber + ".";
                this.display.value = this.secondNumber;
            }
        }
    }
    clear() {
        this.firstNumber = "";
        this.secondNumber = "";
        this.operation = "";
        this.display.value = "";
        this.reset();
    }
    handleBtnClick(e) {
        const activeBtn = e.target;
        if (activeBtn.tagName !== 'BUTTON') return;

        if (activeBtn.dataset.value !== undefined) {
            this.enterValue(activeBtn.dataset.value);
            return;
        }
        if (activeBtn.dataset.decimal !== undefined) {
            this.enterDecimal();
        }
        if (activeBtn.dataset.operation !== undefined) {
            if ((this.firstNumber !== "") && (this.operation === "")) {
                this.read(Number(this.firstNumber));
                this.operation = activeBtn.dataset.operation;
                return;
            }

        }
        if (activeBtn.dataset.action === "clear") {
            this.clear();
            return;
        }

        if (activeBtn.dataset.action === "calculate") {
            const firstVal = Number(this.firstNumber);
            const secVal = Number(this.secondNumber);
            if (isNaN(firstVal) || isNaN(secVal)) {
                console.log("Error! Entered value is not a number");
                return;
            }
            if (this.operation !== ""){
                this[this.operation](firstVal, secVal);
            } 
            const result = this.getResult();
            this.display.value = result;
            this.displayResult();
            this.firstNumber = String(result);
            this.secondNumber = "";
            this.operation = "";
            return;
        }

    }
    displayResult(){
        console.log(`Current result ${this.result}`);
    }
}

const calculator = new Calculator('#simple-calculator');

