export {getSwarmData, getNodeData, getServiceData, getTasksData};

function getSwarmData() {
    return {
        "ID": "i288r9bt0wuhmyq8fmddsbg3x",
        "Version": {
            "Index": 295
        },
        "CreatedAt": "2017-08-02T16:38:16.336182918Z",
        "UpdatedAt": "2017-08-15T09:50:38.276524279Z",
        "Spec": {
            "Name": "default",
            "Labels": {},
            "Orchestration": {
                "TaskHistoryRetentionLimit": 5
            },
            "Raft": {
                "SnapshotInterval": 10000,
                "KeepOldSnapshots": 0,
                "LogEntriesForSlowFollowers": 500,
                "ElectionTick": 3,
                "HeartbeatTick": 1
            },
            "Dispatcher": {
                "HeartbeatPeriod": 5000000000
            },
            "CAConfig": {
                "NodeCertExpiry": 7776000000000000
            },
            "TaskDefaults": {},
            "EncryptionConfig": {
                "AutoLockManagers": false
            }
        },
        "JoinTokens": {
            "Worker": "SWMTKN-1-6aplaluzwzutvir98zzf8srqzlpy7fnsnrz32rveca83i1vrwv-65lcdpi5hgtg51r1r4su7na68",
            "Manager": "SWMTKN-1-6aplaluzwzutvir98zzf8srqzlpy7fnsnrz32rveca83i1vrwv-arv98emwsrwktxmdj9fuv4wct"
        }
    };
}

function getNodeData() {
    return [
        {
            "ID": "15fbf36l7woc27iqyfflu7ovg",
            "Version": {
                "Index": 287
            },
            "CreatedAt": "2017-08-02T16:39:34.756520701Z",
            "UpdatedAt": "2017-08-14T14:23:15.194047272Z",
            "Spec": {
                "Labels": {
                    "LoadBalancer": "True"
                },
                "Role": "manager",
                "Availability": "active"
            },
            "Description": {
                "Hostname": "my-vm-2",
                "Platform": {
                    "Architecture": "x86_64",
                    "OS": "linux"
                },
                "Resources": {
                    "NanoCPUs": 2000000000,
                    "MemoryBytes": 4125667328
                },
                "Engine": {
                    "EngineVersion": "17.05.0-ce",
                    "Plugins": [
                        {
                            "Type": "Network",
                            "Name": "bridge"
                        },
                        {
                            "Type": "Network",
                            "Name": "host"
                        },
                        {
                            "Type": "Network",
                            "Name": "macvlan"
                        },
                        {
                            "Type": "Network",
                            "Name": "null"
                        },
                        {
                            "Type": "Network",
                            "Name": "overlay"
                        },
                        {
                            "Type": "Volume",
                            "Name": "local"
                        }
                    ]
                }
            },
            "Status": {
                "State": "ready",
                "Addr": "10.0.2.4"
            },
            "ManagerStatus": {
                "Reachability": "reachable",
                "Addr": "10.0.2.4:2377"
            }
        },
        {
            "ID": "3li1944ftqit7q4eja6r3jynx",
            "Version": {
                "Index": 182
            },
            "CreatedAt": "2017-08-02T16:40:08.095384636Z",
            "UpdatedAt": "2017-08-10T21:50:39.675631389Z",
            "Spec": {
                "Labels": {},
                "Role": "worker",
                "Availability": "active"
            },
            "Description": {
                "Hostname": "my-vm-4",
                "Platform": {
                    "Architecture": "x86_64",
                    "OS": "linux"
                },
                "Resources": {
                    "NanoCPUs": 2000000000,
                    "MemoryBytes": 4125667328
                },
                "Engine": {
                    "EngineVersion": "17.05.0-ce",
                    "Plugins": [
                        {
                            "Type": "Network",
                            "Name": "bridge"
                        },
                        {
                            "Type": "Network",
                            "Name": "host"
                        },
                        {
                            "Type": "Network",
                            "Name": "macvlan"
                        },
                        {
                            "Type": "Network",
                            "Name": "null"
                        },
                        {
                            "Type": "Network",
                            "Name": "overlay"
                        },
                        {
                            "Type": "Volume",
                            "Name": "local"
                        }
                    ]
                }
            },
            "Status": {
                "State": "ready",
                "Addr": "10.0.2.8"
            }
        },
        {
            "ID": "a8oy021mkc2a3iu7w2673xnzs",
            "Version": {
                "Index": 186
            },
            "CreatedAt": "2017-08-02T16:39:05.406280407Z",
            "UpdatedAt": "2017-08-10T21:50:41.463827055Z",
            "Spec": {
                "Labels": {},
                "Role": "worker",
                "Availability": "active"
            },
            "Description": {
                "Hostname": "my-vm-1",
                "Platform": {
                    "Architecture": "x86_64",
                    "OS": "linux"
                },
                "Resources": {
                    "NanoCPUs": 2000000000,
                    "MemoryBytes": 4125667328
                },
                "Engine": {
                    "EngineVersion": "17.05.0-ce",
                    "Plugins": [
                        {
                            "Type": "Network",
                            "Name": "bridge"
                        },
                        {
                            "Type": "Network",
                            "Name": "host"
                        },
                        {
                            "Type": "Network",
                            "Name": "macvlan"
                        },
                        {
                            "Type": "Network",
                            "Name": "null"
                        },
                        {
                            "Type": "Network",
                            "Name": "overlay"
                        },
                        {
                            "Type": "Volume",
                            "Name": "local"
                        }
                    ]
                }
            },
            "Status": {
                "State": "ready",
                "Addr": "10.0.2.5"
            }
        },
        {
            "ID": "tx4z6t7wj2b7ov8smt0ntj1hj",
            "Version": {
                "Index": 176
            },
            "CreatedAt": "2017-08-02T16:38:16.336201718Z",
            "UpdatedAt": "2017-08-10T21:50:39.206567024Z",
            "Spec": {
                "Labels": {},
                "Role": "manager",
                "Availability": "active"
            },
            "Description": {
                "Hostname": "my-vm-0",
                "Platform": {
                    "Architecture": "x86_64",
                    "OS": "linux"
                },
                "Resources": {
                    "NanoCPUs": 2000000000,
                    "MemoryBytes": 4125667328
                },
                "Engine": {
                    "EngineVersion": "17.05.0-ce",
                    "Plugins": [
                        {
                            "Type": "Network",
                            "Name": "bridge"
                        },
                        {
                            "Type": "Network",
                            "Name": "host"
                        },
                        {
                            "Type": "Network",
                            "Name": "macvlan"
                        },
                        {
                            "Type": "Network",
                            "Name": "null"
                        },
                        {
                            "Type": "Network",
                            "Name": "overlay"
                        },
                        {
                            "Type": "Volume",
                            "Name": "local"
                        }
                    ]
                }
            },
            "Status": {
                "State": "ready",
                "Addr": "10.0.2.6"
            },
            "ManagerStatus": {
                "Leader": true,
                "Reachability": "reachable",
                "Addr": "10.0.2.6:2377"
            }
        }
    ];
}

