$.get('http://localhost:3000/api/users/', function (users) {
    console.log('reveive user ', users);
    /*console.log(users.sort(function (user1, user2) {
     return users1.name < user2.name ? -1 : 1;
     }));*/
    users.sort((user1, user2) => user1.name < user2.name ? -1 : 1);

    displayUsers(users);
});

$.get('/api/users/admins/', function (admins) {
    console.log('receive admins', admins.map(admin => admin.name));
});
/*
 $.get('http://localhost:3000/api/users/', function (users) {
 console.log('reveive users ', users);
 const pUsers = $('<p>').text(users.map(users => users.name));
 $('section.users').append(pUsers);
 console.log('receive users name ', users.map(users => users.name));
 });
 }*/