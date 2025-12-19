// middlewares/logger.js

const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'logs.txt');

function logger(req, res, next) {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.path}\n`;

  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.error('Error writing log:', err);
    }
  });

  next();
}

module.exports = logger;
