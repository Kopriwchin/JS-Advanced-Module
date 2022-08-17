function calculator() {
    let firstNumberElement;
    let secondNumberElement;
    let resultElement;

    return {
        init(selector1, selector2, resultSelector) {
            firstNumberElement = document.querySelector(selector1);
            secondNumberElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add() {
            resultElement.value = Number(firstNumberElement.value) + Number(secondNumberElement.value);
        },
        subtract() {
            resultElement.value = Number(firstNumberElement.value) - Number(secondNumberElement.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 