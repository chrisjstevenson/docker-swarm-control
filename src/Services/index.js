import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import './index.css';
import EditServiceMenu from './components/EditServiceMenu';
import os from 'os';
import Service from './models/service';
import { refreshServices } from '../util/swarm-api';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: []
        }
        
        // Need to bind so this is available via event handler
        // https://stackoverflow.com/questions/39705002/react-this2-setstate-is-not-a-function 
        this.fetchDataAndPoll = this.fetchDataAndPoll.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchDataAndPoll() {
        setTimeout(() => {
            this.fetchData()
            //this.refreshAndPoll(); ** uncomment to poll
        }, 3000);
    }

    fetchData() {

        // fetch services
        refreshServices()
            .then(data => {
                return Promise.map(data, (seed) => {
                    return new Service(seed);
                })
            })
            .then(model => {
                console.log(`refesh state: ${JSON.stringify(model)}`);
                this.setState({model});
            });
    }

    render() {
        let key = 0;
        return (
            <div className="Container">
                <div>Services</div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>id</TableHeaderColumn>
                            <TableHeaderColumn>name</TableHeaderColumn>
                            <TableHeaderColumn>replicas</TableHeaderColumn>
                            <TableHeaderColumn>image</TableHeaderColumn>
                            <TableHeaderColumn>ports</TableHeaderColumn>
                            <TableHeaderColumn />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            this.state.model.map(service => {
                                return <TableRow key={service.id}>
                                    <TableRowColumn>{service.id}</TableRowColumn>
                                    <TableRowColumn>{service.name}</TableRowColumn>
                                    <TableRowColumn>{service.scale}</TableRowColumn>
                                    <TableRowColumn>{service.image}</TableRowColumn>
                                    <TableRowColumn>
                                        {
                                            service.ports.map(p => {
                                                key++;
                                                return <a
                                                  key={key}
                                                  className="Service-link"
                                                  href={`http://${os.hostname()}:${p.PublishedPort}`}
                                                  target="_blank"
                                                  rel="noopener noreferrer">{p.PublishedPort}
                                                </a>
                                            })
                                        }
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        <EditServiceMenu target={service} onRefresh={this.fetchDataAndPoll} />
                                    </TableRowColumn>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    };
}
