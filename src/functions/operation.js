function add(a, b) {
    return a + b;
}
console.log('2+6 : ', add(56, 59));

function divide(a, b) {
    return a / b;
}
console.log('2/6 : ', divide(56, 59));

function multiply(a, b) {
    return a * b;
}
console.log('2*6 : ', multiply(56, 59));

var minus = function (a, b) {
    return a - b;
}
console.log('2-6 : ', minus(56, 59));

function operation(op, x, y) {
    return op(x, y);
}
console.log('add : ', operation(add, 56, 59));

var ops = [add, divide, minus, multiply];
var randomElement = ops[Math.floor(Math.random()*ops.length)];
console.log('random : ', operation(randomElement, 56,59 ));

var data= [3,4];
data.operation = function (op) {
    return op (this[0], this[1])
};
console.log(data.operation(multiply));


