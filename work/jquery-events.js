/*  contents.forEach(function (content) {
 const node = document.createTextNode(content);
 document.querySelector('body').appendChild(node);
 })*/
function displaySearch(term) {
    clear('section.search');
    var contents = search(term);
    contents.forEach(function (content) {
        const pElement = $('<p>').text(content);
        $('section.search').append(pElement);

    });

}
function displaySearchValue() {

    displaySearch($('input.search').val());

}

function clear(location) {
    $(location).empty();
}

$('button').on('click', displaySearchValue);



function displayUsers(users) {
    // clear('section.users');
    const block = $('<ul>');
    users.forEach(function (user) {
        const pUsers = $('<li>').text(user.name);
        block.append(pUsers);
    });
    $('section.users').append(block);
}
function displayUsersValue() {

    displayUser($('input.users').val());

}
