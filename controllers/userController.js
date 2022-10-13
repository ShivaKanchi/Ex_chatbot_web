const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailRegex = /[@gmail.com|@yahoo.com]/;
    if (emailRegex.test(email)) throw "Email is not valid";
    if (password.length < 8) throw "Password must be above 8 letters";
    const user = new User({ name, email, password: sha256(password + process.env.SALT) });
    await user.save();
    res.json({
        message: "User [" + name + "] registered successfully"
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        email,
        password: sha256(password + process.env.SALT)
    });
    if (!user) throw "Email and password invalid ";
    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    res.json({
        message: "User logged in successfully",
        token
    });
};
