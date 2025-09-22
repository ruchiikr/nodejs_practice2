const EventEmitter = require("events");

const eventEmitter = new EventEmitter();


// eventEmitter.on("greet", () => {
//   console.log("Hello and welcome to events in node js");
// });

// Emit the event
// eventEmitter.emit("greet");

eventEmitter.on("greet", (username) => {
  console.log(`Hello ${username} and welcome to events in node js`);
});
eventEmitter.on("greet", (username) => {
  console.log(`Hey ${username} and node js is here`);
});

eventEmitter.once('pushnotify', () => {
    console.log("This event will run only once")
});

// Emit the event
// eventEmitter.emit("greet", "ruchi");
// eventEmitter.emit("greet", "coffee");
// eventEmitter.emit("pushnotify");
// eventEmitter.emit("pushnotify");
// eventEmitter.emit("greet", "code");

const myListener = () => console.log("I am a test listener");
eventEmitter.on("test", myListener);
eventEmitter.emit("test");
eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);
eventEmitter.emit("test");

console.log(eventEmitter.listeners("test"));