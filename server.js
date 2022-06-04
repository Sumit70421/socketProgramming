// when fetch ajax we make a connection to the server
//so for each new request a new connection is established
// in order to avoid that we have websockets which create a single connection
//and it persist until its closed
//if we make 10 request connction will happen only once
//this is useful when we have to make lot of requests to the server
//the extra time of setting up the connection and closing down is saved

const io = require('socket.io')(3000,{
    cors:{
        origin: '*'
    }
})

io.on('connection',(socketId)=>{
    console.log("Someone connected with userId ",socketId);
})
//each time new user comes it will give a socket instance to the new connectino
//Adds the listener function to the end of the listeners array for the 
//event named eventName. No checks are made to see if the listener has
// already been added. Multiple calls passing the same combination of eventNameand
// listener will result in the listener being added, and called, 
//multiple times.

//Even after the connection there will be something blocking the connection
//That something is CORS policy 
//To get rid of that we specify where our client will come from in
// in the importing section
