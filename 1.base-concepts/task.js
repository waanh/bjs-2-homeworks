"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - (4 * a * c);
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    let root = -b/(2*a);
    arr = [root];
  } else (discriminant > 0) {
    let root_1 = (-b + Math.sqrt(d) )/(2*a);
    let root_2 = (-b - Math.sqrt(d) )/(2*a);
    arr = [root_1, root_2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}