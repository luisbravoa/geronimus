import React from 'react';
import './path.css';
import actions from '../../../actions/index';
export default class FileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        var {path} = this.props;
        var pathArray = path.split('/');

        pathArray.filter((p)=>{
                return (p !== '');
            });

        return (
            <div id="FilePath">
                {pathArray.map((p, index)=>{
                    return <div className="path" key={p + index} onClick={()=>{
                        var pathToGoTo = pathArray.slice(0, index).join('/');
                        actions.move(pathToGoTo);
                    }}>{p}</div>
                })}
            </div>
        );
    }
}