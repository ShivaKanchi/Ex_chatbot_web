const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom  is must",
        ref: "Chatroom",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom  is must",
        ref: "Chatroom",
    },
    message: {
        type: String,
        required: "Message cant be empty"
    }
});

module.exports = mongoose.model("Message", messageSchema);