const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
const MongoClient = require('mongodb').MongoClient;
var app = express();
const url = 'mongodb://localhost:27017/';

var customerNo = 1;


app.use(function(req,res,next){
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
let fullName;
let emailId;
let mobileNo;
let message;
app.post('/index',function(req,res){
    fullName = req.body.fullname;
    emailId = req.body.email;
    mobileNo = req.body.mobile;
    message = req.body.comment;
    // console.log("FullName:"+fullName+"\nEmail:"+emailId+"\nMobileNo:"+mobileNo+"\nFeedback:"+message);
    res.send(req.body);
    var Data = {FullName:fullName,EmailId:emailId,MobileNumber:mobileNo,Message:message};
    console.log(Data);
    MongoClient.connect(url, function(err, db) {
        if (err){
            console.log("Error: "+err);
        }
        var dbName = db.db("customerFeedback");
        dbName.collection("customers").insertOne(Data, function(err, res) {
            if (err){
                console.log("Error: "+err);
            }
            console.log("1 document inserted");
            db.close();
        });
    });
    var transporter = nodemailer.createTransport({
        //  service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'sidhik64742@gmail.com',
          pass: 'letmein@64742'
        }
      });
      
      var mailOptions = {
        from: 'sidhik64742@gmail.com',
        to: emailId,
        subject: 'Thanks for your Feedback',
        html:'<h2>S@R</h2><h5>Thanks for visiting my website and your valuable feedback! <a href=https://sidhik4742.github.io/MyPersonalWebsite/> You must click this link to back home page.</a></h5>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

});
console.log("Server listen at port 8000");
app.listen(8000);