function getServiceData() {
    return [
        {
            "ID": "jye5l21kxduceg9458j8qmko6",
            "Version": {
                "Index": 60
            },
            "CreatedAt": "2017-08-02T19:23:27.093877009Z",
            "UpdatedAt": "2017-08-02T19:41:59.9134243Z",
            "Spec": {
                "Name": "pineapple",
                "Labels": {},
                "TaskTemplate": {
                    "ContainerSpec": {
                        "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                        "DNSConfig": {}
                    },
                    "Resources": {
                        "Limits": {},
                        "Reservations": {}
                    },
                    "Placement": {},
                    "ForceUpdate": 0
                },
                "Mode": {
                    "Replicated": {
                        "Replicas": 4
                    }
                },
                "EndpointSpec": {
                    "Mode": "vip",
                    "Ports": [
                        {
                            "Protocol": "tcp",
                            "TargetPort": 8080,
                            "PublishedPort": 8080,
                            "PublishMode": "ingress"
                        }
                    ]
                }
            },
            "PreviousSpec": {
                "Name": "pineapple",
                "Labels": {},
                "TaskTemplate": {
                    "ContainerSpec": {
                        "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                        "DNSConfig": {}
                    },
                    "Resources": {
                        "Limits": {},
                        "Reservations": {}
                    },
                    "Placement": {},
                    "ForceUpdate": 0
                },
                "Mode": {
                    "Replicated": {
                        "Replicas": 20
                    }
                },
                "EndpointSpec": {
                    "Mode": "vip",
                    "Ports": [
                        {
                            "Protocol": "tcp",
                            "TargetPort": 8080,
                            "PublishedPort": 8080,
                            "PublishMode": "ingress"
                        }
                    ]
                }
            },
            "Endpoint": {
                "Spec": {
                    "Mode": "vip",
                    "Ports": [
                        {
                            "Protocol": "tcp",
                            "TargetPort": 8080,
                            "PublishedPort": 8080,
                            "PublishMode": "ingress"
                        }
                    ]
                },
                "Ports": [
                    {
                        "Protocol": "tcp",
                        "TargetPort": 8080,
                        "PublishedPort": 8080,
                        "PublishMode": "ingress"
                    }
                ],
                "VirtualIPs": [
                    {
                        "NetworkID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Addr": "10.255.0.6/16"
                    }
                ]
            }
        },
        {
            "ID": "ox6xpzudixomhitwtpo9hhp2z",
            "Version": {
                "Index": 195
            },
            "CreatedAt": "2017-08-11T16:05:40.24386375Z",
            "UpdatedAt": "2017-08-11T16:05:40.266361745Z",
            "Spec": {
                "Name": "multi-port",
                "Labels": {},
                "TaskTemplate": {
                    "ContainerSpec": {
                        "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                        "DNSConfig": {}
                    },
                    "Resources": {
                        "Limits": {},
                        "Reservations": {}
                    },
                    "Placement": {},
                    "ForceUpdate": 0
                },
                "Mode": {
                    "Replicated": {
                        "Replicas": 4
                    }
                },
                "EndpointSpec": {
                    "Mode": "vip",
                    "Ports": [
                        {
                            "Protocol": "tcp",
                            "TargetPort": 8080,
                            "PublishedPort": 8081,
                            "PublishMode": "ingress"
                        },
                        {
                            "Protocol": "tcp",
                            "TargetPort": 9002,
                            "PublishedPort": 9002,
                            "PublishMode": "ingress"
                        }
                    ]
                }
            },
            "Endpoint": {
                "Spec": {
                    "Mode": "vip",
                    "Ports": [
                        {
                            "Protocol": "tcp",
                            "TargetPort": 8080,
                            "PublishedPort": 8081,
                            "PublishMode": "ingress"
                        },
                        {
                            "Protocol": "tcp",
                            "TargetPort": 9002,
                            "PublishedPort": 9002,
                            "PublishMode": "ingress"
                        }
                    ]
                },
                "Ports": [
                    {
                        "Protocol": "tcp",
                        "TargetPort": 8080,
                        "PublishedPort": 8081,
                        "PublishMode": "ingress"
                    },
                    {
                        "Protocol": "tcp",
                        "TargetPort": 9002,
                        "PublishedPort": 9002,
                        "PublishMode": "ingress"
                    }
                ],
                "VirtualIPs": [
                    {
                        "NetworkID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Addr": "10.255.0.7/16"
                    }
                ]
            }
        }
    ];
}

