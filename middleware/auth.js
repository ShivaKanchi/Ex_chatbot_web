module.exports = (req, res, next) => {
    try {
        if (!req.headers.authorization) throw "Forbidden!"
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        res.json({
            message: "Forbidden"
        })
    }

};