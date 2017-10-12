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

    constructor(props) {
        super(props);
        this.state = {
            model: []
        }
    }

    componentDidMount() {
        if (this.props.serviceData) {
            
            console.log(this.props);

            let model = []
            this.props.serviceData.forEach(function(item) {
                model.push(new Service(item));
                console.log("added " + item);
            })

            console.log(model);

            this.setState({model})
        }
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
