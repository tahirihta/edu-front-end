// eslint-disable-next-line
import React, { Component } from "react";
import axios from 'axios';
import toastr from 'toastr';

class CreateStudentPage extends Component {

    state = {
        firstname: "",
        lastname: "",
        birthdate: "",
        nationality: "",
        email: "",
        postaladress: "",
        nic: ""
    };

    componentDidMount() {
        document.title = "Create student";
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "birthdate": this.state.birthdate,
            "nationality": this.state.nationality,
            "email": this.state.email,
            "postaladress": this.state.postaladress,
            "nic": this.state.nic
        }

        axios.post("http://d24w27cd80vt93.cloudfront.net/api/student/addStudent", data)
            .then(res => toastr.success("Student successfully created"))
            .catch(err => toastr.success("Something wrong"));
    };

    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="pe-7s-car icon-gradient bg-mean-fruit">
                                    </i>
                                </div>
                                <div>
                                    Add New Student
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Controls Types</h5> */}
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">First Name</label>
                                                    <input name="firstname" onChange={this.onChange} placeholder="First Name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Last Name</label>
                                                    <input name="lastname" onChange={this.onChange} placeholder="Last Name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Bith date</label>
                                                    <input name="birthdate" onChange={this.onChange} placeholder="dd/mm/yyyy" type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Email</label>
                                                    <input name="email" onChange={this.onChange} placeholder="Email" type="email" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Postal Address</label>
                                                    <input name="postaladress" onChange={this.onChange} placeholder="Postal Address" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Nationality</label>
                                                    <input name="nationality" onChange={this.onChange} placeholder="Nationality" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">NIC</label>
                                                    <input name="nic" onChange={this.onChange} placeholder="NIC" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="mt-1 btn btn-primary" onClick={this.onSubmit}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStudentPage;
