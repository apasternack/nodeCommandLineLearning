const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    
    response.setEncoding('utf8');

    response.on('data', data => console.log(data));

    response.on('error', console.error)

    // response.on('end', (x) => console.log('ended!'));


}).on('error', console.error);