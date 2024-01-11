const dotenv=  require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const{PORT} = require('./config/serverConfig')
const express = require('express');
const {createChannel,subscribeMessage} = require('./utils/messageQueue');
const {REMAINDER_BINDING_KEY} = require('./config/serverConfig');
const EmailService = require('./services/email_service');


const Apiroutes = require('./routes/index');


 const tasks = require('./utils/job');


const startServer = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',Apiroutes);

    const channel = await createChannel();
    subscribeMessage(channel,EmailService.subscribeEvents,REMAINDER_BINDING_KEY);

    app.listen(PORT,async() => {
        console.log(`server start at port:${PORT}`);
        //fetching pending emails
        // tasks();
        
       
    });
}

startServer();