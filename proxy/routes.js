const controller = require('./controller');

module.exports = function(app) {
    // Default routes
    app.get('/swarm', controller.getSwarm);
    app.get('/nodes', controller.getAllNodes);
    app.get('/services', controller.getAllServices);
    app.get('/services/:id', controller.getServiceById);
    app.post('/services/:id/update', controller.updateService);
    app.post('/services/create', controller.createService);
    app.delete('/services/:id', controller.deleteService);
    app.get('/tasks', controller.getAllTasks);
    app.get('/nodes/:id', controller.getNodeById);

    // Support for windows routes
    app.get('/v1.24/version', controller.getVersion);
    app.get('/v1.24/services', controller.getAllServices);
    app.get('/v1.24/tasks', controller.getAllTasks);
    app.get('/v1.24/networks', controller.getNetworks);

    app.get('/', controller.getVersion);

    app.use(function(req, res, next) {
        res.sendStatus(404);
    });
};