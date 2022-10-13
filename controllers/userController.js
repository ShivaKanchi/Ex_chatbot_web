const mongoose = require("mongoose");
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const emailRegex = /[@gmail.com|@yahoo.com]/;

    if (emailRegex.test(email)) throw "Email is not valid";
    if (password.length < 8) throw "Password must be above 8 letters"
};
exports.login = async (req, res) => { };
