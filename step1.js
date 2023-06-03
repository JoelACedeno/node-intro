/*  
In step1.js, write a function, cat.
It should take one argument, path, and it should read the file with that path, and print the contents of that file.
Then, write some code that calls that function, allowing you to specify the path argument via the command line. 
*/

const fs = require('fs');
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data){
        if(err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1)
        }
        else {
            console.log(data);
        }
    })
}

ccat(process.argv[2]);

console.log(process.argv[0], 'first process')
console.log(process.argv[1], 'second process')
console.log(process.argv[2], 'third process')