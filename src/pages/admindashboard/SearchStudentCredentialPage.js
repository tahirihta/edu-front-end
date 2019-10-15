// eslint-disable-next-line
import React, { Component } from "react";
import axios from "axios";
import toastr from "toastr";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class SearchStudentCredentialPage extends Component {
    state = {
        firstname: "",
        lastname: "",
        programname: "",
        university: "",
        modal: false,
        student: {}
    };

    componentDidMount() {
        document.title = "Search student credential";
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();

        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            programname: this.state.programname,
            university: this.state.university
        };

        axios
            .post(
                "http://d24w27cd80vt93.cloudfront.net/api/digCred/search",
                data
            )
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        modal: true,
                        student: res.data[0]
                    });
                    toastr.success(
                        "Found student credential with this information!"
                    );
                } else {
                    toastr.error(
                        "No student credential found with this information!"
                    );
                }
            })
            .catch(err => toastr.error("Something went wrong!"));
    };

    toggle = e => {
        e.preventDefault();

        this.setState({
            modal: !this.state.modal,
            firstname: "",
            lastname: "",
            programname: "",
            university: ""
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
                                    <i className="fas fa-graduation-cap icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>Search Student Credential</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">
                                                        First Name
                                                    </label>
                                                    <input
                                                        name="firstname"
                                                        value={
                                                            this.state.firstname
                                                        }
                                                        onChange={this.onChange}
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
                                                        name="lastname"
                                                        value={
                                                            this.state.lastname
                                                        }
                                                        onChange={this.onChange}
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
                                                        Program Name
                                                    </label>
                                                    <input
                                                        name="programname"
                                                        value={
                                                            this.state
                                                                .programname
                                                        }
                                                        onChange={this.onChange}
                                                        placeholder="Program Name"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">
                                                        University
                                                    </label>
                                                    <input
                                                        name="university"
                                                        value={
                                                            this.state
                                                                .university
                                                        }
                                                        onChange={this.onChange}
                                                        placeholder="University"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="mt-1 btn btn-primary"
                                            onClick={this.onSubmit}
                                        >
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="d-inline-block mb-2 mr-2">
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>
                                Found student credential
                            </ModalHeader>
                            <ModalBody>
                                <form className="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label className="">
                                                    Digital Credential Id
                                                </label>
                                                <input
                                                    defaultValue={
                                                        this.state.student
                                                            .digitalcredid
                                                    }
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
                                                    defaultValue={
                                                        this.state.student.email
                                                    }
                                                    placeholder="Email"
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
                                                    Type of Credential
                                                </label>
                                                <input
                                                    defaultValue={
                                                        this.state.student
                                                            .type_digital_credential
                                                    }
                                                    placeholder="Type of Credential"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label className="">
                                                    Program Name
                                                </label>
                                                <input
                                                    defaultValue={
                                                        this.state.student
                                                            .programname
                                                    }
                                                    placeholder="Program Name"
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
                                                    Postal Address
                                                </label>
                                                <input
                                                    defaultValue={
                                                        this.state.student
                                                            .postaladress
                                                    }
                                                    placeholder=" Postal Address"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <label className="">NIC</label>
                                                <input
                                                    defaultValue={
                                                        this.state.student.nic
                                                    }
                                                    placeholder="Email"
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>
                                    Done
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </span>
                </div>
            </div>
        );
    }
}

export default SearchStudentCredentialPage;
