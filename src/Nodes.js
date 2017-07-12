import React, { Component } from 'react';

class Nodes extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('/nodes')
            .then(res => res.json())
            .then(allNodes => this.setState({
                items: allNodes
            }))
    }

    render() {
        return (

            <div>
            { this.state.items.map(item => {
                return <div className="hostname" key={item.ID}>
                    <div>NodeID:  {item.ID}</div>
                    <div>HostName:  {item.Description.Hostname}</div>
                    <div>Docker v{item.Description.Engine.EngineVersion} on {item.Description.Platform.OS} {item.Description.Platform.Architecture}</div>
                    <div>Status: {item.Spec.Availability}</div>
                </div>
            })
            }
            </div>
        );
    };
}

export default Nodes;