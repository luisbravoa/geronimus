import React from 'react';
import './item.css';
export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        var data = this.props.data;
        var icon = (data.type === 'file')? 'file':'folder';
        return (
            <tr>
                <td><i className={'fa fa-'+icon+' fa-lg'} aria-hidden="true"></i> {data.name}</td>
                <td>{data.size || '--'}</td>
                <td>{data.date}</td>
            </tr>
        );
    }
}