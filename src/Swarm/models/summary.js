export default class Summary {
    constructor(base) {
        this.id = base.ID;
        this.name = base.Spec.Name;
        this.token = base.JoinTokens.Worker
    }
}