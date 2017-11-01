import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import ListItemMenu from '../components/ListItemMenu';
import EditServiceDialog from './components/EditServiceDialog';
import Service from './models/service';
import os from 'os';
import axios from 'axios';
import './index.css';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorOpen: false,
            notify: false,
            update: {
                name: null,
            },
            services: []
        }
    }

    componentDidMount() {
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
            .then(services => {
                console.log(`refesh state: ${JSON.stringify(services)}`);
                this.setState({services});
            });
    }

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

    render() {
        let key = 0;
        return (
            <div className="Container">
                {
                    this.state.services.map(service => {
                        return <Card key={service.metadata.id}>
                                <div className="ListItem">               
                                    <CardTitle title={service.properties.name} subtitle={service.properties.image} />
                                    <ListItemMenu>
                                        <MenuItem primaryText="Edit" onClick={this.openServiceEditor} />
                                    </ListItemMenu>
                                </div>

                                <CardText>                                    
                                    <div className='Service-Detail'>
                                        Replicas:<span className="Service-Detail-Value">{service.properties.scale}</span>
                                    </div>
                                    <div className='Service-Detail'>Endpoint:
                                        <span className="Service-Detail-Value">
                                        {
                                            service.properties.ports.map(port => {
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
                                         serviceIdentifier={service.metadata.id} 
                                         onRefresh={this.fetchServicesAndPoll} 
                                />   
                                </Card>
                    })
                }
            </div>
        );
    }
}
