const express = require('express') ;
const authRouter = express.Router();

const {register, login, authenticated} = require ('../controllers/AuthController');
const { verifyAuthData } = require('../middlewares/verifications');
const { hashPassword, verifyPassword, generateToken,verifyUserExist,passportVerify } = require('../middlewares/auth');


authRouter.post("/register",hashPassword, register)
authRouter.post("/login",verifyUserExist,verifyPassword,generateToken, login)
//authRouter.post("/authenticated",passportVerify.authenticated("jwt",{session:false}),generateToken,authenticated)

module.exports = authRouter