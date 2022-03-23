const sql=require('mysql2')  ;



   
var mysql = require("mysql2");
require("dotenv").config() ;
 
var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
  charset: process.env.charset
});




connection.connect(err => {


    if (!err) {
        connection.query("create table if not exists USERINPUT ( username VARCHAR(250),firstname VARCHAR(250),lastname VARCHAR(250),email VARCHAR(250),phone INT,DOB INT,password VARCHAR(255),PRIMARY KEY(email))")
        
        console.log("DB Connection Succeeded");

    } else {
      console.log(err);
    }
   




  });












module.exports=connection ;