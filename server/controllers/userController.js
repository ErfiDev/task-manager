const model = require('../models/userModel');
const bcrypt = require('bcrypt');
const {registerValidation} = require('../validations/userValidation');

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

module.exports = {
    register
}