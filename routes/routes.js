

const schema=require('../Schemas/joischema') ;
const bcrypt=require('bcrypt') ;
const connection=require('../connection') ;
const jwt=require('jsonwebtoken')  ;


module.exports=[

    { method: 'POST', path: '/signup', handler: async (request,h)=> {
         
           const email=request.payload.email ;
           const username=request.payload.username ;
           const firstname=request.payload.firstname ;
           const lastname=request.payload.lastname ;
           const DOB=request.payload.dob ;
           const password=request.payload.password ;
           const phone=request.payload.phone ;


           let user={
               email:email ,
               username:username ,
               firstname:firstname ,
               lastname:lastname ,
               DOB:DOB ,
               password:password ,
               phone:phone
           }


           const result=schema.validate(user)  ;

           console.log(result) ;

           if(result.error)
           { return "error in input" ; }


           if(result.value)
           {

             try{
                 const init=async()=>{ 
                const salt=await bcrypt.genSalt(10) ;
                const hashedPassword=await bcrypt.hash(password,salt) ;

                let sql='insert into USERINPUT(username,firstname,lastname,email,phone,DOB,password) VALUES( '+connection.escape(username)+' , '+connection.escape(firstname)+' , '+connection.escape(lastname)+' , '+connection.escape(email)+' , '+connection.escape(phone)+' , '+connection.escape(DOB)+' , '+connection.escape(hashedPassword)+' )' ;
                console.log(sql) ;
                   await connection.promise().query(sql) ;
                  
                 }
                 init() ;

             }

            catch(error){
             return "error in signing "
            }
           }
           return "sign up done" ;
} 
},
    { method: 'POST', path: '/login', handler: async (request,h)=> {


        const email=request.payload.email ;
           
      
             let sql='select * from USERINPUT where email ='+connection.escape(email);
               console.log(sql) ;
            const result= await connection.promise().query(sql) ;
            const a = result[0];
             console.log(a[0].password)
   if(result[0].length==0)
   return "email does not exists"
          
      const  password=await connection.promise().query('select password from USERINPUT where email ='+connection.escape(email) )


         const valid=await bcrypt.compare(request.payload.password,a[0].password) ;
         console.log(valid) ;

         const user={
             email:request.payload.email ,
             password:a[0].password
         }
        
      
              if(valid)
              return jwt.sign(user,process.env.secret_key)
   
      
           
           
                return "wrong password!!!!!" ;
           

       
             
        
    } }




]