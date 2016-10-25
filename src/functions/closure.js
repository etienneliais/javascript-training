var denver = {
    name: 'Denver',
    age: 12
};

var petitPied = {
    name: 'Petit Pied',
    age: -65000000
};

function pure(a, b) {
    // a.age = 15; NOT PURE
    return a.age + b.age; //PURE : for some input, will always return a value
};

console.log('pure :', pure(denver, petitPied));

//care about hard memory use ! (fuite memoire care une fonction peu appelé une fonction qui appelle un objet qui appel une fonction...)
function unpure() {
    //console.Log ou screen () : will modify a stream
    // capture the external petitPied object
    // depends on external context, and not only params
    console.log('kick '+petitPied.name);
};
unpure();

