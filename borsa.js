
//function to get value from input
function getValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValueText = input.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

// function for saving part to set value to 0 on errors
function valueToZero() {
    document.getElementById('saving-amount').innerText = "0";
    document.getElementById('remaining-balance').innerText = "0";
}

// calculation of total expenses and balance
document.getElementById('calculate').addEventListener('click', function () {
    const income = getValue('income');
    const food = getValue('food');
    const rent = getValue('rent');
    const cloth = getValue('cloth');
    const totalExpenses = food + rent + cloth;

    //error handling
    if ((isNaN(income) && isNaN(food)) && (isNaN(rent) && isNaN(cloth))) {
        alert('Kindly give numbers');
        location.reload();
    }
    else if (((income > 0 && food >= 0) && (rent >= 0 && cloth >= 0)) && income >= totalExpenses) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        const balance = income - totalExpenses;
        const balanceId = document.getElementById('balance');
        balanceId.innerText = balance;
        document.getElementById("save-btn").disabled = (false);
    }
    else {
        alert('Kindly insert valid numbers');
        location.reload();
    }
});


// saving part calculation
document.getElementById('save-btn').addEventListener('click', function () {
    const income = getValue('income');
    const savingPercentage = getValue('save');
    const balance = document.getElementById('balance').innerText;
    const save = (income / 100) * savingPercentage;
    const remainingBalance = balance - save;

    //error handling
    if (isNaN(savingPercentage)) {
        alert('Kindly give numbers');
        valueToZero();
    }
    else if ((savingPercentage > 0 && balance >= save) && income > 0) {
        document.getElementById('saving-amount').innerText = save;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else if (balance < save) {
        alert("Sorry, You can't save more than you have");
        valueToZero();
    }
    else {
        alert("Please enter positive numbers");
        valueToZero();
    }
});