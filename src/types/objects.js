var x = {};
console.log('x : ', x, typeof  x);

var john = {
    name: 'John',
    address: 'London',
    friend: {
        name: 'Jim',
        age: 12
    }
};
console.log('John habite à : ', john.address);
console.log('Jim s ages ', john.friend.age);

var funkyCop = {
    name: 'Robocop'
};
var ennemy = {
    name: 'Dick'
};
funkyCop.foe = ennemy;
console.log('funck : ', funkyCop);
ennemy.foe = funkyCop;
funkyCop.name = "Venere Robocop";

console.log('ennemy : ', ennemy);
ennemy.dead = true;
console.log('ennemy : ', ennemy);
delete funkyCop.foe;

console.log('funky now : ', funkyCop);