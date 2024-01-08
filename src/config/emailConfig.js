const nodemailer = require("nodemailer");

const {MAIL_ID,MAIL_PASW} = require("./serverConfig");

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: MAIL_ID,
    pass: MAIL_PASW,
  }
});

module.exports = transporter;