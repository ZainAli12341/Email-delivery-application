const emaildeliveryDAO = require('../DAO/emaildelivery')

class EMAILDELIVERYSERVICES{
createEmailDelivery(from,to,subject,body){
    emaildeliveryDAO.sendEmail(from,to,subject,body)
}
}


module.exports = new EMAILDELIVERYSERVICES ();