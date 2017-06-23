import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Swarm from './Swarm';
import Nodes from './Nodes';
import Services from './Services';
import Tasks from './Tasks';
import Networks from './Networks';

class Main extends Component {

    render() {
        return (
            <main>
                {/*https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf*/}
                <Switch>
                    <Route exact path='/' component={Swarm}/>
                    <Route path='/nodes' component={Nodes}/>
                    <Route path='/services' component={Services}/>
                    <Route path='/tasks' component={Tasks}/>
                    <Route path='/networks' component={Networks}/>
                </Switch>
            </main>
        );
    };
}

export default Main;