import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import config from './../config/config';
import './index.css';
import EditServiceMenu from './components/EditServiceMenu';
import os from 'os';

export default class Services extends Component {

    render() {

        let listOfServices = [];
        if (this.props.serviceData) {
            listOfServices = this.props.serviceData;
        }

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
                            // for each service
                            listOfServices.map(svc => {
                                return <TableRow key={svc.ID}>
                                    <TableRowColumn>{svc.ID}</TableRowColumn>
                                    <TableRowColumn>{svc.Spec.Name}</TableRowColumn>
                                    <TableRowColumn>{svc.Spec.Mode.Replicated.Replicas}</TableRowColumn>
                                    <TableRowColumn>{svc.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0]}</TableRowColumn>
                                    <TableRowColumn>
                                        {
                                            svc.Endpoint.Spec.Ports.map(p => {
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
                                    <TableRowColumn><EditServiceMenu serviceObject={svc} /></TableRowColumn>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    };
}
