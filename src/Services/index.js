import React, { Component } from 'react';


// Todo: Move into "menu" component for re-use.
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import EditMenu from './components/EditMenu';
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
                                    <div className="Menu">
                                        <IconMenu
                                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                        >
                                            <MenuItem primaryText="Edit" onClick={this.openServiceEditor} />
                                        </IconMenu>
                                    </div>
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
