// Income & Expenses
let foodExpenses = document.getElementById("food-prices");
let rentExpenses = document.getElementById("rent-prices");
let clothExpenses = document.getElementById("cloth-prices");

let incomeAmount = document.getElementById("income-amount")

let totalExpenses = document.getElementById("total-expenses")

let balanceOutput = document.getElementById("balance")

function sum(food, rent, cloth) {
    // if (typeof (food, rent, cloth) >= '0') {
    //     return "please input a positive number"
    // }
    let total = Number(food) + Number(rent) + Number(cloth);
    return total
}
function updateBalance(income, expense) {
    let result = Number(income) - Number(expense)
    return result
}
function claculation() {
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
function remainingBalance(balance1, balance2) {
    let remainBalance = balance1 - balance2
    return remainBalance
}

function finalCalculation() {
    let save = saving(incomeAmount.value, savingPercentage.value)
    savingAmount.innerText = save;

    let lastBalance = remainingBalance(balanceOutput.innerText, savingAmount.innerText)
    remainingBalanceOutput.innerText = lastBalance
}