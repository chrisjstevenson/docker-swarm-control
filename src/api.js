import axios from 'axios';
import assert from 'assert';

export { 
    getAllServices, 
    getServiceById, 
    updateServiceById,
    getAllHosts, 
    getSwarmDetails 
}

function getAllServices() {
    return axios.get('/services')
        .then(res => {
            assert.equal(res.status, 200);
            return Promise.map(res.data, (service) => {
                return createServiceFacade(service);
            });
        });
}

function getServiceById(id) {
    return axios.get(`/services/${id}`)
        .then(res => {

            if(!res.data.ID) {
                return createEmptyServiceFacade();
            }
            
            return createServiceFacade(res.data);
        });
}

function createServiceFacade(base) {
    return {
        id: base.ID,
        version: parseInt(base.Version.Index, 10),
        spec: base.Spec,
        name: base.Spec.Name,
        labels: base.Spec.Labels,
        scale: base.Spec.Mode.Replicated.Replicas,
        image: base.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0],                    
        ports: getPortsFromEndpointSpec(base.Spec.EndpointSpec)
    }
}

function createEmptyServiceFacade() {
    return {
        ports: []
    }
}

function getPortsFromEndpointSpec(endpointSpec) {
    let ports = [];
    if (endpointSpec && endpointSpec.Ports) {
        ports = endpointSpec.Ports.map(spec => {
          return { 
            published: spec.PublishedPort, 
            target: spec.TargetPort
          }
        });
    }
    return ports;
}

function updateServiceById(id, update) {
    return axios.get(`/services/${id}`)
        .then(res => {
            assert.equal(res.status, 200);
            return res.data;
        })
        .then(existingServiceInstance => {
            let version = existingServiceInstance.Version.Index;
            return axios.post(`/services/${id}/update?version=${version}`, createNewServiceSpecification(update))
        })
        .then(res => {
            assert.equal(res.status, 200);  // no body when 200ok
        })
        .catch(err => {
            console.error(err.message)
        });
}

function createNewServiceSpecification(update) {
    let newSpec = update.spec;
    newSpec.Labels = update.labels;
    newSpec.Mode.Replicated.Replicas = parseInt(update.scale, 10);
    newSpec.EndpointSpec.Ports = update.ports.map(port => {
        return createNewPortConfig(port);
    });

    return newSpec;
}

function createNewPortConfig(port) {
    return { 
        Protocol: "tcp", 
        TargetPort: parseInt(port.target, 10), 
        PublishedPort: parseInt(port.published, 10), 
        PublishMode: "ingress" 
    }
}



function getAllHosts() {
    return axios.get('/nodes')
        .then(res => {
            return Promise.map(res.data, (n) => {
                return {
                    id: n.ID,
                    hostname: n.Description.Hostname,
                    status: n.Status.State,
                    address: n.Status.Addr,
                    errors: getHostErrors(n.Status.State)
                }
            });
        })
}

function getHostErrors(status) {
    let errors = [];
    if (status !== 'ready') {
        errors.push("Host is not ready or host disconnected");
    }
    return errors;
}



function getSwarmDetails() {
    return axios.get('/swarm')
        .then(res => {
            return {
                id: res.data.ID,
                name: res.data.Spec.Name,
                token: res.data.JoinTokens.Worker
            }  
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