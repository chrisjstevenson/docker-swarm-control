/*
  Created just for learning the Docker API
*/
const assert = require('chai').assert;
const bluebird = global.Promise = require('bluebird');
const client = require('./wrapper');

describe('Feature: Management', function() {

    describe('Story: Connect', function () {

        it('Should be Ok', function (done) {
            assert.isOk('everything', 'everything is ok');
            done();
        });

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

        it('Should get Join-Token', function(done) {
            client.get('/swarm')
                .then(res => {
                   assert.equal(res.statusCode, 200);
                   let data = JSON.parse(res.body);
                   assert.exists(data.JoinTokens.Worker);
                   done();
                });
        });
    });

    describe('Story: Node', function () {

        it('Should list Nodes', function (done) {
            client.get('/nodes')
                .then(res => {
                   assert.equal(res.statusCode, 200);
                   let nodeData = JSON.parse(res.body);
                   assert.isAtLeast(nodeData.length, 1);
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
            client.get(`/nodes`)
                .then(res => {
                    let nodeData = JSON.parse(res.body);
                    assert.equal(res.statusCode, 200);
                    return nodeData[0];
                })
                .then(targetNode => {

                    // This updates the node's Spec, you must
                    //  include Availability and Role
                    let update = {
                        Availability: 'active',
                        Name: name,
                        Role: 'manager'
                    };

                    return client.post(`/nodes/${targetNode.ID}/update?version=${targetNode.Version.Index}`, update);
                })
                .then(response => {
                    console.debug(`Updating node Name to be ${name}`);
                    assert.equal(response.statusCode, 200);  // no body when 200OK
                    done();
                })
                .catch(err => {
                    console.error(err.message)
                });
        });

        it('Should add a Label to a Node', function (done) {

            // Prereq: get the entity version first
            client.get(`/nodes`)
                .then(res => {
                    let nodeData = JSON.parse(res.body);
                    assert.equal(res.statusCode, 200);
                    return nodeData[0];
                })
                .then(targetNode => {

                    // This updates the node's Spec, you must
                    //  include Availability and Role
                    let update = {
                        Labels: {
                            LoadBalancer: 'True'
                        },
                        Availability: 'active',
                        Role: 'manager'
                    };

                    return client.post(`/nodes/${targetNode.ID}/update?version=${targetNode.Version.Index}`, update);
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
                    assert.isAtLeast(data.Spec.Mode.Replicated.Replicas, 1);
                    assert.exists(data.Spec.TaskTemplate.ContainerSpec.Image);
                    done();
                })

        });

        it('Should create a Service', function (done) {

            let serviceDescription = {
                Name: 'testable-service',
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
                            Replicas: 1
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
                .then(res => {
                   //console.log(response.body);
                   assert.equal(res.statusCode, 201);
                   done();
                });
        });

        it('Should remove a Service', function (done) {
            client.delete(`/services/testable-service`)
                .then(res => {
                    assert.equal(res.statusCode, 200);
                    done();
                })
        });
    });


    // Note; Tasks are the atomic scheduling unit within Swarm, you can list and inspect
    //  but you manage at a Service level, see Story: Services.
    describe('Story: Tasks', function (done) {

        it ('Should list Tasks', function (done) {

            client.get('/tasks')
                .then(res => {
                    assert.equal(res.statusCode, 200);
                    done()
                });

        });

        /*
            Needs to be revisited

         */

        // it ('Should list Port Mapping', function (done) {
        //
        //     client.get('/tasks')
        //         .then(res => {
        //             return JSON.parse(res.body);
        //         })
        //         .map(task => {
        //            return task.Status.PortStatus.Ports; // yes you could have multiple ports mapped
        //         })
        //         .then(portInfo => {
        //             console.log(portInfo);
        //             done();
        //         })
        // });

    });

});