require('dotenv').config({path: __dirname + '../../../../.env'});
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

//database
const database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE
});

database.connect(err=>{
    if(err){
        console.log('error connecting ' + err.stack);
        return;
    }else{
        console.log('MYSQL connected');
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/signup', async (req,res)=>{
    const {email,password, firstName, lastName} = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    database.query('SELECT * FROM users WHERE email = ?', [email], (err,result)=>{
        console.log(result);
        if(err){
            res.send({msg: err});
        }else if(result.length > 0){
            res.send({error: true, msg: "An account was already created with this email"});
        }
        else if(result.length === 0){
            database.query('INSERT INTO users SET ?', {first_name: firstName, last_name: lastName, email: email, pass: hashedPassword}, (err, result) => {
                if(err){
                    console.log(err);
                }
            });
            res.send({error: false, msg: "Thank you! Your account has been created"});
        }
    });
    
});

app.listen(PORT, () => {console.log('server started on port ' + PORT)});