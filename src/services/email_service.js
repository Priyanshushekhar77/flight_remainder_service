const sender = require('../config/emailConfig');
const ticketRepository = require('../repository/ticket_repo');
const fetch = new ticketRepository();
const mailSender = async(mailFrom, mailTo, mailSubject, mailBody)=>{
    try{
        const response = await sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody

    });

    console.log(error);

}catch(error){
        console.log(error);
    }
}

const pendingEmails = async(timestamp) => {
    try{
         
         const response = await fetch.getAllTicket({status:"PENDING"});
         return response;
    }
    catch(error){
        console.log(error)

    }
}
const updateTicket = async(ticketId,data) => {
    try{
        const response = await fetch.updateTicket(ticketId,data);
        return response;

    }
    catch(error){
        console.log(error)

    }
}

const createNotification = async(data) => {
    try{
       
        const response = await fetch.createTicket(data);
        return response;

    }
    catch(error){
        console.log(error)

    }
}

const subscribeEvents = async(payload) => {
    let service = payload.service;
    let data = payload.data;
    switch(service){
        case 'BOOK_TICKET':
           await createNotification(data);
           break;
        case 'SEND_MAIL':
            await mailSender(data);
            break;
        default:
            console.log('No any valid events occured');
            break;
    }
}
 

module.exports = {
    mailSender,
    pendingEmails,
    createNotification,
    updateTicket,
    subscribeEvents,

}