const sender = require('../config/emailConfig');

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

module.exports = {
    mailSender,

}