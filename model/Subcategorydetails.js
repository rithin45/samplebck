const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://rithinroy27:rithinroy27@cluster0.a9lmsan.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const subcateschema=new sa(
    {
        Sname:String,
        Category:String
    }
);
var subcatemodel=mongoose.model("subcat",subcateschema)
module.exports=subcatemodel;