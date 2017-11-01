import React, { Component } from 'react';
import './index.css';
import { Card, CardTitle } from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Node from './models/node';
import axios from 'axios';

export default class Nodes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: []
        }
    }

    componentDidMount() {
        this.fetchNodes();
    }

    fetchNodes() {
        axios.get(`/nodes`)
            .then(res => {
                return Promise.map(res.data, (n) => {
                    return new Node(n);
                });
            })
            .then(model => {
                this.setState({model});
            });
    }

    renderTitle(nodeInfo) {
        if (nodeInfo.status !== 'ready') {
            return <div>
                        <span className="HostName">{nodeInfo.hostname}</span>
                        <i className="fa fa-exclamation"></i>
                    </div>
        }
        
        return <span className="HostName">{nodeInfo.hostname}</span>
        
    }

    render() {
        return (
            <div className="Container">
                {
                    this.state.model.map(node => {
                        return <Card key={node.id}>
                                <div className="ListItem">               
                                    <CardTitle title={this.renderTitle(node)} subtitle={node.id} />
                                    <div className="Menu">
                                        <IconMenu
                                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                        >
                                            <MenuItem primaryText="Edit" />
                                            <MenuItem primaryText="Pause" />
                                            <MenuItem primaryText="Drain (!)" />
                                            <MenuItem primaryText="Remove (!)" />
                                        </IconMenu>
                                    </div>
                                </div>
                                </Card>  
                    })
                }
            </div>
        );
    };
}