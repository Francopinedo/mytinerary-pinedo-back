const express = require('express') ;
const authRouter = express.Router();

const {register, login, authenticated,sign_out} = require ('../controllers/AuthController');
const { verifyAuthData } = require('../middlewares/verifications');
const { hashPassword, verifyPassword, generateToken,verifyUserExist,passportVerify, verify_data_user } = require('../middlewares/auth');
const { authenticate } = require('passport');


authRouter.post("/register",hashPassword, register)
authRouter.post("/login",verify_data_user, login)
authRouter.post("/authenticated",passportVerify.authenticate("jwt",{session:false}),generateToken,authenticated)
authRouter.post("/sign_out",passportVerify.authenticate("jwt",{session:false}),sign_out)
module.exports = authRouter