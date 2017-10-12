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

export default class Services extends Component {

    render() {
        let key = 0;
        let allServices = [];
        if (this.props.serviceData) {
            this.props.serviceData.map(s => {
                return allServices.push(new Service(s));
            })
        }

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
                            allServices.map(service => {
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
                                        <EditServiceMenu target={service} />
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
