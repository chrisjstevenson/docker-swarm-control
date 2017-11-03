import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import ListItem from '../components/ListItem';
import ListItemMenu from '../components/ListItemMenu';
import AddItemButton from '../components/AddItemButton';
import EditItemDialog from '../components/EditItemDialog';
import Notification from '../components/Notification';
import AddServiceFields from './components/AddServiceFields';
import EditServiceFields from './components/EditServiceFields';
import os from 'os';
import * as api from '../api';
import './index.css';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDirty: false,
            editOpen: false,
            createOpen: false,
            services: [],
            visibility: {},  //** edit service visibility */
            notify: {
                open: false,
                message: "",
                duration: 4000
            }
        }
    }

    componentDidMount() {
        this.initialize()
    }

    
    shouldComponentUpdate() {
        return !this.state.createOpen;
    }    

    initialize() {
        api.getAllServices()
            .then(services => {
                this.setState({services})
            })
    }

    fetchServicesAndPoll = () => {
        // Fetch and then poll to get update.
        setTimeout(() => {
            this.initialize()
            //this.refreshAndPoll(); ** uncomment to poll continuously
        }, 3000);
    }

    openEditServiceDialog = (guid) => {
        api.getServiceById(guid)
            .then(target => {
                this.setState({ 
                    target: target,
                    visibility: {
                        [guid]: true
                    }
                })
            })
    }

    closeEditServiceDialog = () => {
        this.setState({visibility: {}});
        this.forceUpdate();
    }

    openAddServiceDialog = () => {
        this.setState({
            createOpen: true
        })
    }

    closeAddServiceDialog = () => {
        this.setState({
            createOpen: false
        })
        this.forceUpdate();
    }

    submitNewServiceAndCloseDialog = () => {
        let target = this.state.target;
        target.ports = [];
        target.ports.push({
            published: target.published,
            target: target.target
        })
        api.createNewServiceFromSpecification(target);
        this.showNotify(`Creating a new service called ${target.name}...`, 4000);
        this.fetchServicesAndPoll();
        this.closeAddServiceDialog();
    }

    submitEditServiceAndCloseDialog = (guid) => {
        if (!this.state.isDirty) {
            this.closeEditServiceDialog();
            return;
        }
        api.updateServiceSpecification(guid, this.state.target);
        this.flash(`Updating ${this.state.target.name} service...`, 3000);
        this.fetchServicesAndPoll();
        this.closeEditServiceDialog();
    }

    handleFieldChange = (name, value) => {
        let target = this.state.target ? this.state.target : {};
        target[name] = value;

        if (name === 'published') {
            target.ports[0].published = value;
        }

        this.setState({
            isDirty: true,
            target: target
        })
    }

    removeService = (guid) => {
        api.deleteServiceById(guid);
        this.showNotify(`Removing service from Swarm...`, 4000)
        this.fetchServicesAndPoll();
    }

    flash(message, duration) {
        this.showNotify(message, duration);
    }

    showNotify(message, duration) {
        this.setState({
            notify: {
                open: true,
                message: message,
                duration: duration
            }
        })
    }

    hideNotify = () => {
        this.setState({
            notify: {
                open: false,
                message: "",
                duration: 4000
            }
        })
    }

    render() {
        let key = 0;
        return (
            <div className="Container">
                {
                    this.state.services.map(service => {
                        return <div className="Service-Details" key={service.id}>
                                <Card>
                                    <div className="ListItem">               
                                        <CardTitle title={service.name} subtitle={service.image} />
                                        <ListItemMenu>
                                            <ListItem primaryText="Edit" value={service.id} onClick={this.openEditServiceDialog} />
                                            <ListItem primaryText="Remove" value={service.id} onClick={this.removeService} />
                                        </ListItemMenu>
                                    </div>
                                    <CardText>                                    
                                        <div className='Service-Detail'>
                                            Replicas:<span className="Service-Detail-Value">{service.scale}</span>
                                        </div>
                                        <div className='Service-Detail'>Endpoint:
                                            <span className="Service-Detail-Value">
                                            {
                                                service.ports.map(port => {
                                                    key++;
                                                    return <a
                                                    key={key}
                                                    href={`http://${os.hostname()}:${port.published}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer">{port.published}
                                                    </a>
                                                })
                                            }
                                            </span>
                                        </div>
                                    </CardText> 
                                    <EditItemDialog open={this.state.visibility[service.id] ? true : false}
                                        itemIdentifier={service.id}
                                        onClose={this.closeEditServiceDialog}  
                                        onSubmit={this.submitEditServiceAndCloseDialog}
                                        onRefresh={this.fetchServicesAndPoll}
                                        title={`Edit ${service.name}`}>
                                        <EditServiceFields target={service} onChange={this.handleFieldChange} />
                                    </EditItemDialog>    
                                  </Card>
                                </div>
                    })
                }                                        
                <AddItemButton onClick={this.openAddServiceDialog} />     
                <EditItemDialog open={this.state.createOpen}                                
                               onSubmit={this.submitNewServiceAndCloseDialog}
                               onClose={this.closeAddServiceDialog}
                               title={"Add Service"}>
                    <AddServiceFields onChange={this.handleFieldChange}  />
                </EditItemDialog>    
                <Notification notifyOpen={this.state.notify.open} 
                              notifyMessage={this.state.notify.message}
                              notifyDuration={this.state.notify.duration}
                              notifyClose={this.hideNotify} />           
            </div>
        );
    }
}
