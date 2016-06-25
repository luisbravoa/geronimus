import React from 'react';
import Item from './Item/Item';
import './list.css';
export default class FileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        var {list} = this.props;

        return (
            <div id="FileList">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((file)=>{
                            return <Item data={file} key={file.fullpath}></Item>
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}