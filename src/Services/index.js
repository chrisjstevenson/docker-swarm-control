import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import ListItemMenu from '../components/ListItemMenu';
import AddItemButton from '../components/AddItemButton';
import AddItemDialog from '../components/AddItemDialog';
import AddServiceFields from './components/AddServiceFields';
import EditServiceDialog from './components/EditServiceDialog';
import os from 'os';
import * as api from '../api';
import './index.css';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorOpen: false,
            createOpen: false,
            services: []
        }
    }

    componentDidMount() {
        this.fetchServices()
    }

    fetchServicesAndPoll = () => {
        // Fetch and then poll to get update.
        setTimeout(() => {
            this.fetchServices()
            //this.refreshAndPoll(); ** uncomment to poll continuously
        }, 3000);
    }

    fetchServices() {
        api.getAllServices()
            .then(services => {
                //console.log(`refesh state: ${JSON.stringify(services)}`);
                this.setState({services});
        })
    }

    
    // createService() {
    //     axios.post(`/services/create`, createInstance("foo"))
    //         .then(res => {
    //             console.log(`created new service with id ${res.data.ID}`);
    //         })
    // }

    openServiceEditor = () => {
        this.setState({
            editorOpen: true
        })
    }

    closeServiceEditor = () => {
        this.setState({
            editorOpen: false
        })
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
    }

    handleChange = (name, value) => {
        let addService = this.state.addService ? this.state.addService : {};
        addService[name] = value;
        this.setState({addService})
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
                                            <MenuItem primaryText="Edit" onClick={this.openServiceEditor} />
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
                                    <EditServiceDialog 
                                            open={this.state.editorOpen}
                                            onClose={this.closeServiceEditor}
                                            serviceIdentifier={service.id} 
                                            onRefresh={this.fetchServicesAndPoll} 
                                    />   
                                  </Card>
                                </div>
                    })
                }
                <AddItemButton onClick={this.openAddServiceDialog} />
                <AddItemDialog open={this.state.createOpen}                                
                               onSubmit={this.closeAddServiceDialog}  //** or submit data and then close */
                               onClose={this.closeAddServiceDialog}
                               title={"Add Service"}>
                    <AddServiceFields onChange={this.handleChange}  />
                </AddItemDialog>               
            </div>
        );
    }
}
