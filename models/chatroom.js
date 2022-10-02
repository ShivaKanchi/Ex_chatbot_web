const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is must"
    },
},
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("user", chatroomSchema);