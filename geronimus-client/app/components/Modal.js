import React from 'react';
import actions from '../actions/index';

export default
class Modal extends React.Component {

    openModal() {
        if ($('#modal').hasClass('in')) return;

        $('#modal').modal();
        $('#modal').on('hide.bs.modal', this.onClose.bind(this));
    }

    onClose() {

    }

    componentDidMount() {
        this.openModal();
    }

    render() {
        this.openModal();

        var action, error;

        if(this.props.error){
            error = (<div className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Looks like you have a problem.
            </div>);
        }


        return (
            <div className="modal fade photoModal" id="modal" tabindex="-1" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">Holas</h4></div>
                        <div className="modal-body">
                            <div className="row">

                                <div className="col-lg-6">
                                    {error}
                                    <h3>Description</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



