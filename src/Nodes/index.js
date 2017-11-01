import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import ListItemMenu from '../components/ListItemMenu';
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
    
    openHostEditor = () => {
        console.log('edit was clicked');
    }

    handleMenuAction1 = () => {
        console.log('action1 was clicked');
    }

    handleMenuAction2 = () => {
        console.log('action2 was clicked');
    }

    render() {
        return (
            <div className="Container">
                {
                    this.state.hosts.map(host => {
                        return <Card key={host.id}>
                                <div className="ListItem">               
                                    <CardTitle title={host.hostname} subtitle={host.address} />
                                    <ListItemMenu>
                                        <MenuItem primaryText="Edit" onClick={this.openHostEditor} />
                                        <MenuItem primaryText="Action1" onClick={this.handleMenuAction1} />
                                        <MenuItem primaryText="Action2" onClick={this.handleMenuAction2} />
                                    </ListItemMenu>
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