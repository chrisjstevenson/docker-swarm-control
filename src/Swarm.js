import React, { Component } from 'react';
import './Swarm.css';

class Swarm extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            createdAt: '',
            updatedAt: '',
            joinTokens: {
                worker: '',
                manager: ''
            }
        };
    }

    componentDidMount() {
        fetch('/swarm')
            .then(res => res.json())
            .then(swarmInfo => this.setState({
                id: swarmInfo.ID,
                name: swarmInfo.Spec.Name,
                createdAt: swarmInfo.CreatedAt,
                updatedAt: swarmInfo.UpdatedAt,
                joinTokens: {
                    worker: swarmInfo.JoinTokens.Worker,
                    manager: swarmInfo.JoinTokens.Manager
                },
            }))
    }

    render() {
        return(
            <div className="Info-left">
                <div>Swarm</div>
                <ul>
                    <li>ID: { this.state.id }</li>
                    <li>Name: { this.state.name }</li>
                    <li>Created Date: { this.state.createdAt }</li>
                    <li>Last Updated: { this.state.updatedAt }</li>
                    <li>Worker Join Token: { this.state.joinTokens.worker }</li>
                </ul>
            </div>
        );
    }
}

export default Swarm;