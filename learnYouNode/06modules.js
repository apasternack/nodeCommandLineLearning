const myModule = require('./06module');
const directory = process.argv[2];
const fileExtension = process.argv[3];

myModule(directory, fileExtension, (error, data) => {
    if(error) console.error(error);
    data.map(file => console.log(file));
});

// myModule(directory, fileExtension, callback);

// function callback(error, data) {
//     if(error) throw error;
//     data.map(file => console.log(file));
// }

