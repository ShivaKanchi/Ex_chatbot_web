const express = require('express');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
