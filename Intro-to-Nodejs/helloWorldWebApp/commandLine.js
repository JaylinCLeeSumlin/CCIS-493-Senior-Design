// store arguments from command line in variable args
const args = process.argv;
console.log(args);

/* args[0] = node argument
   args[1] = file name
   args[2] = name
*/
const name = args[2];
console.log("Hello,", name);

// set input from readable stream (process.stdin)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
// shows first parameter and waits for user input
readline.question(`What is your name? `, name => {
    console.log(`Hi ${name}!`);
    readline.close();
})