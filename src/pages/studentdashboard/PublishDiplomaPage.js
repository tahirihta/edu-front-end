import React, { Component } from "react";
import Axios from "axios";
import toastr from "toastr";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PublishDiplomaPage extends Component {
    componentDidMount() {
        document.title = "Publish Diploma";
    }

    state = {
        digitalCredId: "Choose diploma",
        modal: false,
        diplomas: [],
        student: {}
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmitPublish = e => {
        e.preventDefault();

        const data = {
            digitalCredId: this.state.digitalCredId
        };

        Axios.post(
            "http://d24w27cd80vt93.cloudfront.net/api/shared/publish",
            data
        )
            .then(res => {
                toastr.success("Diploma successfully published");
                this.setState({ digitalCredId: "" });
            })
            .catch(err => toastr.success("Something wrong"));
    };

    onValidate = e => {
        e.preventDefault();

        this.setState({
            modal: !this.state.modal
        });
    };

    toggle = e => {
        e.preventDefault();

        if (localStorage.studentInfo !== undefined) {
            const student = JSON.parse(localStorage.studentInfo);
            this.setState({ student: student });
        }

        this.setState(
            {
                modal: !this.state.modal
            },
            () => {
                if (this.state.modal) {
                    Axios.post(
                        "http://d24w27cd80vt93.cloudfront.net/api/digCred/search"
                    )
                        .then(res => {
                            this.setState({
                                diplomas: res.data.filter(
                                    x =>
                                        x.studentid ===
                                        this.state.student.studentid
                                )
                            });
                        })
                        .catch(err => toastr.error("Something went wromg"));
                }
            }
        );
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
                                <div>Publish Diploma</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h4>Publish Diploma</h4>
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">
                                                        Digital Credential Id
                                                    </label>
                                                    <input
                                                        readOnly
                                                        name="digitalCredId"
                                                        value={
                                                            this.state
                                                                .digitalCredId
                                                        }
                                                        onChange={this.onChange}
                                                        placeholder="Digital Credential Id"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">
                                                        Email
                                                    </label>
                                                    <input
                                                        onChange={this.onChange}
                                                        placeholder="Email"
                                                        type="email"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="mt-1 btn btn-primary"
                                            onClick={this.onSubmitPublish}
                                        >
                                            Publish
                                        </button>{" "}
                                        <button
                                            className="mt-1 btn btn-success"
                                            onClick={this.toggle}
                                        >
                                            Search Diploma
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
                                List of Credentials
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
                                                    name="digitalCredId"
                                                    value={
                                                        this.state.digitalCredId
                                                    }
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
                                                                        value.digitalcredid
                                                                    }
                                                                >
                                                                    {value.digitalcredid +
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

export default PublishDiplomaPage;
