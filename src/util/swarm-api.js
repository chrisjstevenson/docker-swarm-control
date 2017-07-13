import axios from 'axios';

export {getSwarmData};

function getSwarmData() {
    return axios.all([
        axios.get(`/swarm`),
        axios.get(`/nodes`),
    ])
    .then(([swarm, nodes]) => ({
        swarm: swarm.data,
        nodes: nodes.data
    }));
}