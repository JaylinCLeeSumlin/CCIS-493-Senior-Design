/*
// import events module
var events = require("events");
// create eventEmitter object
var eventEmitter = new events.EventEmitter();
// bind event and event handler
eventEmitter.on("eventName", eventHandler);
// fire event
eventEmitter.emit("eventName")
*/

// import events module
var events = require("events");

// create eventEmitter object
var eventEmitter = new events.EventEmitter();

// create event handler
var connectHandler = function connected() {
    console.log("Connection successful");
}

// bund connection event with handler
eventEmitter.on("connection", connectHandler);

// bind data_recieved event with anonymous function
eventEmitter.on("data_recieved", function () {
    console.log("data recieved successfully");
})

// finre connection event
eventEmitter.emit("connection");

// fire data_recieved event
eventEmitter.emit("data_recieved");
console.log("program ended")