export default class Service {
    constructor(base) {
        this.metadata = {
          id: base.ID,
          version: parseInt(base.Version.Index, 10),
          spec: base.Spec
        }

        this.properties = {
          name: base.Spec.Name,
          labels: base.Spec.Labels,
          scale: base.Spec.Mode.Replicated.Replicas,
          image: base.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0],
          ports: []
        }

        if (base.Spec.EndpointSpec && base.Spec.EndpointSpec.Ports) {
          this.properties.ports = base.Spec.EndpointSpec.Ports.map(spec => {
            return { 
              published: spec.PublishedPort, 
              target: spec.TargetPort
            }
          });
        }
      }
}


/*

{
  "Name": "pineapple",
  "Labels": {
    "crude": "word"
  },
  "TaskTemplate": {
    "ContainerSpec": {
      "Image": "chrisjstevenson/pineapple:latest@sha256:76625e913f2c5d4bc6f2ae2bfb88be467d8a1b69fde1f272322141dbc51e503a",
      "DNSConfig": {}
    },
    "Resources": {
      "Limits": {},
      "Reservations": {}
    },
    "Placement": {
      "Platforms": [
        {
          "Architecture": "amd64",
          "OS": "linux"
        }
      ]
    },
    "ForceUpdate": 0,
    "Runtime": "container"
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
}


*/