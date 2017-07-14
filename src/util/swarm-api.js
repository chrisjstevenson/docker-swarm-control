import axios from 'axios';

export {getSwarmData, getServiceData, getNode};

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