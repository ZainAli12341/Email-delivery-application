const express = require('express');
const app = express();
const port =3000;
const colors = require('colors');
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use('/api/email_sender/sighnup',require('../routes/sighnup'))
app.use('/api/email_sender/emaildelivery',require('../routes/emaildelivery'))
app.use('/api/email_sender/sighnin',require('../routes/sighnin'))

app.listen(port,()=>console.log(`SERVER IS LISTENING ON ${port}...`.america.bgWhite.bold.italic.underline))