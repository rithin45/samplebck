const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://rithinroy27:rithinroy27@cluster0.a9lmsan.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let ca=mongoose.Schema;
const cateschema=new ca(
    {
        Cname:String,
        Status:String
    }
);
var catemodel=mongoose.model("cat",cateschema)
module.exports=catemodel;