// ------------HTTP Module and Create server ----------

/*  -------------  Key Learnings -------
1. Creating a server using http.createServer
2. Handling requests and accessing req.url and req.method
3. Setting headers and status codes using res.setHeader, res.statusCode, and res.writeHead
4. Sending responses with res.write and res.end
5. Implementing basic routing based on req.url and req.method


*/

import http from 'http';

const PORT = process.env.PORT;

// ------ creating a server -------

const server = http.createServer((req, res) => {

    // ------ some requests----

    // console.log(req.url);
    // console.log(req.method);

    // ----- setting headers/statuscode / ending response  ----

    // res.setHeader('Content-Type', 'text/html') // for html text
    // res.setHeader('Content-Type', 'text/plain') // for plain text

    // we can use the function to set the status code 
    // for successful retrieval there is 200 status code
    // res.statusCode = 404; // page not found

    // we can use the write head method (status code, object) 
    // following lines will set the status code to 500 and also the content type to json

    // res.writeHead(500, { 'Content-Type': "application/json" });
    // res.end(JSON.stringify({ message: "Server Error" }))

    // res.write('server response'); we can print the response using this also the end 
    // res.end(`<h1>Hello From Server using Nodemon</h1>`);

    // ------here we are doing routing ------
    try {
        if (req.method === 'GET') {

            if (req.url === '/') {
                res.setHeader('Content-Type', 'text/html')
                res.end(`<h1>Home page using routing</h1>`);
            } else if (req.url === '/about') {
                res.setHeader('Content-Type', 'text/html')
                res.end(`<h1>about page using routing</h1>`);
            } else {
                res.writeHead(404, 'Content-Type', 'text/html') //404 page not found
                res.end(`<h1>Page Not Found</h1>`);
            }

        } else {
            throw new Error("Method not Allowed");

        }

    } catch (error) {
        res.writeHead(500, 'Content-Type', 'text/html') //server error 
        res.end(`<h1>Server Error</h1>`);

    }

});

// ---- accessing the created server ----

server.listen(PORT, () => {
    console.log(`Server Running on Port --> ${PORT}`)
});
