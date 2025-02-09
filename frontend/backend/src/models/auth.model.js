import mongoose, { Schema } from "mongoose"  


const userSchema = new mongoose.Schema({

    firstname : {
        type :String , 
        required : true , 
    } , 
    lastname : {
         type :String , 
         required : true ,  
    } , 
    email :  {
          type : String , 
          required : true , 
    },
    password : {
       type : String , 
       required : true ,    
    } , 

    //so here we cant store this because we do not want to store it  in databse 
    // confirmPassword : {
    //      type : String , 
    //      required : true , 
    // }




})

export const  User = mongoose.model("User" , userSchema)