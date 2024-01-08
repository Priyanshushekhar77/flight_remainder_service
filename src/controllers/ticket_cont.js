const ticketService  = require('../services/email_service');

const create = async(req,res) => {
    try{
       const response = await ticketService.createNotification(req.body);
       return res.status(201).json({
        success:true,
        data:response,
        err:{},
        message:'suceesfully created  a email remainder service'
       })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:'unable to create a email remainder service'
           });


    }
}

module.exports = {
    create,
}