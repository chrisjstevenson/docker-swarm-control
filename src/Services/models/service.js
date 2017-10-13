import {updateService} from '../../util/swarm-api';

export default class Service {

    constructor(base) {
        this.spec = base.Spec;
        this.endpoint = base.Endpoint;
        this.id = base.ID;
        this.version = base.Version;
        this.name = base.Spec.Name;
        this.labels = base.Spec.Labels;
        this.scale = base.Spec.Mode.Replicated.Replicas;
        this.image = base.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0]
        
        // initialize ports from spec
        this.ports = [];
        if (this.endpoint.Ports) {
            this.ports = base.Spec.Endpoint.Spec.Ports;
        }
    }
    
    updateScale(newScale) {
        let updatedServiceDescription = {
            Spec: this.spec,
            Endpoint: this.endpoint
        }

        // Set update. Need to parse to integer for Docker API to accept this update
        updatedServiceDescription.Spec.Mode.Replicated.Replicas = parseInt(newScale);

        // Call api to do the update
        updateService(this.id, updatedServiceDescription)
    }
}