const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const userInfo=new mongoose.Schema({
     name:{
        type: String,
        required : true,
     } ,
     email:{
        type:String,
        required : true,
        unique :true
     },
     age:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true,
     }
     ,
   
     tokens :[
      {
         token:{
            type:String,
           // required:true,
         }
      }
     ]

})


userInfo.pre('save',async function(next){
   console.log("hi I am prathvi");
   if(this.isModified('password')){
      this.password=await bcrypt.hash(this.password,12);
   //   this.cpassword=await bcrypt.hash(this.cpassword,12);
   }
   next();
});

userInfo.methods.generateAuthToken=async function(){
   try{
      let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
      this.tokens=this.tokens.concat({token:token});
      console.log(token);
      await this.save();
      return token;
   }
   catch(err){
      console.log(err);
   }
}

const User=mongoose.model('User',userInfo);

module.exports=User;

