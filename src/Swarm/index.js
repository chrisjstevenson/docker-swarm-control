import React, { Component } from 'react';
import './index.css';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Summary from './models/summary'
import axios from 'axios';

export default class Swarm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenOpen: false,
            summary: {}
        }
    }

    componentDidMount() {
        this.fetchSwarmSummary();
    }

    fetchSwarmSummary() {
        axios.get(`/swarm`)
            .then(res => {
                this.setState({
                    summary: new Summary(res.data)  
                });
            });
    }

    handleJoinTokenOpen = () => {
        this.setState({tokenOpen: true});
    }

    handleJoinTokenClose = () => {
        this.setState({tokenOpen: false});
    };

    render() {
        const actions = [
            <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleJoinTokenClose}
            />,
        ];

        return(
            <div className="Container">
                <Card>
                    <CardTitle title={this.state.summary.name} subtitle={this.state.summary.id} />
                    <CardText>
                    {/* something can go here */}
                    </CardText> */}
                    <CardActions>
                    <FlatButton label="Join Worker" onClick={this.handleJoinTokenOpen} />
                    </CardActions>
                </Card>          

                <Dialog
                    title="Copy and run on the host you want to join"
                    actions={actions}
                    modal={false}
                    open={this.state.tokenOpen}>
                    <div className="Join-Command">{`docker swarm join --token ${this.state.summary.token}`}</div>
                </Dialog>

            </div>
        );
    }
}