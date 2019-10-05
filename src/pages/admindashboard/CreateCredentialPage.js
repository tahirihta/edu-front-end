import React, { Component } from 'react';

class CreateCredentialPage extends Component {

    state = {
        sfirstname: "",
        slastname: "",
        sbirthdate: "",
        modalIsOpen: false
    };

    componentDidMount() {
        document.title = "Add New Credential";
    };

    onSearch = e => {
        e.preventDefault();
    };

    openModal = e => {
        this.setState({modalIsOpen: true});
    };

    hideModal = () => {
        this.setState({ modalIsOpen: false });
    }
    

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
                    {/* <ReactModal
                        isOpen={this.state.modalIsOpen}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-card mb-3 card">
                                        <div className="card-body"><h5 className="card-title">Search Student</h5>
                                            <form className="">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="position-relative form-group">
                                                            <label className="">First Name</label>
                                                            <input name="sfirstname" placeholder="First Name" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="position-relative form-group">
                                                            <label className="">Last Name</label>
                                                            <input name="slastname" placeholder="Last Name" type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="position-relative form-group">
                                                            <label className="">Bith date</label>
                                                            <input name="sbirthdate" placeholder="dd/mm/yyyy" type="date" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="mt-1 btn btn-success" onClick={this.onSearch}>Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </ReactModal> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body"><h5 className="card-title">Create Digital Credential</h5>
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
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleSelect" className="">Choose Program name</label>
                                                    <select name="select" id="exampleSelect" className="form-control">
                                                        <option selected>Choose Program</option>
                                                        <option>CSE</option>
                                                        <option>IT</option>
                                                        <option>BCS</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleSelect" className="">Choose Student's Nationality</label>
                                                    <select name="select" id="exampleSelect" className="form-control">
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
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleFile" className="">File</label>
                                                    <input name="file" id="exampleFile" type="file" className="form-control-file" />
                                                    <small className="form-text text-muted">Add your file validation text here.</small>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="mt-1 btn btn-primary">Submit</button>
                                    </form>
                                    <button className="mt-1 btn btn-success" data-toggle="modal" data-target="#exampleModal">Search</button>
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