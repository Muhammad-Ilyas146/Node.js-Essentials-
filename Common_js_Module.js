// ------ Common js Module -----

/*
   ----------         Key Learnings -------------

1.We use module.exports to export any function
2.we don't use paranthesis after function name while exporting it 
3. here is how we export single function  module.exports = Function-name;
4. here is how we export multiple function at a time  module.exports = {Function1,
                                                                        Function2,
                                                                        Function3}

5. while importing these in the entry point we use exact_function_name_without_paranthesis to import them
 
if the file in which we are importing these common js exported function we use ./ and file name as path  like this require('./file.js')
a) single function import ---> const funcName=require('filepath.js'); // 
b) multiple  function import ---> const {func1,func2,func3 }= require('filepath.js') ;



 */



// functions that we are going to use  for common js Understanding

function genRand() {
    return Math.floor(Math.random()*10);
    
}

function hello(name) {
    return `${name} hello and welcome 🤝`
    
}


//  ------Following is  the commmon js module to Export single and multiple functions------


// I am using common js (native js module system) to expot this function
// exporting single functions
// module.exports =genRand; // we don't use paranthesis while exporting functions


//Exporting Multiple Functions
module.exports ={
    genRand,
    hello
}





//  ------Following was the commmon js module to import single and multiple functions------


//importing function using common js module  yahan hm function ka nam use krty han or sath me require

// importing single function
// const genRand=require('./utils');

// //using the imported function 
// console.log('Random Number : ',genRand());


// // importing Multiple functions
// const {genRand,hello}=require("./utils")

// console.log(`Random Number : ${genRand()}`);
// console.log(`Mr.${hello('ilyas')}`);



// ------ common js imports end here ----------

