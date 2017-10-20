const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {
    fs.readdir(directory, (error, files) => {
        if(error)
            return callback(error);
        const filteredFiles = files.map((fileName) => path.basename(fileName))
            .filter(fileName => fileName.split('.')[1] === extension);  
        return callback(null, filteredFiles);
    });
}
