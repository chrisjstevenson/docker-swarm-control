const assert = require('chai').assert;
const bluebird = global.Promise = require('bluebird');
const client = require('./wrapper');

const nodeId = 'q4uspon353dljf83pjctxi3nm';
const serviceName = 'w1';

describe('Feature: Management', function() {

    describe('Story: Connect', function () {

        // it('Should be Ok', function (done) {
        //     assert.isOk('everything', 'everything is ok');
        //     done();
        // });

        it('Should inspect Swarm', function (done) {
            client.get('/swarm')
                .then(res => {
                    assert.equal(res.statusCode, 200);
                    let data = JSON.parse(res.body);
                    //console.log(data);
                    assert.exists(data.ID);
                    assert.exists(data.CreatedAt);
                    assert.equal('default', data.Spec.Name);
                    assert.exists(data.JoinTokens.Worker);
                    assert.exists(data.JoinTokens.Manager);
                    done();
                })
        });

        it('Should get Join Command');
    });

    describe('Story: Node', function () {

        it('Should list Nodes', function (done) {
            client.get('/nodes')
                .then(res => {
                   assert.equal(res.statusCode, 200);
                   let data = JSON.parse(res.body);
                   //console.log(data);
                   assert.exists(data[0]);
                   assert.exists(data[0].ID);
                   assert.exists(data[0].Description.Hostname);
                   assert.equal('manager', data[0].Spec.Role);
                   assert.equal('active', data[0].Spec.Availability);
                   assert.equal('x86_64', data[0].Description.Platform.Architecture);
                   assert.equal('windows', data[0].Description.Platform.OS);
                   assert.equal('17.03.1-ee-3', data[0].Description.Engine.EngineVersion);
                   assert.equal('ready', data[0].Status.State);
                   assert.exists(data[0].Status.Addr);
                   assert.equal(true, data[0].ManagerStatus.Leader);
                   assert.equal('reachable', data[0].ManagerStatus.Reachability);
                   assert.exists(data[0].ManagerStatus.Addr);
                   done();
                });
        });


        /* Notes on Updating Entities:
           node ID: q4uspon353dljf83pjctxi3nm
           version number: will depend on current state of node.
           If you don't include an attr, it will be removed
           Incorrectly stated attrs will not be added but still return 200ok

             post /nodes/{id}/update?version={current_version}
             {
                 "Name": "fussy_bunny",
                 "Role": "manager",
                 "Availability": "active"
             }

         */
        it('Should add a name to a Node', function (done) {
            let name = 'fussy_bunny';
            client.get(`/nodes/${nodeId}`)
                .then(res => {
                    let data = JSON.parse(res.body);
                    assert.equal(res.statusCode, 200);
                    return data.Version.Index
                })
                .then(version => {

                    // This updates the node's Spec, you must
                    //  include Availability and Role
                    let update = {
                        Availability: 'active',
                        Name: name,
                        Role: 'manager'
                    };

                    return client.post(`/nodes/${nodeId}/update?version=${version}`, update);
                })
                .then(response => {
                    console.debug(`Updating ${nodeId}'s Name to be ${name}`);
                    assert.equal(response.statusCode, 200);  // no body when 200OK
                    done();
                })
                .catch(err => {
                    console.error(err.message)
                });
        });

        it('Should add a Label to a Node', function (done) {

            // Prereq: get the entity version first
            client.get(`/nodes/${nodeId}`)
                .then(res => {
                    let data = JSON.parse(res.body);
                    assert.equal(res.statusCode, 200);
                    return data.Version.Index
                })
                .then(version => {

                    //console.log(version);

                    // This updates the node's Spec, you must
                    //  include Availability and Role
                    let update = {
                        Labels: {
                            LoadBalancer: 'True'
                        },
                        Availability: 'active',
                        Role: 'manager'
                    };

                    return client.post(`/nodes/${nodeId}/update?version=${version}`, update);
                })
                .then(response => {
                    assert.equal(response.statusCode, 200);  // no body when 200ok
                    done();
                })
                .catch(err => {
                    console.error(err.message)
                });

        });
    });

    describe('Story: Services', function () {

        // Prereqs: Need to have service running, with some replicas:
        //
        //  docker service create --name=n1 --replicas 4 --publish mode=host,target=9002 --endpoint-mode dnsrr chrisjstevenson/nodejs-starter node app.js
        //  ID            NAME  IMAGE                                  NODE           DESIRED STATE  CURRENT STATE           ERROR  PORTS
        //  wt9ua7bmrcqn  n1.1  chrisjstevenson/nodejs-starter:latest  LBW03XXXXX73C  Running        Running 22 seconds ago         *:35325->9002/tcp
        //  pwpfc4cwwuzs  n1.2  chrisjstevenson/nodejs-starter:latest  LBW03XXXXX73C  Running        Running 22 seconds ago         *:57001->9002/tcp
        //  7mkdttln9eov  n1.3  chrisjstevenson/nodejs-starter:latest  LBW03XXXXX73C  Running        Running 23 seconds ago         *:63124->9002/tcp
        //  j5j797clh3s5  n1.4  chrisjstevenson/nodejs-starter:latest  LBW03XXXXX73C  Running        Running 22 seconds ago         *:34363->9002/tcp

        it('Should list Services', function (done) {

            client.get('/services')
                .then(response => {
                    let data = JSON.parse(response.body)[0]; //take first expected service
                    assert.exists(data.ID);
                    assert.equal(data.Spec.Name, 'n1');
                    assert.equal(data.Spec.Mode.Replicated.Replicas, 4);
                    assert.exists(data.Spec.TaskTemplate.ContainerSpec.Image);
                    done();
                })

        });

        it('Should create a Service', function (done) {

            let serviceDescription = {
                Name: serviceName,
                TaskTemplate: {
                    ContainerSpec: {
                        Image: 'chrisjstevenson/nodejs-starter:latest@sha256:e5dacb6240c51668781863f75db38e8c82a20733954b86b680500b8e734afa3e',
                        Args: [
                            'node',
                            'app.js'
                        ],
                        DNSConfig: {}
                    },
                    Resources: {
                        Limits: {},
                        Reservations: {}
                    },
                    RestartPolicy: {
                        Condition: 'on-failure',  // or any
                        Delay: 10000000000,  // or don't specify
                        MaxAttempts: 10  // or 0 for infinite
                    },
                    Mode: {
                        Replicated: {
                            Replicas: 2
                        },
                        UpdateConfig: {
                            Parallelism: 1,
                            FailureAction: 'pause',
                            MaxFailureRatio: 0
                        },
                        EndpointSpec: {
                            Mode: 'dnsrr',
                            Ports: [
                                {
                                    Protocol: 'tcp',
                                    TargetPort: 9002,
                                    PublishMode: 'host'
                                }
                            ]
                        }

                    }
                }
            };

            client.post('/services/create', serviceDescription)
                .then(response => {
                   //console.log(response.body);
                   assert.equal(response.statusCode, 201);
                   done();
                });
        });

        it('Should remove a Service', function (done) {
            client.delete(`/services/${serviceName}`)
                .then(response => {
                    assert.equal(response.statusCode, 200);
                    done();
                })
        });
    });


    // Note; Tasks are the atomic scheduling unit within Swarm, you can list and inspect
    //  but you manage at a Service level, see Story: Services.
    describe('Story: Tasks', function (done) {

        it ('Should list Tasks', function (done) {

            client.get('/tasks')
                .then(response => {
                    let data = JSON.parse(response.body)[0];  //asserting the first
                    assert.exists(data.ID);
                    assert.exists(data.Spec);
                    assert.exists(data.Slot);
                    assert.exists(data.CreatedAt);
                    assert.exists(data.UpdatedAt);
                    assert.exists(data.NodeID);
                    assert.equal(data.Status.State, 'running');
                    assert.exists(data.Status.ContainerStatus.ContainerID);
                    done()
                });

        });

        it ('Should list Port Mapping', function (done) {

            client.get('/tasks')
                .then(response => {
                    return JSON.parse(response.body);
                })
                .map(task => {
                   return task.Status.PortStatus.Ports; // yes you could have multiple ports mapped
                })
                .then(portInfo => {
                    //console.log(portInfo);
                    assert.equal(portInfo[0][0].Protocol, 'tcp');
                    assert.equal(portInfo[0][0].TargetPort, 9002);
                    assert.exists(portInfo[0][0].PublishedPort);
                    assert.equal(portInfo[0][0].PublishMode, 'host');
                    done();
                })
        });

    });

});