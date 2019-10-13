// eslint-disable-next-line
import React, { Component } from "react";
import axios from 'axios';
import toastr from 'toastr';

class SearchStudentPage extends Component {

    state = {
        firstname: "",
        lastname: "",
        birthdate: "",
    };

    componentDidMount() {
        document.title = "Search student";
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "birthdate": this.state.birthdate,
        }

        axios.post("http://d24w27cd80vt93.cloudfront.net/api/student/search", data).then(res => {
                if(res.data.length > 0) {
                    toastr.success("Found student with this information!");
                } else {
                    toastr.error("No student found with this information!");
                }
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="fas fa-graduation-cap icon-gradient bg-mean-fruit">
                                    </i>
                                </div>
                                <div>
                                    Search Student
                                </div>
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
                                                    <label className="">First Name</label>
                                                    <input name="firstname" value={this.state.firstname} onChange={this.onChange} placeholder="First Name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Last Name</label>
                                                    <input name="lastname" value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Bith date</label>
                                                    <input name="birthdate" value={this.state.birthdate} onChange={this.onChange} placeholder="dd/mm/yyyy" type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="mt-1 btn btn-primary" onClick={this.onSubmit}>Search</button>
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

export default SearchStudentPage;
