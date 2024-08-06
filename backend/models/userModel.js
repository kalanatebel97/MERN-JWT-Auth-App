import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const UserSchema = mongoose.Schema({
    name:{
        type:  String,
        required : true
    },
    email : {
        type: String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});

UserSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
});
UserSchema.methods.matchPassword = async function (enteredPwd){
    return await bcryptjs.compare(enteredPwd, this.password)
}
const User = mongoose.model('User',UserSchema);
export default User;