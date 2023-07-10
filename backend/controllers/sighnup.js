const bcrypt = require('bcrypt');

const fs  =require('fs')

const jwt = require('jsonwebtoken');

const sighnupServices = require('../Services/sighnup');

const sighnupDAO = require('../DAO/sighnup')

class SighnupController {
  async createSighnup(req, res) {
    try {
        const {password} = req.body
        
        const salt = await bcrypt.genSalt(10);
        
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const usersSighnup = await sighnupServices.createUsers(req.body.firstname,req.body.lastname,req.body.email,req.body.phonenumber,hashedPassword);
        
        const token = await jwt.sign({ userId: usersSighnup.id }, '222hanji', {
        
        expiresIn: '1h' 
      });

      res.status(200).json({
      
        message: `${req.body.firstname} ${req.body.lastname} your account has been created successfully`,
      
        "token":token
      });
    } catch (error) {
    
      res.status(404).json({ message: error });
    
    }
  
  }
async getPage(req, res) {
  try {
   
    fs.readFile('/Users/Admin/Desktop/EmailDelivery-api/frontend/sighnup.html', 'utf8', function (err, data) {
      
      if (err) {
      
        res.status(500).send('Error reading file');
      
      } else {
      
        res.send(data);
      
      }
    
    });
  
  } catch (error) {
  
    res.status(404).send('Page Not Found');
  
  }

};
async getallUsers(req,res){
  
  const allUsers = await sighnupDAO.getUsers()
  
  res.send({"message":allUsers})

}

};

module.exports = new SighnupController ();