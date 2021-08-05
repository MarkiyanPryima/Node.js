const fs = require('fs');
const path = require('path');

function file () {
    const file1 = path.join(__dirname, 'file1.txt');
    const file2 = path.join(__dirname, 'file2.txt');

    fs.readFile(file1, 'utf8', (error, data) => {
        if (error) {
            return console.error(error);
        }
        console.log(data);
    })

    fs.readFile(file2, 'utf8', (error, data) => {
        if (error) {
            return console.error(error);
        }
        console.log(data);
    })
}

module.exports = file;
