import React, { Component } from "react";
import Axios from "axios";
import toastr from "toastr";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class RevokeDiplomaPage extends Component {
    componentDidMount() {
        document.title = "Revoke Diploma";
    }

    state = {
        sharedId: "Choose diploma",
        modal: false,
        diplomas: [],
        student: {}
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmitRevoke = e => {
        e.preventDefault();

        if (this.state.sharedId) {
            Axios.delete(
                `http://d24w27cd80vt93.cloudfront.net/api/shared/revoke/${this.state.sharedId}`
            )
                .then(res => {
                    toastr.success("Diploma successfully revoked");
                    this.setState({ sharedId: "" });
                })
                .catch(err => toastr.warning("Something wrong"));
        } else {
            toastr.warning("Field is mandatory");
        }
    };

    toggle = e => {
        e.preventDefault();

        const student = JSON.parse(localStorage.studentInfo);

        this.setState(
            {
                modal: !this.state.modal
            },
            () => {
                if (this.state.modal) {
                    Axios.get(
                        "http://d24w27cd80vt93.cloudfront.net/api/shared/listAll/" +
                            student.studentid
                    )
                        .then(res => {
                            this.setState({
                                diplomas: res.data
                            });
                        })
                        .catch(err => toastr.error("Something went wromg"));
                }
            }
        );
    };

    onValidate = e => {
        e.preventDefault();

        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="fas fa-atom icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>Revoke Diploma</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h4>Revoke Diploma</h4>
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="position-relative form-group">
                                                    <label className="">
                                                        Shared Id
                                                    </label>
                                                    <input
                                                        readOnly
                                                        name="sharedId"
                                                        value={
                                                            this.state.sharedId
                                                        }
                                                        onChange={this.onChange}
                                                        placeholder="Shared Id"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="mt-1 btn btn-danger"
                                            onClick={this.onSubmitRevoke}
                                        >
                                            Revoke
                                        </button>{" "}
                                        <button
                                            className="mt-1 btn btn-success"
                                            onClick={this.toggle}
                                        >
                                            List Published Diploma
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="d-inline-block mb-2 mr-2">
                        <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggle}
                            size="lg"
                        >
                            <ModalHeader toggle={this.toggle}>
                                List of Published Diploma
                            </ModalHeader>
                            <ModalBody>
                                <form className="">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="position-relative form-group">
                                                <label className="">
                                                    Select Diploma
                                                </label>
                                                <select
                                                    name="sharedId"
                                                    value={this.state.sharedId}
                                                    onChange={this.onChange}
                                                    className="form-control"
                                                >
                                                    <option
                                                        disabled
                                                        defaultValue
                                                    >
                                                        Choose diploma
                                                    </option>
                                                    {this.state.diplomas.map(
                                                        (value, index) => {
                                                            return (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        value.sharedcredid
                                                                    }
                                                                >
                                                                    {value.sharedcredid +
                                                                        ", " +
                                                                        value.programname +
                                                                        ", " +
                                                                        value.type_digital_credential}
                                                                </option>
                                                            );
                                                        }
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    onClick={this.onValidate}
                                >
                                    Validate
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </span>
                </div>
            </div>
        );
    }
}

export default RevokeDiplomaPage;
