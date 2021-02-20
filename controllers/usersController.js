const User = require("../model/User");

exports.get_users = async(req,res,next)=>{
    try {
        const userList = await User.findAll();
        res.send(userList);
        console.log("userList",userList);
    } catch (error) {
        res.send(error);
    }
}

exports.add_user = async(req,res,next)=>{
    try {
        const newUser = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            user_name:req.body.user_name,
            email:req.body.email,
            date_of_birth:req.body.date_of_birth,
            password:req.body.password,
            last_login:req.body.last_login
        })
        res.send({user:newUser})
    } catch (error) {
        res.send(error);
    }
}