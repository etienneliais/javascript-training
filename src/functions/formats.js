function add(a, b) {
    return a + b;
}
console.log('2+3 :', add(2, 3));

var mult = function (a, b) {
    return a * b;
}
console.log('4*3 :', mult(4, 3));

var divide = (a, b) => a / b;
console.log('div :', divide(6, 3));