
//  --- We are using ES module to export Functions now -----

/*
   ----------         Key Learnings -------------

1. We use "export" to export any function.
2. We don't use parentheses after the function name while exporting it.
3. Here is how we export a single function: 
export const functionName = ...;

4. Here is how we export multiple functions at a time:
   export const function1 = ...;
   export const function2 = ...;
   export const function3 = ...;

5.While importing these in the entry point, we use the exact function name without parentheses to import them.

If the file in which we are importing these ES module exported functions is in the same directory, 
we use ./ and the file name as the path, like this: import { functionName } from './file.js'; a) 

a)Single function import:
import { functionName } from './file.js';

b)
import { function1, function2, function3 } from './file.js';

*/







// normally we get data fom api but now we are creating a basic one

const posts=[
    {id:1, title:"Post one"},
    {id:2, title:"Post two"}
];

// exporting single function

// way 1 to export getting valueof func in a const
// export const getPost = () => posts;

// way 2 to export/
const getPost = () => posts;

// export {getPost};

export const postlen = () => posts.length;


// way 3 to export functions as defualt

export default getPost;