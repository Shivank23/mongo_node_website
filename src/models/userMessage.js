const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3

    },
    email: {
        type: String,
        required: true,
        Validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Id")
            }
        }

    },

    date: {
        type: String,
        default: Date.now

    },



    message: {
        type: String,
        required: true,
        minLength: 3
    }
})
//we need to create a collection
const User = mongoose.model("User", userSchema);
module.exports = User;