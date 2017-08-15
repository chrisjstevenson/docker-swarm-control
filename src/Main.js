import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Swarm from './Swarm';
import Nodes from './Nodes';
import Services from './Services';
import Tasks from './Tasks';
import Networks from './Networks';
import {getSwarmData} from './util/swarm-api.js';

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            swarm: null,
            nodes:[],
            services: []
        }
    }

    getSwarm() {
        getSwarmData()
            .then(({swarm, nodes, services}) => {
                this.setState({swarm, nodes, services})
            });
    }

    componentDidMount() {
        this.getSwarm();
    }

    render() {
        return (
            <main>
                {/*https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf*/}
                <Switch>
                    <Route exact path='/' render={()=><Swarm swarmData={this.state.swarm}/>}/>
                    <Route path='/nodes' render={()=><Nodes nodeData={this.state.nodes}/>}/>
                    <Route path='/services' render={()=><Services serviceData={this.state.services} nodeData={this.state.nodes}/>}/>
                    <Route path='/tasks' component={Tasks}/>
                    <Route path='/networks' component={Networks}/>
                </Switch>
            </main>
        );
    };
}