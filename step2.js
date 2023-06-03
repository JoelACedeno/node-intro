/*
Copy over your step1.js code to step2.js
Add a new function, webCat. This should take a URL and, using axios, should read the content of that URL and print it to the console.
Modify the code that invoked cat so that, based on the command-line args, it decides whether the argument is a file path or a URL and calls either cat or webCat, respectively.
*/

const fs = require('fs');
const process = require('process');
const axios = require('axios')

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

async function webCat(url){
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch(err) {
        console.log(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2]

if (path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
}

