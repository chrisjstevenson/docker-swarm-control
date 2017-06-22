const apiController = require('./apiController');

module.exports = function(app) {
    app.get('/swarm', apiController.getSwarm);
    app.get('/nodes', apiController.getAllNodes);
    app.get('/services', apiController.getAllServices);
    app.get('/tasks', apiController.getAllTasks);

    app.use(function(req, res, next) {
        res.redirect('/');
    });
};