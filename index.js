 var happi=require('@hapi/hapi') ;
 var sql=require('mysql2')  ;



 var connection=require('./connection.js') ;

var routes=require('./routes/routes.js')


const Joi = require('@hapi/joi');
const schema=require('./Schemas/joischema.js') ;

require("dotenv").config() ;

 const init=async()=>{

   const server=happi.server({
       port:3000 ,
        host:'localhost'
   })


   server.route(routes) ;

   








   await server.start()  ;
   
     
 
   console.log('Server running on PORT %s',server.info.uri) ;



 }


 init() ;