const apiController = require('./apiController');

module.exports = function(app) {
    app.get('/swarm', apiController.getSwarm);
    app.get('/nodes', apiController.getAllNodes);
    app.get('/services', apiController.getAllServices);
    app.get('/tasks', apiController.getAllTasks);
    app.get('/nodes/:nodeId', apiController.getNode);

    app.get('/v1.24/version', apiController.getVersion);
    app.get('/v1.24/services', apiController.getAllServices);
    app.get('/v1.24/tasks', apiController.getAllTasks);
    app.get('/v1.24/networks', apiController.getNetworks);

    app.get('/', apiController.getVersion);

    app.use(function(req, res, next) {
        res.sendStatus(404);
    });
};