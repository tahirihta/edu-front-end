/* eslint-disable */
import React, { Component } from "react";
import Axios from "axios";
import toastr from "toastr";
import bg from "../assets/images/originals/bg-university.jpg";
import { Link } from "react-router-dom";

class RecoverPasswordPage extends Component {
    componentDidMount() {
        document.title = "Recover Password";
    }

    onLogin = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="app-container app-theme-white body-tabs-shadow">
                <div className="app-container">
                    <div className="h-100">
                        <div className="h-100 no-gutters row">
                            <div className="d-none d-lg-block col-lg-4">
                                <div className="slider-light">
                                    <div className="slick-slider">
                                        <div>
                                            <div
                                                className="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate"
                                                tabIndex="-1"
                                            >
                                                <div
                                                    className="slide-img-bg"
                                                    style={{
                                                        backgroundImage: `url(${bg})`,
                                                        backgroundPosition:
                                                            "top"
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-7">
                                    <div className="app-logo"></div>
                                    <h4>
                                        <div>Forgot your Password?</div>
                                        <span>
                                            Use the form below to recover it.
                                        </span>
                                    </h4>
                                    <div className="divider row"></div>
                                    <div>
                                        <form className="">
                                            <div className="form-row">
                                                <div className="col-md-12">
                                                    <div className="position-relative form-group">
                                                        <label className="">
                                                            Login Id
                                                        </label>
                                                        <input
                                                            name="loginid"
                                                            placeholder="Login Id here..."
                                                            type="text"
                                                            className="form-control"
                                                            onChange={
                                                                this.onChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <h6 class="mb-0">
                                                    <Link
                                                        to="/"
                                                        className="text-primary"
                                                    >
                                                        Sign in existing account
                                                    </Link>
                                                </h6>
                                                <div className="ml-auto">
                                                    <button
                                                        className="btn btn-primary btn-lg"
                                                        onClick={this.onLogin}
                                                    >
                                                        Recover
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

export default RecoverPasswordPage;
