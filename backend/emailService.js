const nodemailer=require("nodemailer")
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"srilaxmichiluveru500@gmail.com",
        pass:"zzvogbsmxcngygzl"
    }
})
module.exports=transporter