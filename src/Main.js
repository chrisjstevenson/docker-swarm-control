import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Swarm from './Swarm';
import Hosts from './Hosts';

class Main extends Component {

    render() {
        return (
            <main>
                {/*https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf*/}
                <Switch>
                    <Route exact path='/' component={Swarm}/>
                    <Route path='/nodes' component={Hosts}/>
                </Switch>
            </main>
        );
    };
}

export default Main;