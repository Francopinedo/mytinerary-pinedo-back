const express = require('express') ;
const authRouter = express.Router();

const {register, login, authenticated} = require ('../controllers/AuthController');
const { verifyAuthData } = require('../middlewares/verifications');
const { hashPassword, verifyPassword, generateToken } = require('../middlewares/auth');


authRouter.post("/register",verifyAuthData,hashPassword, register)
authRouter.post("/login",verifyAuthData,verifyUserExist,verifyPassword,generateToken, login)
authRouter.post("/authenticated",passportVerify.authenticated("jwt",{session:false}),generateToken,authenticated)

module.exports = authRouter