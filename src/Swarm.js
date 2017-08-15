import React, { Component } from 'react';
import './Swarm.css';

export default class Swarm extends Component {

    render() {

        if (!this.props.swarmData) {
            return (
                <div>Cannot connect to Docker Swarm</div>
            )
        }

        return(
            <div className="Info-left">
                <div>Swarm</div>
                <ul>
                    <li>ID: {this.props.swarmData.ID}</li>
                    <li>Name: { this.props.swarmData.Spec.Name }</li>
                    <li>Created Date: { this.props.swarmData.CreatedAt }</li>
                    <li>Last Updated: { this.props.swarmData.UpdatedAt }</li>
                    <li>Manager Join Token: {this.props.swarmData.JoinTokens.Manager}</li>
                    <li>Worker Join Token: {this.props.swarmData.JoinTokens.Worker}</li>
                    {/*<li>Number of nodes in Cluster: {nodes.length}</li>*/}
                </ul>
            </div>
        );
    }
}