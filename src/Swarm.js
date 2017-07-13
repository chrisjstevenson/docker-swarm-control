import React, { Component } from 'react';
import './Swarm.css';

export default class Swarm extends Component {

    constructor() {
        super();
        this.state = { swarm: { JoinTokens: {}, Spec: {}} };
    }

    getSwarm() {
        fetch('/swarm')
            .then(res => res.json())
            .then(swarm => this.setState({swarm}));
    }

    componentDidMount() {
        this.getSwarm();
    }

    render() {
        const {swarm} = this.state;
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
                </ul>
            </div>
        );
    }
}