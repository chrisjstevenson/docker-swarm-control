import axios from 'axios';
import assert from 'assert';

export {getSwarmData, getServiceData, getNode, updateService, refreshServices};

function getSwarmData() {
    return axios.all([
        axios.get(`/swarm`),
        axios.get(`/nodes`),
        axios.get('/services')
    ])
    .then(([swarmResponse, nodesResponse, servicesResponse]) => ({
        swarm: swarmResponse.data,
        nodes: nodesResponse.data,
        services: servicesResponse.data
    }));
}

function getServiceData() {
    return axios.all([
        axios.get(`/services`),
        axios.get(`/tasks`),
        axios.get(`/nodes`)
    ])
        .then(([services, tasks, nodes]) => ({
            services: services.data,
            tasks: tasks.data,
            nodes: nodes.data
        }));
}

function getNode(id) {
    return axios.get(`/nodes/${id}`).then(res => res.data);
}

// "Refresh", to be called by individual components
function refreshServices() {
    return axios.get(`/services`).then(res => res.data);
}

function updateService(id, updatedServiceDescription) {
    return axios.get(`/services/${id}`)
        .then(res => {
            assert.equal(res.status, 200);
            return res.data;
        })
        .then(updatedServiceData => {
            
            updatedServiceData.Spec = updatedServiceDescription.Spec;
            updatedServiceData.Endpoint = updatedServiceDescription.Endpoint;

            return axios.post(`/services/${updatedServiceData.ID}/update?version=${updatedServiceData.Version.Index}`, updatedServiceData.Spec);
        })
        .then(res => {
            assert.equal(res.status, 200);  // no body when 200ok
        })
        .catch(err => {
            console.error(err.message)
        });
}



/*


{
    "Name": "pineapple",
    "Labels": {},
    "TaskTemplate": {
      "ContainerSpec": {
        "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
        "DNSConfig": {}
      },
      "Resources": {
        "Limits": {},
        "Reservations": {}
      },
      "Placement": {
        "Platforms": [
          {
            "Architecture": "amd64",
            "OS": "linux"
          }
        ]
      },
      "ForceUpdate": 0,
      "Runtime": "container"
    },
    "Mode": {
      "Replicated": {
        "Replicas": 4
      }
    }
}
    
  

*/