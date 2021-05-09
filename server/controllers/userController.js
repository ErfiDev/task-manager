const model = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registerValidation,loginValidation} = require('../validations/userValidation');

async function register(req , res) {
    let {error} = await registerValidation(req.body);
    if(error){
        return res.json({
            msg: error.details[0].message,
            status: 406
        });
    }
    else{
        const findByUser = await model.find({username: req.body.username});
        if(findByUser.length > 0){
            return res.json({
                msg: 'this username already used!',
                status: 406
            });
        }

        const encryptPass = await bcrypt.hash(req.body.password , 10);
        const body = {
            username: req.body.username,
            password: encryptPass,
            tasks: req.body.tasks,
            isAdmin: req.body.isAdmin
        }
        const data = await new model(body);
        data.save()
        .then(r => { res.json({status: 201}) })
        .catch(er => { res.json({status: 406 , msg: er}) });
    }
}

async function login(req , res) {
    let {error} = await loginValidation(req.body);
    if(error){
        return res.json({
            msg: error.details[0].message,
            status: 406
        });
    }else{
        const findByUser = await model.findOne({username: req.body.username});
        if(!findByUser){
            return res.json({
                msg: 'cant find user with this username',
                status: 406
            });
        }
        else{
            let comparePass = await bcrypt.compare(
                req.body.password , findByUser.password
            );
            if(!comparePass){
                return res.json({
                    msg: 'password dont match!',
                    status: 406
                });
            }

            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            
            const token = await jwt.sign(
                {token: findByUser} , process.env.ACCESS_TOKEN
            );
            
            res.json({
                status: 200,
                data: {
                    token,
                    exp: tomorrow
                }
            })
        }
    }
}

module.exports = {
    register,
    login
}