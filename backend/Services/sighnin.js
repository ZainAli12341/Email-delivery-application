const sighninDAO = require('../DAO/sighnin')

class SIGHNINSERVICES{
validateUser(email,password){
    sighninDAO.sighnInUser(email,password)
}
}


module.exports = new SIGHNINSERVICES ();