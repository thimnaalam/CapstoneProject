import 'dotenv/config'
import jwt from "jsonwebtoken";
const { sign, verify } = jwt

//Payload(email, password - information from the user) to create a token  

function createToken(user){
    return sign({
        Email: user.Email,
        Pwd : user.Pwd
    },    process.env.secret_key,
    {
        expiresIn: '1h'
    }
    )
}

function verifyAToken(req, res, next){
    // Retrieve a token from the browser
    const token = req?.header['Authorization']
    if (token) {
        if (verify(token, process.env.secret_key)){
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg:"Please login."
        })
    }
}
export{
    createToken,
    verifyAToken
}