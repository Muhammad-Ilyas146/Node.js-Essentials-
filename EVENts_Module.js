
// -------------- Events Module --------

import { EventEmitter } from "node:events";

// creating emitter instance

const myEmitter=  new EventEmitter();

// func1 

function greetingHandler(name) {
    console.log(` Hello ${name} from Events Module`);
    
}

function goodbyeHandler(name) {
    console.log(` Good bye  ${name} from Events Module`);
    
}


// registering event listeners 

myEmitter.on('greet',greetingHandler);
myEmitter.on('bye',goodbyeHandler);


// Emitting Events

myEmitter.emit('greet','ilyas');
myEmitter.emit('bye','ilyas');


// Error Handling  registering error
myEmitter.on('error',(err)=>{
    console.log('error accoured something ',err);
});

// emitting error 
myEmitter.emit('error', new Error(' Error hai bhai'));