// ------------- Here we will be learning os module  --------------

import os from "os";

// userInfo()
console.log(os.userInfo());

// for only user name 
console.log(os.userInfo().username);

// totalmem()
console.log(os.totalmem());

// freemem()
console.log(os.freemem());

//cpus  we will have the object for every core in our system
console.log(os.cpus());