import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './Swarm.css';

export default class Swarm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            joinTokenOpen: false,
        }
    }

    handleJoinTokenOpen = () => {
        this.setState({joinTokenOpen: true});
    }

    handleJoinTokenClose = () => {
        this.setState({joinTokenOpen: false});
    };

    render() {
        // flash alert if no connection
        if (!this.props.swarmData) {
            return (
                <Dialog modal={false} open={true}>
                    <i className="fa fa-exclamation-triangle fa-2"></i><r className="Alert">Unable to connect to Swarm, please check your connections and then refresh your browser.</r>
                </Dialog>
            )
        }
    
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
                    <CardTitle title={this.props.swarmData.Spec.Name} subtitle={this.props.swarmData.ID} />
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
                    open={this.state.joinTokenOpen}>
                    <div className="Join-Command">{`docker swarm join --token ${this.props.swarmData.JoinTokens.Worker}`}</div>
                </Dialog>

            </div>
        );
    }
}