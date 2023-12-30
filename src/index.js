const express = require("express");

const { PORT } = require("./config/serverConfig");

const app = express();

const prepareAndStartServer = ()=> {

    app.listen(3001,()=>{
        console.log("Started the server on port :", 3001);
        
        
    })
};

prepareAndStartServer();