import React, { Component } from 'react';

export default class Services extends Component {

    constructor() {
        super();
        this.state = {allServices: []}
    }

    getServices() {
        fetch('/services')
            .then(res => res.json())
            .then(allServices => this.setState({allServices}));
    }

    componentDidMount() {
        this.getServices();
    }

    render() {
        const {allServices} = this.state;
        return (
            <div className="Info-left">
                <div>Services</div>
                {
                    allServices.map(serviceInfo => {
                        return <ul className="hostname" key={serviceInfo.ID}>
                            <li>ID:  {serviceInfo.ID}</li>
                            <li>Name: {serviceInfo.Spec.Name}</li>
                            <li>Image: {serviceInfo.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0]}</li>
                        </ul>
                    })}
            </div>
        );
    };
}