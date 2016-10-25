var users = require('../data').users;
var topics = require('../data').topics;

// Topic titles where Sheldon wrote at least one comment
var getTitle = topics.filter(function (topic) {
    return topic.comments.some(function (comment) {
        return comment.user.name === 'Sheldon'
    })
}).map(function (topic) {
    return topic.title;
});
console.log('filter topic', getTitle);

var fatGetTitle = topics.filter(topic => topic.comments.some(comment => comment.user.name === 'Sheldon')).map(topic => topic.title);
console.log('megaFat ', fatGetTitle);

//var titles = getTitle.map(function (topic) {
//    return topic.title;
//});
//console.log('titles topics sheldon', titles);

var getId = [];
topics.forEach(function (topic) {
    var group = topic.comments.filter(function (comment) {
        return comment.user.name === 'Penny'
    });
    group.forEach(function (comment) {

        getId.push(comment.id);
    })
});

console.log('getId ', getId);


var contents = []

topics.forEach(function (topic) {
   var group = topic.comments.filter(comment => !comment.user.admin && comment.tags && comment.tags.includes('violence'));
       group.forEach(comment => contents.push(comment.content));
});
console.log('contents', contents);


