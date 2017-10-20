import React, { Component } from 'react';
import './index.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Snackbar from 'material-ui/Snackbar';
import EditMenu from './components/EditMenu';
import EditServiceDialog from './components/EditServiceDialog';
import Service from './models/service';
import os from 'os';
import axios from 'axios';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorOpen: false,
            notify: false,
            update: {
                name: null,
            },
            model: []
        }
    }

    componentDidMount() {
        // Initial fetch.
        this.fetchServices();
    }

    fetchServicesAndPoll = () => {
        // Fetch and then poll to get update.
        setTimeout(() => {
            this.fetchServices()
            //this.refreshAndPoll(); ** uncomment to poll continuously
        }, 3000);
    }

    fetchServices() {
        axios.get(`/services`)
            .then(res => {
                return Promise.map(res.data, (seed) => {
                    return new Service(seed);
                })
            })
            .then(model => {
                console.log(`refesh state: ${JSON.stringify(model)}`);
                this.setState({model});
            });
    }

    openServiceEditor = (event) => {
        this.setState({
            editorOpen: true
        })
    }

    closeServiceEditor = () => {
        this.setState({
            editorOpen: false
        })
    }

    notify = (update) => {
        this.setState({
            notify: true,
            update: update
        })
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
                                return <TableRow key={service.metadata.id}>
                                    <TableRowColumn>{service.metadata.id}</TableRowColumn>
                                    <TableRowColumn>{service.display.name}</TableRowColumn>
                                    <TableRowColumn>{service.display.scale}</TableRowColumn>
                                    <TableRowColumn>{service.display.image}</TableRowColumn>
                                    <TableRowColumn>
                                       
                                        {
                                            service.display.ports.map(p => {
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
                                        
                                        <EditMenu onOpenSettings={this.openServiceEditor} />   

                                        <EditServiceDialog 
                                            editorOpen={this.state.editorOpen}
                                            onClose={this.closeServiceEditor}
                                            serviceIdentifier={service.metadata.id} 
                                            onRefresh={this.fetchServicesAndPoll} 
                                            onNotify={this.notify} 
                                        />

                                    </TableRowColumn>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>

                <Snackbar
                    open={this.state.notify}
                    message={`Updating ${this.state.update.name} service...`}
                    autoHideDuration={4000}
                   // onRequestClose={this.handleNotificationRequestClose}
                />
            </div>
        );
    };
}
