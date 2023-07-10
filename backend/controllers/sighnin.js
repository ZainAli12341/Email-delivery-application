const bcrypt = require('bcrypt');
const fs  =require('fs')
const jwt = require('jsonwebtoken');
const sighninServices = require('../Services/sighnin');

class SignInController {
    async signIn(req, res) {
      try {

        const { email, password } = req.body;
  
        // Check if the user exists in the database
        const user = await sighninServices.validateUser(email);
  
        if (!user) {
          // User not found
          return res.status(404).json({ message: 'User not found' });
        }
  
        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          // Invalid password
          return res.status(401).json({ message: 'Invalid password' });
        }
  
        // Generate a JSON Web Token (JWT) for authentication
        const token = await jwt.sign({ userId: user.id }, '222hanji', {
          expiresIn: '1h'
        });
  
        res.status(200).json({
          message: 'Sign in successful',
          token: token
        });
      } catch (error) {
        res.status(500).json({ message: error });
      }
    }
    async getPage(req, res) {
      try {
       
        fs.readFile('/Users/Admin/Desktop/EmailDelivery-api/frontend/sighnin.html', 'utf8', function (err, data) {
        
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


  }
  

module.exports = new SignInController()