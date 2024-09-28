// ---------------- now we are using a middle ware ---------

import {createServer} from 'http';

const PORT=process.env.PORT; //fetching port from the env file 

const users =[
    {id:1, name:'one'},
    {id:2, name:'two'},
    {id:3, name:'three'}
    

]
const logger =(req,res,next)=>{
    console.log(`---  We are Using middleware---- /n`);
    console.log(`Reuest Url:  ${req.url}  Request Method : ${req.method}`);
    next(); //this middle ware done move to next one
}

const server =createServer((req,res)=>{
    logger (req,res,()=>{
         // Fetching the Whole data from Api in JSON format 
    if (req.url === '/api/users' && req.method === 'GET')  {
        
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end('Sucess! Data fetched from Api');
    
    // Fetching the specific user id data from Api in JSON format  using regular Expressions
    // in regular expressions we use the double / slashes to enclose the whole url where we parse each part in two back slashes except the last one
    // it is wrapped in double / slashes where each sub is enclode in double \

    } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method ==="GET"){
        const id =req.url.split('/')[3] // we re getting the user id
        console.log(id);
        const user =users.find((user)=> user.id===parseInt(id));

        // if user found
        
        if (user) {
            console.log(user);
            res.setHeader('Content-Type','application/json');
            res.write(JSON.stringify(user));
            res.end('Sucess User found!');
            
         // if user not found
        } else {
            res.setHeader('Content-Type','application/json');
            res.statusCode=404;
            res.write(JSON.stringify({message:'route not Found'}));
            res.end('Failure User not found !');
            
        }
        
    } 
    // if wrong url used  
    else {
        res.setHeader('Content-Type','application/json');
        res.statusCode=404;
        res.write(JSON.stringify({message:'route not Found'}));
        res.end('Sucess!');
    }
    });
   

});


// ---- listening to the created server ----

server.listen(PORT, ()=>{
    console.log(`Server Running on Port --> ${PORT}`)
});




// ---------------- Basic Middle ware ends here ------