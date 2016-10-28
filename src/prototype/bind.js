function Dinosaurus(name) {

    this.size = 12;
    this.name = name;
}

Dinosaurus.prototype.age = -6500000;

const denver = new Dinosaurus('Denver');

function Carnivore() {
}
Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' + obj.name);
};

const tRex = new Carnivore();
tRex.name = 'T Rex';

//modification :
const eating = tRex.eat;
eating(tRex);

boundToDenver = eating.bind(denver);
eating(tRex);
console.log('bound eating to denver ');
boundToDenver(tRex);

eating.bind(denver)(tRex)