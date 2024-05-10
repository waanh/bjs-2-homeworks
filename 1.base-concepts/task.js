"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - (4 * a * c);
  if (discriminant === 0) {
    let root = -b/(2*a);
    arr.push(root);
  } else if (discriminant > 0) {
    let root_1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let root_2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root_1, root_2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;
    let bodyCredit = amount - contribution;
    let monthlyPercent = percent / 12;
    let countPayments = countMonths;
    let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countPayments) - 1));
    let totalAmount = monthlyPayment * countPayments;

    totalAmount = parseFloat(totalAmount.toFixed(2));

    return totalAmount;
}