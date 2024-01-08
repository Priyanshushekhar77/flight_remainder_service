const cron = require('node-cron');
const emailService = require('../services/email_service');



const setUpDone = () => {
    cron.schedule('*/2 * * * *',async () => {
        const response = await emailService.pendingEmails();
        response.forEach((email) => {
            emailService.mailSender("skillindia778@gmail.com",
            email.recepientEmail,
            email.subject,
            email.content);
        })
        console.log(response)
    });
}

module.exports=setUpDone;
