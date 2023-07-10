const nodemailer = require('nodemailer')

const emaildeliveryServices = require('../Services/emailDelivery')

const fs = require ('fs')



class EmailDeliveryController {
    async deliverEmail(req, res) {
      try {

            const data  = await emaildeliveryServices.createEmailDelivery(req.body.from,req.body.to,req.body.subject,req.body.body);
            res.json({"messsage":"Email sent successfully"})
       }catch (error) {
        
        res.send(error);
      
      }
    
    }
  
    async getPage(req, res) {
      try {
        fs.readFile('/Users/Admin/Desktop/EmailDelivery-api/frontend/emaildelivery.html','utf8',
          function (err, data) {
            if (err) {
            
              res.status(500).send('Error reading file');
            
            } else {
            
              res.send(data);
            
            }
          }
        );
      } catch (error) {
      
        res.status(404).send('Page Not Found');
      
      }
    }
  }
  

module.exports = new EmailDeliveryController () ;