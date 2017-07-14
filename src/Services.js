import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import _ from 'lodash';
import {getServiceData, getNode} from './util/swarm-api.js'
import './Services.css';

export default class Services extends Component {

    constructor() {
        super();
        this.state = {services: [], tasks: [], nodes: []}
    }

    getServices() {
        getServiceData()
            .then(({services, tasks, nodes}) => {
                this.setState({services, tasks, nodes})
        });
    }

    componentDidMount() {
        this.getServices();
    }

    render() {
        const {services, tasks} = this.state;
        return (
            <div className="Container">
                <div>Services</div>
                    <ServiceTable serviceData={services}
                                  tasksData={tasks}
                    />
            </div>
        );
    };
}

class ServiceTable extends Component {
    render() {
        return (

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
                             // for each service in the cluster
                            this.props.serviceData.map(svc => {
                              return <TableRow key={svc.ID}>
                                  <TableRowColumn>{svc.ID}</TableRowColumn>
                                  <TableRowColumn>{svc.Spec.Name}</TableRowColumn>
                                  <TableRowColumn>{svc.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0]}</TableRowColumn>
                                  <TableRowColumn>
                                      {
                                          _.filter(this.props.tasksData, (t) => { return t.ServiceID === svc.ID }).map(tsk => {
                                              return <ServiceLink key={tsk.ID} task={tsk} />
                                          })
                                      }
                                  </TableRowColumn>
                              </TableRow>
                            })
                         }
                     </TableBody>
                </Table>

        )
    }
}

class ServiceLink extends Component {
    constructor() {
        super();
        this.state = { ip: '' }
    }

    componentDidMount() {
        getNode(this.props.task.NodeID)
            .then(nodeData => {
                this.setState({ip: nodeData.Status.Addr})
            });
    }

    render() {
        let ip = this.state.ip;
        let port = this.props.task.Status.PortStatus.Ports[0].PublishedPort;

        return (
            <a className="Service-link" href={`http://${ip}:${port}`} target="_blank" rel="noopener noreferrer">{port}</a>
        )
    }
}
