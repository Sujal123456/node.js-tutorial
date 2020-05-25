//Create and trigger custom events
const events = require("events");
const event = new events.EventEmitter();

event.on('click', (n1) => console.log(n1));
event.emit('click', "Tutorials Website Node js series");













$("button").dn('click', function() {
    console.log("First event created");
});