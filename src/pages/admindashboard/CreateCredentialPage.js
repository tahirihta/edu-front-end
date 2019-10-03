import React, { Component } from 'react';

class CreateCredentialPage extends Component {
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
                                    Add New Digital Credential
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body"><h5 className="card-title">Controls Types</h5>
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleEmail" className="">First Name</label>
                                                    <input name="email" id="exampleEmail" placeholder="First Name" type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleEmail" className="">Last Name</label>
                                                    <input name="email" id="exampleEmail" placeholder="Last Name" type="email" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleEmail" className="">Bith date</label>
                                                    <input name="datte" id="exampleEmail" placeholder="dd/mm/yyyy" type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleEmail" className="">Score</label>
                                                    <input name="email" id="exampleEmail" placeholder="Score" type="email" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div class="position-relative form-group">
                                                    <label for="exampleSelect" class="">Choose Program name</label>
                                                    <select name="select" id="exampleSelect" class="form-control">
                                                        <option selected>Choose Program</option>
                                                        <option>CSE</option>
                                                        <option>IT</option>
                                                        <option>BCS</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="position-relative form-group">
                                                    <label for="exampleSelect" class="">Choose Student's Nationality</label>
                                                    <select name="select" id="exampleSelect" class="form-control">
                                                        <option selected>Choose Nationality</option>
                                                        <option>Bangladesh</option>
                                                        <option>USA</option>
                                                        <option>Canada</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div class="position-relative form-group">
                                                    <label for="exampleFile" class="">File</label>
                                                    <input name="file" id="exampleFile" type="file" class="form-control-file" />
                                                    <small class="form-text text-muted">Add your file validation text here.</small>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="mt-1 btn btn-primary">Submit</button>
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

export default CreateCredentialPage;