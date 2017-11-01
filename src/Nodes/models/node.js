export default class Node {
    
    constructor(base) {
        this.id = base.ID;
        this.hostname = base.Description.Hostname;
        this.status = base.Status.State;
        this.address = base.Status.Addr  
    }
    
}