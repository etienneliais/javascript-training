function Dinosaurus(name) {

    this.size = 12;
    this.name = name;
}

Dinosaurus.prototype.age = -6500000;
Dinosaurus.prototype.size = 20;


const denver = new Dinosaurus('Denver');
// new give access to a prototype

const petitPied = new Dinosaurus('Petit Pied');
console.log('denver size : ', denver.size);

// Denver object is built from prototype
// But denver has no prototype :(
// console.log('denver prototype size : ', denver.prototype.size);

denver.size = 150;
console.log('news denver size : ', denver.size);