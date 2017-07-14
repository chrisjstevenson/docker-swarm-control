const apiController =  module.exports;
const assert  = require('assert');
const request = Promise.promisifyAll(require('request'));
const _ = require('lodash');
let url = undefined;

// Make sure host url and port are set
if(process.env.DOCKER_HOST) {
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

// Note - I don't think this is the right way to do this
apiController.getSwarm = function(req, res) {
    return request.getAsync(`${url}/swarm`).then(response => res.send(response.body));
};

apiController.getAllNodes = function(req, res) {
    return request.getAsync(`${url}/nodes`).then(response => res.send(response.body));
};

apiController.getNode = function(req, res) {
    return request.getAsync(`${url}/nodes/${req.params.nodeId}`).then(response => res.send(response.body));
};

apiController.getAllServices = function(req, res) {
    return request.getAsync(`${url}/services`).then(response => res.send(response.body));
};

apiController.getAllTasks = function(req, res) {
    return request.getAsync(`${url}/tasks`).then(response => res.send(response.body));
};

