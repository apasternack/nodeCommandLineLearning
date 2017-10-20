var fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);

const numberOfNewLineCharacters = buf.toString().split('\n').length - 1;
console.log(numberOfNewLineCharacters);
 