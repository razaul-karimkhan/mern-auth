import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        Type:String,
        require: true,
        unique: true,
    },
    email:{
        Type:String,
        require: true,
        unique: true,
    },
    password:{
        Type:String,
        require: true,
       
    } 
}, {timestamps: true});

  const User = mongoose.model('User', userSchema);

  export default User;