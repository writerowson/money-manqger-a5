// function sum(num1, num2) {
//     let total = num1 + num2;
//     return total
// }
// let result = sum(2, 3)

// console.log(result)
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
    // console.log = (sumOfExpenses)
    totalExpenses.innerText = sumOfExpenses;

    let balance = updateBalance(incomeAmount.value, totalExpenses.innerText)
    balanceOutput.innerText = balance;
}