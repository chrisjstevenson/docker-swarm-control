import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Node from './models/node';
import axios from 'axios';
import './index.css';

export default class Nodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hosts: []
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
            .then(hosts => {
                this.setState({hosts});
            });
    }

    render() {
        return (
            <div className="Container">
                {
                    this.state.hosts.map(host => {
                        return <Card key={host.id}>
                                <div className="ListItem">               
                                    <CardTitle title={host.hostname} subtitle={host.address} />
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
                                    {
                                        host.errors.map(err => {
                                            return <CardText key="1">
                                                    <i className="fa fa-exclamation-triangle fa-2"/><span className="Message">{err}</span>
                                                   </CardText>
                                        })
                                    }
                                </Card>

                    })
                }
            </div>
        );
    };
}