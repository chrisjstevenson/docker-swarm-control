/*
  Created just for learning the Docker API
*/
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

module.exports.get = function (path) {
    return request.getAsync(`${url}${path}`).then(response => response);
};

module.exports.post = function (path, postData) {

    let options = {
        url: `${url}${path}`,
        json: true,
        body: postData
    };

    return request.postAsync(options).then(response => response);
};

module.exports.delete = function (path) {
    return request.deleteAsync(`${url}${path}`).then(response => response);
};


/*
 Notes:

  - Domain Objects
      - Swarm
      - Node
      - Service
      - Task

  - Updating an entity requires getting the version number first, also any
    updates override the existing spec. So you need to send the whole spec back.

  - Post can update or create an entity
 */