const environment = process.env.NODE_ENV || 'development';

const config = require('./env/' + environment);
config.consoleLogLevel = {
    debug: "debug",
    info: "info",
    error: "error"
};

config.dnsSuffix = ".westus2.cloudapp.azure.com";

module.exports = config;