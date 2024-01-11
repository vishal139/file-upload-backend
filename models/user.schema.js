import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        default: null,
    }

}, { timestamps: true })


const User = mongoose.model('user', userSchema);
export default User;