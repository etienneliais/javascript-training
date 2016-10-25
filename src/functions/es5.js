var topics = require('../data').topics;
console.log('topics', topics);
var reuslt = topics.filter(function (topic) {
    ///return true if we keep this topic
    return (topic.user.name === "Leonard");
});
console.log('filter topic', reuslt);

fatReuslt = topics.filter(topic => topic.user.name === 'Leonard');
console.log('fat filter ',fatReuslt);

var titles = topics.map(function (topic) {
    return topic.title;
});
console.log('titles', titles);

fatTitles = topics.map(topic => topic.title);
console.log('fatTitles ', fatTitles);

console.log('##################');

var hasViolence = topics.some(function (topic) {

        return topic.tags.includes('violence')

 });
console.log('violence ?:', hasViolence);