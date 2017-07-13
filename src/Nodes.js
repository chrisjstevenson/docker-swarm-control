import React, { Component } from 'react';

export default class Nodes extends Component {

    constructor() {
        super();
        this.state = {allNodes:[]}
    }

    getNodes() {
        fetch('/nodes')
            .then(res => res.json())
            .then(allNodes => this.setState({allNodes}))
    }

    componentDidMount() {
        this.getNodes();
    }

    render() {
        const {allNodes} = this.state;
        return (
            <div className="Info-left">
                <div>Nodes</div>
                {
                    allNodes.map(nodeInfo => {
                    return <ul className="hostname" key={nodeInfo.ID}>
                        <li>ID:  {nodeInfo.ID}</li>
                        <li>Hostname:  {nodeInfo.Description.Hostname}</li>
                        <li>{nodeInfo.Status.Addr}</li>
                        <li>Docker v{nodeInfo.Description.Engine.EngineVersion} on {nodeInfo.Description.Platform.OS} {nodeInfo.Description.Platform.Architecture}</li>
                        <li>Status: {nodeInfo.Spec.Availability}</li>
                        <li>IsLeader: {nodeInfo.ManagerStatus.Leader.toString()}</li>
                    </ul>
                })}
            </div>
        );
    };
}