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