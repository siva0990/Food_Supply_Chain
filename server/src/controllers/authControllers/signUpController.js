const userLoginModel = require("./../../models/UserLoginModel")

const signUpController = async(req, res) =>{
    try{
        const {otp, email} = req.body;
        const user = userLoginModel.findOne({email})
        const result = user.otp === otp;
        if(!result){
            res.status(403).send({message : "otp incorrect"})
        }

        const token = jwt.sign({email, role : user.role},{expiresIn: '1h'})
        res.cookie("jwtToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000
        });
        res.status(200).send({message:"otp verification success"})
    }catch(err){
        res.status(500).send({message:"internal server error"})
    }

}

module.exports = signUpController;