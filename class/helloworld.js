/* console.log("Hi CIS493");

var i = 0;
i = 0;
sum = 0;
while (i < 10 ) {
    sum = i*i;
    i++;
    console.log("sum: " + sum + ", i: " + i)
}

for (i = 0; i < 10; i++){
}

if (i < 3) {
    i = foo(i);
} else if (i > 3 && i < 10) {
    // do something
} else {
    // do something else
}

console.log(typeof(i))

s = "Hello World"
var a = null
var y

("")? true : false

undefined = null = empty string
*/

var sum = function (x, y) {
    return x + y
}
console.log(typeof(sum))
console.log(typeof sum)
console.log(sum(10, 4))

function driver(routine) {
    console.log("Called with, " + routine.toString())
    var retVal = routine(10, 5)
    console.log("retVal:" + retVal)
}
driver(sum)

const EventEmitter = require('node:events')
const myEmitter = new EventEmitter

myEmitter.on('clicked', ()=> {
    document.getElementById("output").innerHTML = `<h3> ${x}:Event Clicked </h3>`
    console.log(`<h3> ${x}:Event Clicked </h3>`)
})
myEmitter.emit()