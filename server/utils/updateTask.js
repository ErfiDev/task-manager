const model = require('../models/userModel');

const updateTask = (array , updated , userUuid) => {
    const promise = new Promise(async (reject , resolve) => {
        array.push(updated);
        await model.updateOne(
            { uuid: userUuid },
            {
                $set: { tasks: array }
            },{},
            (err , res)=>{
                if(err) return reject({
                    msg: 'cannot update!',
                    status: 503
                });
                else{
                    resolve({
                        msg: 'update task successful!',
                        status: 200
                    });
                }
            } 
        );
    });

    return promise;
};

module.exports.updateTask = updateTask;