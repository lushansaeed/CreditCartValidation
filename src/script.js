function formatCreditCardInput(inputField) {
    let value = inputField.value.replace(/\D/g, ''); // Remove non-digits
    let formattedValue = '';

    // Add a space after every 4th digit
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    inputField.value = formattedValue;
}

function validateCreditCard() {
    var cardNumber = document.getElementById('cc-number').value.replace(/\s+/g, ''); // Remove spaces
    var validationResult = document.getElementById('validation-result');

    if (!/^\d{16}$/.test(cardNumber)) {
        validationResult.innerText = 'Input must be a 16-digit number.';
        return;
    }

    if (!isValidLuhn(cardNumber)) {
        validationResult.innerText = 'This is not a valid credit card number.';
    } else {
        validationResult.innerText = 'This is a valid credit card number!';
    }
}

function isValidLuhn(number) {
    var sum = 0;
    var shouldDouble = false;
    for (var i = number.length - 1; i >= 0; i--) {
        var digit = parseInt(number[i]);

        if (shouldDouble) {
            if ((digit *= 2) > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum % 10) == 0;
}
