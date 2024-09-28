import url from 'url';

const urlString='https://www.google.com/search?q=hello+World';

// Url object
const urlObj= new URL(urlString);

// we can acces any of them
console.log(urlObj);

//format() takes object and convert back into the string
console.log(url.format(urlObj))

// import.meta.url --> it provide us the file url 
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

// we can get the search params from object by using obj.search but it will not provide us a key value pair so for that we use the following function

const params = new URLSearchParams(urlObj.search);
console.log(params);

console.log(params.get('q'));  // to access any key of the param object we have to use .get method
params.append('limit','five'); //to add a new key value pair in params we do this 
params.delete('limit') // we can also remove a key or element like this 
console.log(params);