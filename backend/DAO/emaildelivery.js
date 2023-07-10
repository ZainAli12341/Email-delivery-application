const colors = require ('colors');
const nodemailer = require('nodemailer');
const{PrismaClient}=require("@prisma/client");
const {logsForDelivery} = new PrismaClient
class EMAILDELIVERYDAO {
     async sendEmail(from, to, subject, body) {
       const transporter = nodemailer.createTransport({
         service: 'Gmail',
         auth: {
           user: "zainali.socialb@gmail.com",
           pass: 'babzdxxvmrsxvfzy',
         },
       });
   
       const mailOptions = {
         from,
         to,
         subject,
         text: body,
       };
   
       transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
           console.log(error);
         } else {
        var data = 'Email sent: ' + info.response ;
        console.log(data)
         }
       });
       

       const emaildelivery = await logsForDelivery.create({
         data: {
           to,
           subject,
           body,
           from,
         },
         select: {
           from: true,
           to: true,
           subject: true,
           body: true,
         },
       });
       return emaildelivery;
     }
   }
   
module.exports = new EMAILDELIVERYDAO();