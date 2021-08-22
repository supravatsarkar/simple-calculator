
let number = 0;
let sign = '';
let number2 = 0;

/* const numbers = document.getElementsByClassName('number');
for (const num of numbers) {
    // console.log(num.innerText);/
    num.addEventListener('click', function () {

    });
} */
const divParent = document.getElementById('div-parent');
divParent.addEventListener('click', function (event) {
    const button = event.target;
    const outputField = document.getElementById('output-field');
    const historyField = document.getElementById('history-field');
    const buttonText = button.innerText;
    if (button.innerText == 'C') {
        outputField.innerText = '';
        historyField.innerText = '';
        return 0;
    }

    if (button.innerText == '+') {
        const outputFieldValue = parseFloat(outputField.innerText);
        number = outputFieldValue;
        outputField.innerText = '';
        historyField.innerText = outputFieldValue + button.innerText;
        // console.log(outputFieldValue);
        sign = '+';
    }
    else if (button.innerText == '-') {
        const outputFieldValue = parseFloat(outputField.innerText);
        number = outputFieldValue;
        outputField.innerText = '';
        historyField.innerText = outputFieldValue + button.innerText;
        sign = '-';
        // console.log(outputFieldValue);
    }
    else if (button.innerText == '*') {
        const outputFieldValue = parseFloat(outputField.innerText);
        number = outputFieldValue;
        outputField.innerText = '';
        historyField.innerText = outputFieldValue + button.innerText;
        sign = '*';
        // console.log(outputFieldValue);
    }
    else if (button.innerText == '/') {
        const outputFieldValue = parseFloat(outputField.innerText);
        number = outputFieldValue;
        outputField.innerText = '';
        historyField.innerText = outputFieldValue + button.innerText;
        sign = '/';
        // console.log(outputFieldValue);
    }
    else if (button.innerText == '%') {
        const outputFieldValue = parseFloat(outputField.innerText);
        number = outputFieldValue;
        outputField.innerText = '';
        historyField.innerText = outputFieldValue + button.innerText;
        sign = '%';
        // console.log(outputFieldValue);
    }
    else if (button.innerText == '=') {
        const outputFieldValue = parseFloat(outputField.innerText);
        if (sign == '+') {
            number = number + outputFieldValue;
        }
        else if (sign == '-') {
            number = number - outputFieldValue;
        }
        else if (sign == '*') {
            number = number * outputFieldValue;
        }
        else if (sign == '/') {
            number = number / outputFieldValue;
        }
        else if (sign == '%') {
            number = number % outputFieldValue;
        }
        historyField.innerText = historyField.innerText + outputFieldValue;
        outputField.innerText = number;
    }
    else {
        outputField.innerText = outputField.innerText + buttonText;
    }
    console.log(number);

})

