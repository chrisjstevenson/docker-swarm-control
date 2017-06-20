const assert  = require('assert');
const request = Promise.promisifyAll(require('request'));
const _ = require('lodash');

// Make sure host url and port are set
if(process.env.DOCKER_HOST) {
    try {
        let dh = process.env.DOCKER_HOST.split(":");
        assert.ok(dh[0]);
        assert.ok(dh[1]);
    }
    catch (err) {
        console.log(err.stack)
    }
}

module.exports.get = function (path) {
    let url = `http://${process.env.DOCKER_HOST}${path}`;
    return request.getAsync(url).then(response => response);
};

module.exports.post = function (path, postData) {

    let options = {
        url: `http://${process.env.DOCKER_HOST}${path}`,
        json: true,
        body: postData
    };

    return request.postAsync(options).then(response => response);
};