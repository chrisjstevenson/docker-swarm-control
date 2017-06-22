const bluebird = global.Promise = require('bluebird');
const express = require('express');
const app = express();
const client = require('./docker/wrapper');
const port = 3001;

app.get('/swarm', (request, response) => {

    client.get('/swarm')
        .then(res => {
            console.log(res.body);
            response.send(res.body);
        });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});