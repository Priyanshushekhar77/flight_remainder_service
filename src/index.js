const dotenv=  require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const{PORT} = require('./config/serverConfig')
const express = require('express');

const Apiroutes = require('./routes/index');
 const {mailSender} = require('./services/email_service');

 const tasks = require('./utils/job');


const startServer = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',Apiroutes);

    app.listen(PORT,async() => {
        console.log(`server start at port:${PORT}`);
        //fetching pending emails
        tasks();
       
    });
}

startServer();