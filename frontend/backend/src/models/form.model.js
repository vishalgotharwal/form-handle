import mongoose from 'mongoose'

const Formdata = new mongoose.Schema({
 
    name : {
         type : mongoose.Schema.Types.objectId ,
         ref : "User" , 
         required : true , 
     } , 
     email : {
        type : mongoose.Schema.Types.objectId ,
        ref : "User" , 
        required : true , 
     } , 
     mobileNumber : {
         type : Number , 
         required : true , 

     } , 
     image : {
         type : String , 
         required : true , 
     }

     


})