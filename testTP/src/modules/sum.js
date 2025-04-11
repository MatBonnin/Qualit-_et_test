"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumSmallNumbers = sumSmallNumbers;
exports.sum = sum;
exports.addition = addition;
function sumSmallNumbers(a, b) {
    if (a < 0 || b < 0) {
        throw new Error("Les nombres doivent être positifs");
    }
    else if (a > 9 || b > 9) {
        throw new Error("Les nombres doivent être inférieurs à 10");
    }
    return a + b;
}
;
function sum(numA, numB) {
    return sumSmallNumbers(numA, numB);
}
;
function addition(numA, numB) {
    var tabA = numA.toString().split('');
    var tabB = numB.toString().split('');
    console.log(tabA, tabB);
}
;
addition(10, 22);