function getTasksData() {
    return [
        {
            "ID": "03i4zqc5parhs37x9lpv44xvo",
            "Version": {
                "Index": 181
            },
            "CreatedAt": "2017-08-10T16:16:07.253480192Z",
            "UpdatedAt": "2017-08-10T21:50:39.452885605Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 18,
            "NodeID": "tx4z6t7wj2b7ov8smt0ntj1hj",
            "Status": {
                "Timestamp": "2017-08-10T16:34:22.456870031Z",
                "State": "failed",
                "Message": "started",
                "Err": "task: non-zero exit (0): No such container: pineapple.18.03i4zqc5parhs37x9lpv44xvo",
                "ContainerStatus": {
                    "ContainerID": "1587b25dcbc28471c075110beefd0a3115edf565a29bab566cd21b7d92a5d443",
                    "PID": 25802
                },
                "PortStatus": {}
            },
            "DesiredState": "shutdown",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 102
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-10T16:34:21.519731718Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.6/16"
                    ]
                }
            ]
        },
        {
            "ID": "1hqhdpys1ds1mr771b80svkpa",
            "Version": {
                "Index": 309
            },
            "CreatedAt": "2017-08-02T19:41:05.08197121Z",
            "UpdatedAt": "2017-08-15T14:54:46.327901025Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 5,
            "NodeID": "3li1944ftqit7q4eja6r3jynx",
            "Status": {
                "Timestamp": "2017-08-10T16:16:09.775527449Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "531283d3a8178e042aea9d27bf698e4ef664c30a356dd005479c526901375730",
                    "PID": 53446
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.26/16"
                    ]
                }
            ]
        },
        {
            "ID": "3z9zd7qf53da0y0fx7c73zdk1",
            "Version": {
                "Index": 308
            },
            "CreatedAt": "2017-08-11T16:05:40.279368141Z",
            "UpdatedAt": "2017-08-15T14:54:41.645954799Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "ox6xpzudixomhitwtpo9hhp2z",
            "Slot": 2,
            "NodeID": "3li1944ftqit7q4eja6r3jynx",
            "Status": {
                "Timestamp": "2017-08-15T14:54:41.031680056Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "88302a950d60333ef4b9a7fced807a1e99629074e877bd15d81cc2b37e94c70a",
                    "PID": 1189
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.9/16"
                    ]
                }
            ]
        },
        {
            "ID": "mv0xuydpwa5eovuffhosurqbg",
            "Version": {
                "Index": 181
            },
            "CreatedAt": "2017-08-10T16:34:22.550653702Z",
            "UpdatedAt": "2017-08-10T21:50:39.452837405Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 18,
            "NodeID": "tx4z6t7wj2b7ov8smt0ntj1hj",
            "Status": {
                "Timestamp": "2017-08-10T21:34:14.73156784Z",
                "State": "failed",
                "Message": "started",
                "Err": "task: non-zero exit (0): No such container: pineapple.18.mv0xuydpwa5eovuffhosurqbg",
                "ContainerStatus": {
                    "ContainerID": "2a17f0040ce47565e6b561b76257fd347d87f1d3fc7885402469a15f9397ba63",
                    "PID": 28090
                },
                "PortStatus": {}
            },
            "DesiredState": "shutdown",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 126
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-10T21:34:13.725846908Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.6/16"
                    ]
                }
            ]
        },
        {
            "ID": "qbikyq7cb6uiqxdfu3177z6zv",
            "Version": {
                "Index": 182
            },
            "CreatedAt": "2017-08-10T21:46:56.047718256Z",
            "UpdatedAt": "2017-08-10T21:50:39.675573689Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 18,
            "NodeID": "tx4z6t7wj2b7ov8smt0ntj1hj",
            "Status": {
                "Timestamp": "2017-08-10T21:50:39.243226521Z",
                "State": "failed",
                "Message": "started",
                "Err": "task: non-zero exit (0): No such container: pineapple.18.qbikyq7cb6uiqxdfu3177z6zv",
                "ContainerStatus": {
                    "ContainerID": "3075d7b009644d05982eba32c6ad521617378cd25f2fb834886294988a785668",
                    "PID": 57242
                },
                "PortStatus": {}
            },
            "DesiredState": "shutdown",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 172
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-10T21:50:38.274309494Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.6/16"
                    ]
                }
            ]
        },
        {
            "ID": "qp0rdpmorbxs9ia2y3ulcle9s",
            "Version": {
                "Index": 303
            },
            "CreatedAt": "2017-08-11T16:05:40.279401841Z",
            "UpdatedAt": "2017-08-15T14:54:23.729506599Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "ox6xpzudixomhitwtpo9hhp2z",
            "Slot": 3,
            "NodeID": "a8oy021mkc2a3iu7w2673xnzs",
            "Status": {
                "Timestamp": "2017-08-15T14:54:23.634417227Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "8291e37fa2c41b59b8e10207926b427a01890cf0ac9462244a99ed1c36179256",
                    "PID": 4729
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.11/16"
                    ]
                }
            ]
        },
        {
            "ID": "scr3997ctcs335oyhcclpn018",
            "Version": {
                "Index": 181
            },
            "CreatedAt": "2017-08-10T21:34:14.817048034Z",
            "UpdatedAt": "2017-08-10T21:50:39.452735105Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 18,
            "NodeID": "tx4z6t7wj2b7ov8smt0ntj1hj",
            "Status": {
                "Timestamp": "2017-08-10T21:46:55.963159062Z",
                "State": "failed",
                "Message": "started",
                "Err": "task: non-zero exit (0): No such container: pineapple.18.scr3997ctcs335oyhcclpn018",
                "ContainerStatus": {
                    "ContainerID": "9518c400437c614610f0797efec3a002ebb1a690280fa83e687a714e360e8408",
                    "PID": 55850
                },
                "PortStatus": {}
            },
            "DesiredState": "shutdown",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 148
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-10T21:46:54.904062441Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.6/16"
                    ]
                }
            ]
        },
        {
            "ID": "t7ql4x83x15h21bzs8uei4ixh",
            "Version": {
                "Index": 307
            },
            "CreatedAt": "2017-08-11T16:05:40.279430841Z",
            "UpdatedAt": "2017-08-15T14:54:33.953358404Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "ox6xpzudixomhitwtpo9hhp2z",
            "Slot": 4,
            "NodeID": "tx4z6t7wj2b7ov8smt0ntj1hj",
            "Status": {
                "Timestamp": "2017-08-15T14:54:31.879016216Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "ffa37b38df0cae29f8e0b253575897573b6c2a77fa790804c836002f18e0966a",
                    "PID": 28190
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.12/16"
                    ]
                }
            ]
        },
        {
            "ID": "tuxnbwkheuttp4k99g4bm4uir",
            "Version": {
                "Index": 305
            },
            "CreatedAt": "2017-08-11T16:05:40.279308641Z",
            "UpdatedAt": "2017-08-15T14:54:29.781965055Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "ox6xpzudixomhitwtpo9hhp2z",
            "Slot": 1,
            "NodeID": "15fbf36l7woc27iqyfflu7ovg",
            "Status": {
                "Timestamp": "2017-08-15T14:54:29.683547992Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "8d4e0c9741a4a24f1ee8d1864f4d741738e12280b8eb0a2f60c6d50974da325f",
                    "PID": 16284
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.8/16"
                    ]
                }
            ]
        },
        {
            "ID": "v21aoqkclf2j4s6kmujrgvlgv",
            "Version": {
                "Index": 303
            },
            "CreatedAt": "2017-08-02T19:23:27.113270387Z",
            "UpdatedAt": "2017-08-15T14:54:23.729696298Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 2,
            "NodeID": "a8oy021mkc2a3iu7w2673xnzs",
            "Status": {
                "Timestamp": "2017-08-10T16:16:08.425781334Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "00d55c30e95dc21681108537f042c201cc424f6ca365851bd945d41f4de31f3e",
                    "PID": 52500
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.10/16"
                    ]
                }
            ]
        },
        {
            "ID": "w4c9gxot06aect5l1n4cergvh",
            "Version": {
                "Index": 305
            },
            "CreatedAt": "2017-08-02T19:41:05.08257651Z",
            "UpdatedAt": "2017-08-15T14:54:29.781858656Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 20,
            "NodeID": "15fbf36l7woc27iqyfflu7ovg",
            "Status": {
                "Timestamp": "2017-08-10T16:16:10.02126892Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "c96d4d68b66db551ff45985d01f63a4faeedf1a8a3a0c37ce2d1174e003ebc62",
                    "PID": 53400
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.25/16"
                    ]
                }
            ]
        },
        {
            "ID": "xbkzc2podz5z8o5rysr0g4oyv",
            "Version": {
                "Index": 307
            },
            "CreatedAt": "2017-08-10T21:50:39.352827713Z",
            "UpdatedAt": "2017-08-15T14:54:33.953563803Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
                    "DNSConfig": {}
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "Placement": {},
                "ForceUpdate": 0
            },
            "ServiceID": "jye5l21kxduceg9458j8qmko6",
            "Slot": 18,
            "NodeID": "tx4z6t7wj2b7ov8smt0ntj1hj",
            "Status": {
                "Timestamp": "2017-08-15T14:54:31.878970416Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "85fdaab533512e3b2f3b128fef04b70faca2fb898db2d411e29c08da545f7d14",
                    "PID": 58173
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "ku50h4h9yxmwzdmciehodbjb7",
                        "Version": {
                            "Index": 297
                        },
                        "CreatedAt": "2017-08-02T16:38:16.336455712Z",
                        "UpdatedAt": "2017-08-15T14:54:06.527420743Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {},
                                "Configs": [
                                    {
                                        "Subnet": "10.255.0.0/16",
                                        "Gateway": "10.255.0.1"
                                    }
                                ]
                            }
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.255.0.0/16",
                                    "Gateway": "10.255.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.255.0.6/16"
                    ]
                }
            ]
        }
    ];
}