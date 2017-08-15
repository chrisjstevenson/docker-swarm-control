import React, { Component } from 'react';

export default class Nodes extends Component {

    render() {

        let listOfnodes = [];
        if (this.props.nodeData) {
            listOfnodes = this.props.nodeData
        }

        return (
            <div className="Info-left">
                <div>Nodes</div>
                {
                    listOfnodes.map(nodeInfo => {
                        return <ul className="hostname" key={nodeInfo.ID}>
                            <li>ID: {nodeInfo.ID}</li>
                            <li>Hostname:  {nodeInfo.Description.Hostname}</li>
                            <li>{nodeInfo.Status.Addr}</li>
                            <li>Docker v{nodeInfo.Description.Engine.EngineVersion} on {nodeInfo.Description.Platform.OS} {nodeInfo.Description.Platform.Architecture}</li>
                            <li>Status: {nodeInfo.Spec.Availability}</li>
                            {/*<li>IsLeader: {nodeInfo.ManagerStatus.Leader.toString()}</li>*/}
                        </ul>
                })}
            </div>
        );
    };
}