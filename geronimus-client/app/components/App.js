import React from 'react';
import Navigation from './Navigation';
import Modal from './Modal';
import Loader from './Loader';
import FileExplorer from './FileExplorer/Explorer';
export default
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const {loading, route, selectedCourseId} = this.props;

        var modal;

        if (selectedCourseId !== undefined) {
            modal = <Modal {...this.props} id={selectedCourseId}/>;
        }

        var content, loader;
        if (loading === true) {
            loader = (<Loader></Loader>);
        }

        console.log(this.props);

        content = (
            <div id="ContentWrapper">
                <Navigation {...this.props}/>
                <FileExplorer {...this.props}/>
            </div>

        );



        return (
            <div>
                {loader}
                {content}
                {modal}
            </div>
        );
    }
}