global.log = require('./log');
const Promise = global.Promise = require('bluebird');
const assert = require('assert');
const express = require('express');
const morgan = require('morgan');

const client = require('./wrapper');
const app = express();
const port = 3001;

app.use(morgan('dev'));

require('./routes')(app);

app.listen(port, (err) => {
    if (err) {
        return log.error('[x] Error while starting Server.js', err)
    }
    log.info(`[*] proxy listening on ${port}, waiting for client...`)
});