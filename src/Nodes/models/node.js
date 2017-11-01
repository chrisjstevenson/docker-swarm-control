export default class Node {
    constructor(base) {
        this.id = base.ID;
        this.hostname = base.Description.Hostname;
        this.status = base.Status.State;
        this.address = base.Status.Addr  
        this.errors = []

        // Todo: move out of constructor 
        if (this.status !== 'ready') {
            this.errors.push("Host is not ready or host disconnected");
        }
    }
}