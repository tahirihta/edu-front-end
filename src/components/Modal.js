import React, { Component } from "react";

class Modal extends Component {
    render() {
        return (
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label className="">
                                                First Name
                                            </label>
                                            <input
                                                name="sfirstname"
                                                placeholder="First Name"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label className="">
                                                Last Name
                                            </label>
                                            <input
                                                name="slastname"
                                                placeholder="Last Name"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label className="">
                                                Bith date
                                            </label>
                                            <input
                                                name="sbirthdate"
                                                placeholder="dd/mm/yyyy"
                                                type="date"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Search Student
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
