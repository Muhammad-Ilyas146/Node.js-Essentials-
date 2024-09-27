// Fs/promises  module complete tutorial
import fs from 'node:fs/promises';

// reading the text file
fs.readFile('./file.txt', 'utf-8')
    .then(data => console.log(`${data} --> Promise Resolved Read Success! \n`))
    .catch(error => console.log(error));

// writing to a text file
fs.writeFile('./file2.txt', '\nWritten using fs/promises module \n')
    .then(() => console.log('\nPromise Resolved write Success!'))
    .catch(error => console.log(error));

//  appending to a text file
fs.appendFile('./file2.txt', '\nAppended using using fs/promises module\n')
    .then(() => console.log('\nAsync file append success!'))
    .catch(error => console.log(error));

//  deleting a file
fs.unlink('./file2.txt')
    .then(() => console.log('\nPromise Resolved delete Success!!'))
    .catch(error => console.log(error));

// renaming a file
fs.rename('./file.txt', './renamedFile.txt')
    .then(() => console.log('\nPromise Resolved  rename Success!'))
    .catch(error => console.log(error));

//  reading a directory
fs.readdir('./')
    .then(files => console.log(`\n Promise Resolved Success! Directory contents :\n${files.join('\n')}`))
    .catch(error => console.log(error));
