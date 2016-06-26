import React from 'react';
import List from './List/List';
import Tree from './Tree/Tree';
import Path from './Path/Path';
import './explorer.css';

export default class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        var {tree, path, list} = this.props;

        return (
            <div id="FileExplorer" className="row">
                <div id="sidebar" className="col-md-4 col-sm-4 col-lg-4">
                    <Tree data={tree} path={path}/>
                </div>
                <div className="col-md-8 col-sm-48 col-lg-8">
                    <div>
                        <Path path={path}/>
                    </div>
                    <div>
                        <List list={list}/>
                    </div>
                </div>
            </div>
        );
    }
}