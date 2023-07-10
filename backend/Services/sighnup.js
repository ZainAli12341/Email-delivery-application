const sighnupDAO = require('../DAO/sighnup')

class SIGHNUPSERVICES{
createUsers(firstname,lastname,email,phonenumber,password){

    sighnupDAO.createUsers(firstname,lastname,email,phonenumber,password)

    }
};


module.exports = new SIGHNUPSERVICES ();