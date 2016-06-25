import React from 'react';
import './item.css';
export default class FileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        var data = this.props.data || [];
        var icon = 'folder';
        if(data.content !== undefined){
            icon += '-open';
        }
        
            return (
                <li id="TreeItem" onClick={this.props.onClick}><i className={'fa fa-'+icon+' fa-lg'} aria-hidden="true"></i> {data.name}</li>
            );
    }
}