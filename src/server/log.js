const winston = require('winston');
const moment = require('moment');

function now() {
    return moment().format();
}

module.exports = global.log = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            colorize: true,
            timestamp: now,
            prettyPrint: true
        })
    ]
});