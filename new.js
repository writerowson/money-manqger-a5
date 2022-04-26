// Income & Expenses
let foodExpenses = document.getElementById("food-prices");
let rentExpenses = document.getElementById("rent-prices");
let clothExpenses = document.getElementById("cloth-prices");

let incomeAmount = document.getElementById("income-amount")

let totalExpenses = document.getElementById("total-expenses")

let balanceOutput = document.getElementById("balance")

function sum(food, rent, cloth) {

    if ((isNaN(food)) && isNaN(rent) && isNaN(cloth)) {
        return alert('Plese put a valid Number')
    }
    else {
        let total = Number(food) + Number(rent) + Number(cloth);
        return total
    }
}
function updateBalance(balance1, balance2) {

    if ((isNaN(balance1)) && isNaN(balance2)) {
        return alert('Plese put a valid Number')
    }
    else if (Number(balance2) > Number(balance1)) {
        return alert("Sorry, You don't have sufficient balance")
    }
    // else if (Number(balance1) < 0 && Number(balance2) < 0) {
    //     return alert('Plese put a positive Number')
    // }
    else {
        let result = Number(balance1) - Number(balance2)
        return result;
    }
}

function calculation() {
    let sumOfExpenses = sum(foodExpenses.value, rentExpenses.value, clothExpenses.value)
    totalExpenses.innerText = sumOfExpenses;

    let balance = updateBalance(incomeAmount.value, totalExpenses.innerText)
    balanceOutput.innerText = balance;
}
// Saving & Balance
let savingPercentage = document.getElementById('saving-Input');
let savingAmount = document.getElementById("total-saving");
let remainingBalanceOutput = document.getElementById("total-Balance")

function saving(incomeAmount, savingPercentage) {
    let savingInput = Number(incomeAmount) / 100 * Number(savingPercentage)
    return savingInput
}
function finalCalculation() {
    let save = saving(incomeAmount.value, savingPercentage.value)
    savingAmount.innerText = save;

    let lastBalance = updateBalance(balanceOutput.innerText, savingAmount.innerText)
    remainingBalanceOutput.innerText = lastBalance
}

