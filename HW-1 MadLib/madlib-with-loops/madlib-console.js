var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

var favStartup = [
];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));
var message = document.createTextNode ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

function newStartup () {
	document.getElementById('xForY').appendChild(message);
	favStartup.push(message);
}; 


function favoriteStartup() {
	favStartup.push(message);
};

function printStartup() {
	document.getElementById('favorites').appendChild(message); 
};