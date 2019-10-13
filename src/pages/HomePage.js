/* eslint-disable */
import React, { Component } from "react";
import Axios from "axios";
import toastr from "toastr";
import bg from "../assets/images/originals/bg-university.jpg";
import { Link } from "react-router-dom";

class HomePage extends Component {
    componentDidMount() {
        document.title = "Admin login";

        if (localStorage.adminSessionToken) {
            location.href = "/dashboard/admin";
            // this.props.history.push("/dashboard/admin");
        }
    }

    state = {
        loginid: "",
        password: ""
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onLogin = e => {
        e.preventDefault();

        const data = {
            loginid: this.state.loginid,
            password: this.state.password
        };

        if (this.state.loginid && this.state.password) {
            Axios.post(
                "http://d24w27cd80vt93.cloudfront.net/api/login/univ",
                data
            )
                .then(res => {
                    toastr.success("Successfully logged in");
                    localStorage.setItem("adminSessionToken", res.data[1]);
                    localStorage.setItem("adminName", res.data[0]);
                    location.href = "/dashboard/admin";
                    // this.props.history.push("/dashboard/admin");
                })
                .catch(err => {
                    if (err.response && err.response.status === 403) {
                        toastr.error("Invalid credentials. Try again later.");
                    }
                });
        } else {
            toastr.warning("All fields are mandatory");
        }
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

                                                    <div className="position-relative form-group">
                                                        <label className="">
                                                            Password
                                                        </label>
                                                        <input
                                                            name="password"
                                                            placeholder="Password here..."
                                                            type="password"
                                                            className="form-control"
                                                            onChange={
                                                                this.onChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="ml-auto">
                                                    <Link
                                                        to="/recover-password"
                                                        className="btn-lg btn btn-link"
                                                    >
                                                        Recover Password
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary btn-lg"
                                                        onClick={this.onLogin}
                                                    >
                                                        Login
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
