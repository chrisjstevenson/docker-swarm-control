import React, { Component } from 'react';

class Tasks extends Component {

    render() {
        return (
            <div>hi i'm tasks</div>
        );
    };
}

export default Tasks;


// import {
//     Table,
//     TableBody,
//     TableHeader,
//     TableHeaderColumn,
//     TableRow,
//     TableRowColumn,
// } from 'material-ui/Table';

// render() {
//     let key = 0;
//     return (
//         <div className="Container">
//             <div>Services</div>
//             <Table>
//                 <TableHeader displaySelectAll={false}>
//                     <TableRow>
//                         <TableHeaderColumn>id</TableHeaderColumn>
//                         <TableHeaderColumn>name</TableHeaderColumn>
//                         <TableHeaderColumn>replicas</TableHeaderColumn>
//                         <TableHeaderColumn>image</TableHeaderColumn>
//                         <TableHeaderColumn>published ports</TableHeaderColumn>
//                         <TableHeaderColumn />
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         this.state.services.map(service => {
//                             return <TableRow key={service.metadata.id}>
//                                 <TableRowColumn>{service.metadata.id}</TableRowColumn>
//                                 <TableRowColumn>{service.properties.name}</TableRowColumn>
//                                 <TableRowColumn>{service.properties.scale}</TableRowColumn>
//                                 <TableRowColumn>{service.properties.image}</TableRowColumn>
//                                 <TableRowColumn>
                                   
//                                     {
//                                         service.properties.ports.map(port => {
//                                             key++;
//                                             return <a
//                                               key={key}
//                                               className="Service-link"
//                                               href={`http://${os.hostname()}:${port.published}`}
//                                               target="_blank"
//                                               rel="noopener noreferrer">{port.published}
//                                             </a>
//                                         })
//                                     }

//                                 </TableRowColumn>
//                                 <TableRowColumn>
//                                     <EditMenu onOpenSettings={this.openServiceEditor} />   
//                                     <EditServiceDialog 
//                                         editorOpen={this.state.editorOpen}
//                                         onClose={this.closeServiceEditor}
//                                         serviceIdentifier={service.metadata.id} 
//                                         onRefresh={this.fetchServicesAndPoll} 
//                                         onNotify={this.notify} 
//                                     />
//                                 </TableRowColumn>
//                             </TableRow>
//                         })
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };