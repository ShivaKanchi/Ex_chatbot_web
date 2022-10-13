const express = require('express');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use(require("./routes/user"));
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
