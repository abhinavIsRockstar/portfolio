console.log('You are inside hole...PINK HOLE');

const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set(bodyParser.json());

app.use('/',express.static(path.join(__dirname,'/')));

app.get('/', (req,res)=>{

    res.sendFile(path.join(__dirname,'/index.html'));
})


app.listen(8080);