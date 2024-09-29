// process object 

console.log(process)
// argv()
console.log(process.arv);


// process env all the stuff from system
console.log(process.env);

console.log(process.env.PUBLIC); // TO ACCESS ANY ATTRIBUTE FROM ENV WE USE .DOT NOTATION

// PID process id 
console.log(process.pid);

// current working id 
console.log(process.cwd());

// title of the node js process

console.log(process.title);


// memory usage 
console.log(process.memoryUsage());


// to check the process uptime (thi sis basically the time when command gets executed)
console.log(process.uptime());


// exit()
process.on('exit', (code)=>{
    console.log(` About to exit the wit the code : ${code}`);
})

process.exit(0);