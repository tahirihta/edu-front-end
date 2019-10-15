// eslint-disable-next-line
import React, { Component } from "react";
import axios from "axios";
import toastr from "toastr";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as moment from "moment";

class SearchStudentPage extends Component {
    state = {
        firstname: "",
        lastname: "",
        birthdate: "",
        modal: false,
        students: []
    };

    componentDidMount() {
        document.title = "Search student";
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    toggle = e => {
        e.preventDefault();

        this.setState({
            modal: !this.state.modal,
            firstname: "",
            lastname: "",
            birthdate: ""
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            birthdate: this.state.birthdate
        };

        axios
            .post(
                "http://d24w27cd80vt93.cloudfront.net/api/student/search",
                data
            )
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        students: res.data,
                        modal: true
                    });
                    toastr.success("Found student with this information!");
                } else {
                    toastr.error("No student found with this information!");
                }
            })
            .catch(err => toastr.warning("Something went wrong"));
    };

    render() {
        const credentialsTable = this.state.students.map(
            (credential, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{credential.studentid}</th>
                        <td>{credential.firstname}</td>
                        <td>{credential.lastname}</td>
                        <td>{credential.email}</td>
                        <td>{credential.postaladress}</td>
                        <td>{credential.nationality}</td>
                        <td>
                            {moment(new Date(credential.birthdate)).format(
                                "YYYY-MM-DD"
                            )}
                        </td>
                        <td>{credential.nic}</td>
                    </tr>
                );
            }
        );
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="fas fa-graduation-cap icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>Search Student</div>
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
                                                        Bith date
                                                    </label>
                                                    <input
                                                        name="birthdate"
                                                        value={
                                                            this.state.birthdate
                                                        }
                                                        onChange={this.onChange}
                                                        placeholder="dd/mm/yyyy"
                                                        type="date"
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
                        <Modal
                            isOpen={this.state.modal}
                            toggle={this.toggle}
                            size="lg"
                        >
                            <ModalHeader toggle={this.toggle}>
                                Found student
                            </ModalHeader>
                            <ModalBody>
                                <table className="mb-0 table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#Student Id</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Postal Address</th>
                                            <th>Nationality</th>
                                            <th>Birth Date</th>
                                            <th>NIC</th>
                                        </tr>
                                    </thead>
                                    <tbody>{credentialsTable}</tbody>
                                </table>
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

export default SearchStudentPage;
