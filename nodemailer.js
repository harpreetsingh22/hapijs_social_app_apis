var nodemailer=require("nodemailer") ;
require("dotenv").config() ;


var transport=nodemailer.createTransport({
    service:'gmail' ,
    auth:{

        user:'kxip2671@gmail.com' ,
        pass:process.env.pass
    }
}) ;



module.exports=transport ;




