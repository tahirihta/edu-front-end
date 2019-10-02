import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="app-container app-theme-white body-tabs-shadow">
                <div className="app-container">
                    <div className="h-100">
                        <div className="h-100 no-gutters row">
                            <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-12">
                                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-5">
                                    <div className="app-logo"></div>
                                    <h4 className="mb-0">
                                        <span className="d-block">
                                            Welcome back,
                                        </span>
                                        <span>
                                            Please sign in to your account.
                                        </span>
                                    </h4>
                                    <div className="divider row"></div>
                                    <div>
                                        <form className="">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="position-relative form-group">
                                                        <label
                                                            for="exampleEmail"
                                                            className=""
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            name="email"
                                                            id="exampleEmail"
                                                            placeholder="Email here..."
                                                            type="email"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="position-relative form-group">
                                                        <label
                                                            for="examplePassword"
                                                            className=""
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            name="password"
                                                            id="examplePassword"
                                                            placeholder="Password here..."
                                                            type="password"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider row"></div>
                                            <div className="d-flex align-items-center">
                                                <div className="ml-auto">
                                                    <button className="btn btn-primary btn-lg">
                                                        Login to Dashboard
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

export default HomePage;
