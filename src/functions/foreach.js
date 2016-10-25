var users = require('../data').users;

users.forEach(function (user) {
    console.log('user name :', user.name);
});

//no result sent by clog()
users.forEach(user => console.log('user name :', user.name));

users.forEach(user => user.name ? console.log('user name :', user.name) : 'NoName');


var admins = [];
var noAdmins = [];
//users.forEach(user => user.admin ? admins.push(user) : noAdmins.push(user));

function admin(user) {
    if (user.admin === true) {
        admins.push(user.name);
    } else {
        noAdmins.push(user.name);
    }
};
users.forEach(admin);
console.log('admins : ', admins);
console.log('noAdmins :', noAdmins);
