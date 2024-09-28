
// --------- here we will be learning the path module -------

import { reverse } from 'dns';
import path, { join } from 'path';
import url from 'url';


// a filepath variable , no metter it exists or not being created 

const filePath='./dir1/dir2/test.txt';

// basename() it will return the last portion of path
console.log(path.basename(filePath))


// dirname() will return us the directory name 
console.log(path.dirname(filePath))

// extname() will return us the extension name 
console.log(path.extname(filePath))

// we have the parse() that will reutn us the object with all the above info 
console.log(path.parse(filePath))


// to get the path of the current file name current dir name in common js we have __filename and __dirname
// but for es module we will use the url module to create them manually

const __filename=url.fileURLToPath(import.meta.url); // current file path 
const __dirname=path.dirname(__filename); // current dir path

console.log(__filename,__dirname)


// join() resolve does the same  bascally it inserts the right delimeter in file path based on the os (lik / in mac and \ in windows)
const filePath2 = path.join(__dirname,'dir1','dir2','test.txt');
const filePath3 = path.resolve(__dirname,'dir1','dir2','test.txt');

console.log(filePath2);
console.log(filePath3);