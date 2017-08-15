module.exports.config = {

    environment: process.env.NODE_ENV || 'development',

    consoleLogLevel: {
        debug: "debug",
        info: "info",
        error: "error"
    },

    dnsSuffix: ".westus2.cloudapp.azure.com"

};