console.log('inside mail.js');

const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth : {
        api_key : 'a9942c316ff9e44354d667563767f981-2fbe671d-23a44bc7',
        domain : 'sandboxa6405aa2cf0f40c6903659c4cf28f99e.mailgun.org'
    }
}

const transporter = nodeMailer.createTransport(mailGun(auth));

const sendMail = (name,email,phone_number,text,cb) => {
    const mailOptions = {
        sender: name,
        from:email,
        to:'abhinavtiwari2303@gmail.com',
        phone_number : phone_number,
        text: text
    }

    transporter.sendMail(mailOptions, function(err,data){
        if(err){
            cb(err,null);
        } else {
            cb(null,data);
            console.log('inside mail sendMail');
            
            
        }
    })

     
    
}

module.exports = sendMail; 




