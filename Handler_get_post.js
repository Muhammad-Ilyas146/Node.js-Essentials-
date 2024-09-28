
// ---- ---------- here starts the cleanup section (middlewares & Handlers )------------


import {createServer} from 'http';

const PORT=process.env.PORT; //fetching port from the env file 

const users =[
    {id:1, name:'one'},
    {id:2, name:'two'},
    {id:3, name:'three'}
    

]

// logger middleware 

const logger =(req,res,next)=>{
    console.log(`---  We are Using middleware And Handlers for CleanUp---- /n`);
    console.log(`Reuest Url:  ${req.url}  Request Method : ${req.method}`);
    next(); //this middle ware done move to next one
};

//JSON Middle-ware 

const jsonMiddleware =(req,res,next)=>{
    res.setHeader('Content-Type','application/json');
    next();
};

// Route handler for GET /api/users
const getUserhHandler=(req,res)=>{
    console.log('--- Getting data using getUser request handler---- ');
    res.write(JSON.stringify(users));
    res.end('Sucess! Data fetched from Api');
};

// Route handler for GET /api/users/id
const getUserByIdHandler=(req,res)=>{
    console.log('--- Getting data using getUserByID request handler---- ');
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
};

// Route handler for POST /api/users

/*1.we will first call request on it will return us an empty string in this case because body='',
2. after that the call back functions runs which gives us chunk that we will input in the body section 
3. the first request on will return us a body json object (already body +chunk we wrriten/inserted)
4. in request on function we will parse body back into js object as new user 
5. we will push it at the end of our users object 
6. then finally we will convert js object to JSON as response
 */

const postUserHandler = (req, res) => {
    console.log('--- We are Posting the data user Postuser method request handler----');
    let body = '';
    // Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        try {
            const newUser = JSON.parse(body);
            users.push(newUser);
            res.statusCode = 201; // something added successfully
            res.write(JSON.stringify(newUser));
            res.end();
        } catch (error) {
            res.statusCode = 400; // Bad Request
            res.write('Invalid JSON format');
            res.end();
        }
    });
};

// Not Found Handler

const notFoundHandler=(req,res)=>{
    console.log('--- Getting Response using Notfound request handler---- ');
    res.statusCode=404;
    res.write(JSON.stringify({message:'route not Found'}));
    res.end('Sucess!');
};

const server =createServer((req,res)=>{
    logger (req,res,()=>{
    jsonMiddleware(req,res,()=>{
        // Fetching the Whole data from Api in JSON format 
        if (req.url === '/api/users' && req.method === 'GET')  {
           getUserhHandler(req,res);
        } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method ==="GET"){
            getUserByIdHandler(req,res);
        
        }  else if (req.url === '/api/users' && req.method === 'POST'){
            postUserHandler(req,res);

        }
        // if wrong url used  
        else{ 
            notFoundHandler(req,res);
        }
    })
         
    
   
    });
   

});


// ---- listening to the created server ----

server.listen(PORT, ()=>{
    console.log(`Server Running on Port --> ${PORT}`)
});



