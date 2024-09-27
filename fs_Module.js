// Fs module complete tutorial

import fs from 'node:fs';

// Synchronously reading the text file
const syncFile1 = fs.readFileSync("./file.txt", 'utf-8'); // path and encoding(to make it human readble other wise it will return buffer)
console.log(`${syncFile1} --> using readFileSync method\n`);

// Asynchronously reading the text file
fs.readFile('./file.txt', 'utf-8', (error, data) => {       // path and encoding arrow function with error and file content
    if (error) {
        console.log(error);
    } else {
        console.log(`${data} --> using readFile method asynchronously\n`);
    }
});

// Synchronously writing to a text file (if file not created it will create it too)
fs.writeFileSync('./file1.txt', '\nWritten using synchronous file write command\n');
console.log('\nSync file written success!');

// Asynchronously writing to a text file (if file not created it will create it too)
fs.writeFile('./file2.txt', '\nWritten using asynchronous file write command\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('\nAsync file written success!');
    }
});

// Synchronously appending to a text file
fs.appendFileSync('./file1.txt', '\nAppended using synchronous file append command\n');
console.log('\nSync file append success!');

// Asynchronously appending to a text file
fs.appendFile('./file2.txt', '\nAppended using asynchronous file append command\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('\nAsync file append success!');
    }
});

// Synchronously deleting a file
fs.unlinkSync('./file1.txt');
console.log('\nSync file delete success!');

// Asynchronously deleting a file
fs.unlink('./file2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('\nAsync file delete success!');
    }
});

// Synchronously renaming a file
fs.renameSync('./file.txt', './renamedFile.txt');
console.log('\nSync file rename success!');

// Asynchronously renaming a file
fs.rename('./renamedFile.txt', './file.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('\nAsync file rename success!');
    }
});

// Synchronously reading a directory
const files = fs.readdirSync('./');
console.log(`\nDirectory contents:\n${files.join('\n')}`);

// Asynchronously reading a directory
fs.readdir('./', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`\nDirectory contents asynchronously:\n${files.join('\n')}`);
    }
});
