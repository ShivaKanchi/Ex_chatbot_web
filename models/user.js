const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is must"
    },
    email: {
        type: String,
        required: "Email is must"
    },
    password: {
        type: String,
        required: "Password is must"
    },
},
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("User", userSchema);