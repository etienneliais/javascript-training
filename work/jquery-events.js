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

$('button').on('click', displaySearchValue) ;
