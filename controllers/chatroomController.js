const mongoose = require("mongoose");

const Chatroom = mongoose.model("Chatroom");

exports.createChatroom = async (req, res) => {
    const { name } = req.body;

    const nameRegex = /^[A-z\a-z\s]+$/;

    if (!nameRegex.test(name)) throw "Chatroom name have only alphabets";
    const chatroomExists = await Chatroom.findOne({ name });
    if (chatroomExists) throw "Chatroom name already exists";

    const chatroom = new Chatroom({
        name,
    })

    await chatroom.save();

    res.json({
        message: "Chatroom Created"
    })
}