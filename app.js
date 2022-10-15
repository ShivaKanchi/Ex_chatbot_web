const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use("/user", require("./routes/user"));
app.use("/chatroom", require("./routes/chatroom"));
//error handlers
const errorhandlers = require("./handlers/errorHandler");
app.use(errorhandlers.notFound);
app.use(errorhandlers.mongoseErrors);
if (process.env.ENV === "Development") {
    app.use(errorhandlers.developmentErrors);
} else {
    app.use(errorhandlers.productionErrors);
}

module.exports = app;
