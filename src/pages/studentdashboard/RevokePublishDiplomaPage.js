import React, { Component } from 'react';
import Axios from 'axios';
import toastr from 'toastr';

class RevokePublishDiplomaPage extends Component {

    componentDidMount() {
        document.title = "Publish and Revoke Diploma"
    }

    state = {
        digitalCredId: "",
        sharedId: "",
        modal: false
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmitPublish = (e) => {
        e.preventDefault();

        const data = {
            "digitalCredId": this.state.digitalCredId,
        }

        Axios.post("http://d24w27cd80vt93.cloudfront.net/api/shared/publish", data)
            .then(res => {
                toastr.success("Diploma successfully published");
                this.setState({digitalCredId: ""})
            })
            .catch(err => toastr.success("Something wrong"));
    };

    onSubmitRevoke = (e) => {
        e.preventDefault();

        Axios.delete(`http://d24w27cd80vt93.cloudfront.net/api/shared/revoke/${this.state.sharedId}`)
            .then(res => {
                toastr.success("Diploma successfully revoked")
                this.setState({sharedId: ""})
            })
            .catch(err => toastr.success("Something wrong"));
    };

    toggle = e => {
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
                                    <i className="pe-7s-car icon-gradient bg-mean-fruit">
                                    </i>
                                </div>
                                <div>
                                    Publish and Revoke Diploma
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h4>Publish Diploma</h4>
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="position-relative form-group">
                                                    <label className="">Digital Credential Id</label>
                                                    <input name="digitalCredId" value={this.state.digitalCredId} onChange={this.onChange} placeholder="Digital Credential Id" type="email" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="mt-1 btn btn-primary" onClick={this.onSubmitPublish}>Publish</button>{' '}
                                        <button className="mt-1 btn btn-success" onClick={this.toggle}>Search Diploma</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h4>Revoke Diploma</h4>
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="position-relative form-group">
                                                    <label className="">Shared Id</label>
                                                    <input name="sharedId" value={this.state.sharedId} onChange={this.onChange} placeholder="Shared Id" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="mt-1 btn btn-danger" onClick={this.onSubmitRevoke}>Revoke</button>
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

export default RevokePublishDiplomaPage;