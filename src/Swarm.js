import React, { Component } from 'react';
import {getSwarmData} from './util/swarm-api.js'
import './Swarm.css';

export default class Swarm extends Component {

    constructor() {
        super();
        this.state = {swarm: {JoinTokens: {}, Spec: {}}, nodes: []}
    }


    getSwarm() {
        getSwarmData()
            .then(({swarm, nodes}) => {
                this.setState({swarm, nodes})
        });
    }

    componentDidMount() {
        this.getSwarm();
    }

    render() {
        const {swarm} = this.state;
        const {nodes} = this.state;
        return(
            <div className="Info-left">
                <div>Swarm</div>
                <ul>
                    <li>ID: {swarm.ID}</li>
                    <li>Name: { swarm.Spec.Name }</li>
                    <li>Created Date: { swarm.CreatedAt }</li>
                    <li>Last Updated: { swarm.UpdatedAt }</li>
                    <li>Manager Join Token: {swarm.JoinTokens.Manager}</li>
                    <li>Worker Join Token: {swarm.JoinTokens.Worker}</li>
                    <li>Number of nodes in Cluster: {nodes.length}</li>
                </ul>
            </div>
        );
    }
}