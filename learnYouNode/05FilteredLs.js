const fs = require('fs');
const path = require('path');

const fileExtension = process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
    if(err) throw err;
    list.map((fileName) => path.basename(fileName))
        .filter(fileName => fileName.split('.')[1] === fileExtension)
        .map(fileName => console.log(fileName));
})
