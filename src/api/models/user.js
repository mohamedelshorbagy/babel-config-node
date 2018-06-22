import mongoose from 'mongoose';




const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})


const UserModel = mongoose.model('User', UserSchema);


export default UserModel;




