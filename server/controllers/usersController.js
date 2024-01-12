const User = require('../models/user')
const Role = require('../models/role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const  {secret} = require("../config/passport")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}

class usersController {
    async registers (req, res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "there is a registration error",errors})
            }
          
            const {name,  password, email} = req.body
            const candidate = await User.findOne({name})
            if(candidate){
                return res.status(400).json({message: "chka nman ban"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'USER'})
            const user = new User ({name, password: hashPassword, roles: [userRole.value], email:email})
            await user.save()
            return res.json({message: "000000000000"})

        }catch (e){
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }
    async login (req, res ){
        try {
            const {name, password} = req.body
            const user = await  User.findOne({name})
            console.log(req.body);
            if(!user){
                return res.status(400).json({message: `not found ${name}`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message:`not found password`})
            }
            const token = generateAccessToken(user._id, user._roles)
            return res.json(token)

        }catch (e){
            console.log(e);
            res.status(400).json({message: 'Login error'})
        }
    }

    async  getUsers (req, res){
        try {
          const users = await User.find()
          res.json(users)
        }catch (e){

        }
    }
}

module.exports = new usersController()