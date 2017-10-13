'use strict';
const controller =  module.exports;
const assert  = require('assert');
const request = Promise.promisifyAll(require('request'));
const _ = require('lodash');
let url = undefined;

// Make sure host url and port are set
if (!process.env.DOCKER_HOST) {
    throw Error("DOCKER_HOST env variable is not set");
} else {
    try {
        let dh = process.env.DOCKER_HOST.split(":");
        assert.ok(dh[0]);
        assert.ok(dh[1]);
        url = `http://${process.env.DOCKER_HOST}`;
    }
    catch (err) {
        console.log(err.stack)
    }
}

controller.getVersion = function(req, res) {
    return request.getAsync(`${url}/version`).then(response => res.send(response.body));
};

controller.getSwarm = function(req, res) {
    return request.getAsync(`${url}/swarm`).then(response => res.send(response.body));
};

controller.getAllNodes = function(req, res) {
    return request.getAsync(`${url}/nodes`).then(response => res.send(response.body));
};

controller.getNodeById = function(req, res) {
    return request.getAsync(`${url}/nodes/${req.params.id}`).then(response => res.send(response.body));
};

controller.getAllServices = function(req, res) {
    return request.getAsync(`${url}/services`).then(response => res.send(response.body));
};

controller.getServiceById = function(req, res) {
    return request.getAsync(`${url}/services/${req.params.id}`).then(response => res.send(response.body));
}

controller.updateService = function(req, res) {
    log.info(`Request Body: ${JSON.stringify(req.body)}`);
    let options = {
        url: `${url}/services/${req.params.id}/update?version=${req.query.version}`,
        json: true,
        body: req.body
    }

    return request.postAsync(options).then(response => {
        if(response.statusCode != 200) {
            log.error(response.body);
        }
        res.send(response.body);
    })
}

controller.getAllTasks = function(req, res) {
    return request.getAsync(`${url}/tasks`).then(response => res.send(response.body));
};

controller.getNetworks = function(req, res) {
    return request.getAsync(`${url}/networks`).then(response => res.send(response.body));
};
