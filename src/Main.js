import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Dialog from 'material-ui/Dialog';
import Swarm from './Swarm/';
import Nodes from './Nodes/';
import Services from './Services/';
import Tasks from './Tasks';
import Networks from './Networks';
import axios from 'axios';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidMount() {
        // Perform simple check to see if we can get data back, times out 
        // after 2 seconds. 
        axios({url: '/swarm', timeout: 2000}).then(res => {
            if (!res.data) this.setState({error: true});
        })
        .catch(err => {
            this.setState({error: true});
        })
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' render={()=><Swarm />}/>
                    <Route path='/nodes' render={()=><Nodes />}/>
                    <Route path='/services' render={()=><Services />}/>
                    <Route path='/tasks' component={Tasks}/>
                    <Route path='/networks' component={Networks}/>
                </Switch>

                
                <Dialog modal={false} open={this.state.error}>
                    <i className="fa fa-exclamation-triangle fa-2"></i><r className="Alert">Unable to connect to Swarm, please check your connections and then refresh your browser.</r>
                </Dialog>

            </main>
        );
    };
}