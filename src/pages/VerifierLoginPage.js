import React, { Component } from "react";
import toastr from 'toastr';
import axios from 'axios';

class VerifierLoginPage extends Component {
    componentDidMount() {
        document.title = "Shared credential verifier";
    };

    state = {
        sharedId: "",
        secretKey: ""
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();

        const data = {
            sharedId: this.state.sharedId,
            secretKey: this.state.secretKey,
        };

        axios.post("http://d24w27cd80vt93.cloudfront.net/api/shared/verify", data)
            .then(res => toastr.success("Successfully verified"))
            .catch(err => toastr.error("Something went wrong!"));
    }

    render() {
        let bg = window.location.origin + "/images/originals/city.jpg";
        return (
            <div
                className="app-container app-theme-white body-tabs-shadow"
                style={{
                    backgroundImage: "url(" + bg + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="app-container">
                    <div className="h-100">
                        <div className="h-100 no-gutters row">
                            <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-12">
                                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-5">
                                    <div className="app-logo"></div>
                                    <h4 className="mb-0">
                                        <span className="d-block">
                                            Welcome message,
                                        </span>
                                        <span>Verify digital credentials</span>
                                    </h4>
                                    <div className="divider row"></div>
                                    <div>
                                        <form className="">
                                            <div className="form-row">
                                                <div className="col-md-12">
                                                    <div className="position-relative form-group">
                                                        <label
                                                            className=""
                                                        >
                                                            Shared Id
                                                        </label>
                                                        <input
                                                            name="sharedId"
                                                            placeholder="Shared Id here..."
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>

                                                    <div className="position-relative form-group">
                                                        <label
                                                            className=""
                                                        >
                                                            Secret key
                                                        </label>
                                                        <input
                                                            name="secretKey"
                                                            placeholder="Secret key here..."
                                                            type="text"
                                                            className="form-control"
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider row"></div>
                                            <div className="d-flex align-items-center">
                                                <div className="ml-auto">
                                                    <button className="btn btn-primary btn-lg" onClick={this.onSubmit}>
                                                        Verify
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VerifierLoginPage;
