"use strict";
function getNumber(num) {
    if(!Number.isInteger(num) || num < 0 || num > 999){
        console.log("Целое значение от 0 до 999")
        return{};
    }
    return {
        units :num % 10,
        hundereds: Math.floor(num /100),
        tens: Math.floor(num / 10) % 10,
    }
}
console.log(getNumber(123));