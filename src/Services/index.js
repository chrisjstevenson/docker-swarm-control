import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import ListItem from '../components/ListItem';
import ListItemMenu from '../components/ListItemMenu';
import AddItemButton from '../components/AddItemButton';
import AddItemDialog from '../components/AddItemDialog';
import Notification from '../components/Notification';
import AddServiceFields from './components/AddServiceFields';
import EditServiceDialog from './components/EditServiceDialog';
import os from 'os';
import * as api from '../api';
import './index.css';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    openEditServiceDialog = (targetServiceId) => {
        this.setState({ 
            visibility: {
                [targetServiceId]: true
            }
        })
    }

    closeEditServiceDialog = () => {
        this.setState({visibility: {}});
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
        let newService = this.state.newService;
        newService.ports = [];
        newService.ports.push({
            published: newService.published,
            target: newService.target
        })
        api.createNewServiceFromSpecification(newService);
        this.showNotify(`Creating a new service called ${newService.name}...`, 4000);
        this.fetchServicesAndPoll();
        this.closeAddServiceDialog();
    }

    handleChange = (name, value) => {
        let newService = this.state.newService ? this.state.newService : {};
        newService[name] = value;
        this.setState({newService})
    }

    removeService = (targetServiceId) => {
        api.deleteServiceById(targetServiceId);
        this.showNotify(`Removing service from Swarm...`, 4000)
        this.fetchServicesAndPoll();
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
                                            {/* <MenuItem primaryText="Edit" value={service.id} onClick={this.openServiceEditor} /> */}
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
                                    <EditServiceDialog open={this.state.visibility[service.id] ? true : false}
                                        onClose={this.closeEditServiceDialog}
                                        serviceIdentifier={service.id}   
                                        onRefresh={this.fetchServicesAndPoll}  />
                                  </Card>
                                </div>
                    })
                }                                        
                <AddItemButton onClick={this.openAddServiceDialog} />     
                <AddItemDialog open={this.state.createOpen}                                
                               onSubmit={this.submitNewServiceAndCloseDialog}
                               onClose={this.closeAddServiceDialog}
                               title={"Add Service"}>
                    <AddServiceFields onChange={this.handleChange}  />
                </AddItemDialog>    
                <Notification notifyOpen={this.state.notify.open} 
                              notifyMessage={this.state.notify.message}
                              notifyDuration={this.state.notify.duration}
                              notifyClose={this.hideNotify} />           
            </div>
        );
    }
}
