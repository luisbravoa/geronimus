import React from 'react';
import Item from './Item/Item';
import actions from '../../../actions/index';
import './tree.css';
export default class FileTree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        var data = this.props.data || [];

        data = data.filter(item => {
            return item.type !== 'file';
        });

        return (
            <ul id="Tree">
                {data.map((item, index)=>{

                    return (
                        <div key={item.fullpath + index}>
                            <Item data={item} onClick={(e)=>{ actions.move(item.fullpath)}}></Item>
                            {item.content && <FileTree data={item.content}></FileTree>}
                        </div>
                    );
                })}
            </ul>
        );
    }
}