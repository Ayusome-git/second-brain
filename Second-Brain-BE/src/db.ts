
import mongoose,{model, Schema} from "mongoose";

mongoose.connect("mongodb+srv://ayusome:ayush%405521@cluster0.qnlhn.mongodb.net/SecondBrain")


const UserSchema= new Schema({
    username:{type: String, unique:true},
    password: { type: String }
})

const ContentSchema= new Schema({
    title:String,
    link:String,
    type:String,
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId, ref:'User', required: true}
})

const LinkSchema = new Schema({
    hash:String,
    userId:{type: mongoose.Types.ObjectId, ref:'User', required:true ,unique:true}
})

export const UserModel = model("User",UserSchema);
export const ContentModel = model("Content", ContentSchema)
export const LinkModel=model("Links",LinkSchema)