class SmartCalculator {

    constructor(initialValue) {
        this.tmp = [initialValue];
        this.result = 0;
    }

    add(number) {
        this.tmp.push('+');
        this.tmp.push(number);
        this.calculate();
        return this;
    }

    subtract(number) {
        this.tmp.push('-');
        this.tmp.push(number);
        this.calculate();
        return this;
    }

    multiply(number) {
        this.tmp.push('*');
        this.tmp.push(number);
        this.calculate();
        return this;
    }

    devide(number) {
        this.tmp.push('/');
        this.tmp.push(number);
        this.calculate();
        return this;
    }

    pow(number) {
        this.tmp.push('^');
        this.tmp.push(number);
        this.calculate();
        return this;
    }

    calculate() {
        let array = [];
        array = array.concat(this.tmp);
        if (array.includes("^")) {
            this.counting(array, "^");
        }
        if (array.includes("*")) {
            this.counting(array, "*");
        }
        if (array.includes("/")) {
            this.counting(array, "/");
        }
        if (array.includes("-")) {
            this.counting(array, "-");
        }
        if (array.includes("+")) {
            this.counting(array, "+");
        }
    }

    counting(array, operation) {
        while (array.includes(operation)) {
            let index = array.indexOf(operation)
            let numberOne = Number(array[index - 1]);
            let numberTwo = Number(array[index + 1]);

            let currentResult;

            switch (operation) {
                case '/':
                    currentResult = numberOne / numberTwo;
                    break;
                case '*':
                    currentResult = numberOne * numberTwo;
                    break;
                case '-':
                    currentResult = numberOne - numberTwo;
                    break;
                case '+':
                    currentResult = numberOne + numberTwo;
                    break;
                case '^':
                    index = array.lastIndexOf(operation)
                    numberOne = Number(array[index - 1]);
                    numberTwo = Number(array[index + 1]);
                    currentResult = Math.pow(numberOne, numberTwo);
                    break;
            }
            this.result = currentResult;
            array.splice(index - 1, 3, currentResult)
        }
        return array;
    }

    toString() {
        return Number(this.result);
    }
}

module.exports = SmartCalculator;