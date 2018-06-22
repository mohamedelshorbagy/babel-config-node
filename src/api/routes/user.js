import * as express from 'express';

// Models
import User from '../models/user';
// Helpers
import { errorJSON } from '../controllers/helpers';

const router = express.Router();


/**
 * 
 * @method: GET
 * @desc: Get All Users In Database 
 * @return: Return Array Of Users { name , age }
 * 
 */

router.get('/all', (req, res, next) => {
    User
        .find({})
        .exec()
        .then(respond => {
            if (respond.length >= 1) {
                res.status(200).json({
                    success: true,
                    count: respond.length,
                    users: respond
                });
            } else {
                errorJSON(res, "There's No Users Right Now!");
            }
        })
        .catch(err => errorJSON(res, err))
})

/**
 * 
 * @method: POST
 * @desc: Insert User
 * @return: Message , _id
 * 
 */


router.post('/insert', (req, res, next) => {
    const userData = {
        name: req.body.name,
        age: req.body.age
    }

    const user = new User(userData);

    user
        .save()
        .then(respond => {
            if (respond) {
                res.status(200).json({
                    success: true,
                    message: 'User Created Successfully!',
                    userId: user._id
                });
            } else {
                errorJSON(res, 'Something went wrong!');
            }
        })
        .catch(err => errorJSON(res, err));

})



export default router;
