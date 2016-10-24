var string = "Hello World";
string += "!";
console.log('string : ', string);

var index = string.indexOf('lo');
console.log('index of lo :', index);

function contains(haystack, needle) {
    /**
     * return true if haystack contains needle
     * @param haystack
     * @param needle
     */
    return haystack.indexOf(needle) >= 0;

}
var isTrue = contains('Jack', 'ack');
var isAlsoTrue = contains('Jim', 'Jim');
var isFalse = contains('Mac Donalds', 'ack');

console.log(isTrue, isAlsoTrue, isFalse);
console.log('Jack is back'.includes('ack'));
/**
 * Expression Reguliere (permet de verifier la verasité de qql dans qqlchose)
 */
 var hello = "Hello World";
var found = hello.search(/orld/);
var alsoFound = hello.search(/world/i);
console.log('found : ' , found, ' also : ', alsoFound);

 // /i for
var x = /(.)*(world)/i.test('Hello World here');
console.log('x : ', x);

// is it conform
var strangelyTrue = /(.)*(world)/i.test('Hello World here');
console.log('strangelyTrue : ', strangelyTrue);

// $ defini l'endroit (ici world doit etre le dernier mot)
// must finish by world
var moreStrict = /(.)*(world)$/i.test('Hello World here');
console.log('moreStrict : ', moreStrict);


var hitthis = 'funny    not funny';
console.log('you are '+ hitthis.substring(-9, 9));// exclusion des 9 dernier char
console.log('you are '+ hitthis.substr(-9, 9));// depart des 9 derniers char
