/* callback function syntax
function function_name(argument, function (callback_argument) {
    callback_body;
})
*/

// waits 1000ms before execution without blocking the thread
setTimeout(function () {
    console.log("This prints after 1000 ms");
}, 1000);
console.log("Hello World");

// Blocking exmaple - synchonous, blocks the thread
var fs = require("fs");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
i = 1;
while (i <= 5) {
    console.log("The number is " + i);
    i++;
}

// Non-Blocking example - runs subsequent lopp while readFile() processes
var fs = require("fs");
fs.readFile("input.txt", function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
i = 1;
while (i <= 5) {
    console.log("The number is " + i)
    i++;
}

/* arrow function syntax
function function_name(argument, (callback_argument) => {
    callback body
})
*/

var fs = require("fs");
fs.readFile("input.txt", (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});
i = 1;
while (i <= 5){
    console.log("The number is " + i);
    i++;
}