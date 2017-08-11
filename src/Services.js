import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import config from './config/config';
import {getServiceData} from './util/swarm-api.js';
import './Services.css';

export default class Services extends Component {

    constructor() {
        super();
        this.state = {services: [], nodes: []}
    }

    getServices() {
        getServiceData()
            .then(({services, nodes}) => {
                this.setState({services, nodes})
        });
    }

    componentDidMount() {
        this.getServices();
    }

    render() {
        const {services, nodes} = this.state;
        let key = 0;

        return (
            <div className="Container">
                <div>Services</div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>id</TableHeaderColumn>
                            <TableHeaderColumn>name</TableHeaderColumn>
                            <TableHeaderColumn>image</TableHeaderColumn>
                            <TableHeaderColumn>ports</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            // for each service
                            services.map(svc => {
                                return <TableRow key={svc.ID}>
                                    <TableRowColumn>{svc.ID}</TableRowColumn>
                                    <TableRowColumn>{svc.Spec.Name}</TableRowColumn>
                                    <TableRowColumn>{svc.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0]}</TableRowColumn>
                                    <TableRowColumn>
                                        {
                                            svc.Endpoint.Spec.Ports.map(p => {
                                                key++;
                                                return <a
                                                          key={key}
                                                          className="Service-link"
                                                          href={`http://${nodes[0].Description.Hostname}${config.dnsSuffix}:${p.PublishedPort}`}
                                                          target="_blank"
                                                          rel="noopener noreferrer">{p.PublishedPort}
                                                </a>

                                            })
                                        }
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
