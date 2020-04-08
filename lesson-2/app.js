'use strict';
//задание 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); /*ответ: 2 --> Переменная а=1 b=1 с,d не определено (андефаинд)
 c=++a  a=1 плюс стоит префиксная форма увеличивает еще на 1 возвращает новое значение получается 2 и тогда с=2 a=2*/

d = b++;
alert(d); /*ответ: 1, b изначально равна 1 но стоит постфиксная форма по этому значение у величивается на 1 но
записывается старое значение по этому d=1*/

c = 2 + ++a;
alert(c); /*ответ: 5, так как а=2 стоит префиксная форма а будет 3, 3+2=5 С=5 */

d = 2 + b++;
alert(d); //ответ: 4 стоит постфиксная форма b=2 вернулось старое значение 2+2 =4

alert(a); /* а изначально 1 потом она увелеичивается на 1 в первом примере это уже a=2
 и в 3 примере а снова увеличивается на 1 тогда а=3*/
alert(b); /* b изначально 1 во втором примере увеличивается на 1 b=2 и в 4 примере b
увеличивается на 1 тогда b=3 */
//задание 2
let a = 2;
let x = 1 + (a *= 2);
alert(x);
/* сначала выполняется все что в скобках, переменная a которая равна 2 умножается на 2 получается 4  знак = присваивает значение 4
в переменную a, 4+1=5 */
//задание 3
let a = 5;
let b = 6;
if ( a >= 0 && b >= 0 ){
    alert( a - b);
} else if ( a < 0 && b < 0){
    alert( a * b);
}
//задание 4
/**
 * Функция сложения переменных
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getSum(a, b){
    return a + b;
}
/**
 * Фунция вычитания переменных
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getDiff(a, b) {
    return a - b;
}

/**
 * Функция деления переменных
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getDiv(a, b) {
    return a / b;
}

/**
 * Функция умножения переменных
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getMult(a, b) {
    return a * b;
}
//задание 5
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "+":
            return getSum(arg1, arg2);
        case"-":
            return getDiff(arg1, arg2);
        case"/":
            return getDiv(arg1, arg2);
        case"*":
            return getMult(arg1, arg2);
        default:
            throw new Error("Оператор неизвестен");
    }
}