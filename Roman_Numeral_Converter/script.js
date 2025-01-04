document.getElementById('convert-btn').addEventListener('click', function () {
    const inputElement = document.getElementById('number');
    const outputElement = document.getElementById('output');
    const number = parseInt(inputElement.value);

    if (isNaN(number)) {
        outputElement.textContent = "Please enter a valid number";
        return;
    }

    if (number < 1) {
        outputElement.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if (number > 3999) {
        outputElement.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    // Roman numeral conversion logic
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];

    let result = "";
    let remaining = number;

    for (const { value, numeral } of romanNumerals) {
        while (remaining >= value) {
            result += numeral;
            remaining -= value;
        }
    }

    outputElement.textContent = result;
});
