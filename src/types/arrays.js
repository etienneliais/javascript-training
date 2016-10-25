var x = [0, 3, 5, 6, 10, 12, -12, 45, 34];
x.push(50);
console.log('add ',x);

// remove first element
var firstElement = x.shift();
console.log('first : ', x;

// remove last element
var lastElement = x.pop();
console.log('del last  ',x);

//insert at the begining
x.unshift('i am the first');
console.log('x after unshift', x);

//modify array
x[2] = -42;

//deviation
x[-2] = "whaht ????";
console.log('found :', x[-2]);

console.log('all table', x);

/* let's start over and serious stuff */
x = [0, 3, 5, 6, 10, 12, -12, 45, 34];
x.sort();
console.log('x sorted : ', x);

x.sort(function (a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;

});
console.log('x correctly sorted : ', x);

var sortFunction = (a, b) =>a < b ? -1 : 1;
x.sort(sortFunction);
console.log('ES 2015 sorted :', x);

var filtered = x.filter(function (number) {
    return number >= 0;
});
console.log('filtred x : ', filtered);

var fatfiltered = (number) => number >= 0;
filtered = x.filter(fatfiltered);
console.log('filtred x : ', filtered);
direct = x.filter(number => number >= 0).filter(n=>n < 10);
console.log('filtred x : ', direct);

