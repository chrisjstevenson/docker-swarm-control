import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import './Swarm.css';

/*
  This could be the default view
 */
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

    // You will get CORS errors if not over www, try setting via docker daemon flags
    //  https://stackoverflow.com/questions/43021978/docker-for-windows-rest-api-enable-cross
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


    // render() {
    //     return (
    //         <div>
    //             <FlatButton label="Default" />
    //             <FlatButton label="Primary" primary={true} />
    //             <FlatButton label="Secondary" secondary={true} />
    //             <FlatButton label="Disabled" disabled={true} />
    //
    //             <div>
    //                 <label>Foo</label>
    //             </div>
    //         </div>
    //     );
    // }
}


export default Swarm;