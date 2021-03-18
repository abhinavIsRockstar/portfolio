console.log('You are inside hole...PINK HOLE');
const express = require('express');
const app = express();
const Window = require('window');
const window = new Window();
const joi = require('joi');
const path = require('path')
const bodyParser = require('body-parser');
// const sendMail = require('./mail');

const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
// app.set(bodyParser.json());
app.use(express.json())

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine', 'ejs')
// console.log(__dirname,'dirname');


const auth = {
    auth : {
        api_key : 'a9942c316ff9e44354d667563767f981-2fbe671d-23a44bc7',
        domain : 'sandboxa6405aa2cf0f40c6903659c4cf28f99e.mailgun.org'
    }
}

const transporter = nodeMailer.createTransport(mailGun(auth));
let value ='';


app.get('/', (req,res)=>{
    // let pathroute = (path.join(__dirname,'/static','/index.html'))
    // console.log(pathroute,'pathroute')
    console.log('inside /')
    // res.sendFile(path.join(__dirname,'/static','/index.html'));
    res.render('index.ejs',{data:value})
    // res.sendFile(path.join(__dirname,'static','index.html'));
    
})

// app.get('/success', (req,res)=>{
//     res.render('success.ejs',{data: 'ok'})
// })

app.get('/facebook.com',(req,res) => {
    console.log('inside facebook');
    // window.open('https://facebook.com','_blank')
    res.redirect("https://facebook.com")
})

app.get('/youtube.com',(req,res) => {
    console.log('inside youtube')
    res.redirect("https://youtube.com")
})

app.get('/twitter.com',(req,res) => {
   
    res.redirect("https://twitter.com")
})
app.get('/linkedin.com',(req,res) => {
   
    res.redirect("https://linkedin.com")
})

app.post('/submit_details', (req,res) => {
    console.log('inside posttt');
    
    const {name,email,phone_number,text} = req.body;
    console.log('data: ',req.body);

    // sendMail(name,email,phone_number,text, function(err,data){
    //     console.log(data,'data');
    //     if(err){
    //         res.status(500).json({message:'internal error'});
    //         console.log(err,'error')
    //     } else{
    //         // res.status({message: 'Email sent!!'})
    //     //    alert(success);
    //         res.render('success.ejs')
    //         console.log('success line 41');
    //     }
    // })
    // res.json({message: 'message recieved'})    
        
        const mailOptions = {
            sender: name,
            from:email,
            to:'abhinavtiwari2303@gmail.com',
            phone_number : phone_number,
            text: text,
            
        }   
    
        transporter.sendMail(mailOptions, function(err,info){
            if(err){
                // cb(err,null);
            } else {
                // cb(null,data);
                console.log('inside mail sendMail');
               //  renderSuccess()
                // res.render('success.ejs');  
                // alert('success');     
                // res.render('success.ejs', {message: 'email has been sent!'}) ;                                         
                
            }            
           
        })        
        // res.render('index.ejs', {message: 'email has been sent!'}) ;  
            
        // res.render('index.ejs',{data:'sent'});

        // function renderSuccess(){
        //      console.log('inside render function');
             
        //  }   

})


app.listen(3000);