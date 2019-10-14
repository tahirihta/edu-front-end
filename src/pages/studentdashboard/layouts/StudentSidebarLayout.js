/* eslint-disable */
import React from "react";
import { withRouter, Link } from "react-router-dom";

class StudentSidebarLayout extends React.Component {
    state = {
        student: null
    };

    componentDidMount() {
        if (localStorage.studentInfo !== undefined) {
            const student = JSON.parse(localStorage.studentInfo);
            this.setState({ student: student });
        } else {
            this.props.history.push("/student-login");
        }
    }

    onLogin = () => {
        localStorage.removeItem("studentInfo");
        this.props.history.push("/student-login");
    };

    render() {
        return (
            <div>
                <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
                    <div className="app-header header-shadow bg-primary header-text-light">
                        <div className="app-header__logo">
                            <div
                                className="logo-src"
                                style={{ marginLeft: 55 }}
                            ></div>
                            <div className="header__pane ml-auto"></div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button
                                    type="button"
                                    className="hamburger hamburger--elastic mobile-toggle-nav"
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            <span>
                                <button
                                    type="button"
                                    className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                                >
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                                    </span>
                                </button>
                            </span>
                        </div>
                        <div className="app-header__content">
                            <div className="app-header-right">
                                <div className="header-btn-lg pr-0">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left  ml-3 header-user-info">
                                                <div className="widget-heading">
                                                    {this.state.student &&
                                                        this.state.student
                                                            .firstname +
                                                            " " +
                                                            this.state.student
                                                                .lastname}
                                                </div>
                                                <div className="widget-subheading">
                                                    Student
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-main">
                        <div className="app-sidebar sidebar-shadow bg-primary sidebar-text-light">
                            <div className="app-header__logo">
                                <div className="logo-src"></div>
                                <div className="header__pane ml-auto">
                                    <div>
                                        <button
                                            type="button"
                                            className="hamburger close-sidebar-btn hamburger--elastic"
                                            data-class="closed-sidebar"
                                        >
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="app-header__mobile-menu">
                                <div>
                                    <button
                                        type="button"
                                        className="hamburger hamburger--elastic mobile-toggle-nav"
                                    >
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="app-header__menu">
                                <span>
                                    <button
                                        type="button"
                                        className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                                    >
                                        <span className="btn-icon-wrapper">
                                            <i className="fa fa-ellipsis-v fa-w-6"></i>
                                        </span>
                                    </button>
                                </span>
                            </div>{" "}
                            <div className="scrollbar-sidebar">
                                <div className="app-sidebar__inner">
                                    <ul className="vertical-nav-menu">
                                        <li className="app-sidebar__heading">
                                            Dashboard
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="metismenu-icon pe-7s-rocket"></i>
                                                Dashboard
                                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                            </a>
                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        Management
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/student">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        Analytics
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="metismenu-icon pe-7s-browser"></i>
                                                Credentials
                                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                            </a>
                                            <ul>
                                                <li>
                                                    <Link to="/dashboard/student/all-diploma">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        All Diplomas
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/student/all-certification">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        All Certifications
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/student/all-standards">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        All Standards
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="metismenu-icon pe-7s-browser"></i>
                                                Publish-Revoke
                                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                            </a>
                                            <ul>
                                                <li>
                                                    <Link to="/dashboard/student/all-publish-diploma">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        All Published Diploma
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/student/all-revoke-diploma">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        All Revoked Diploma
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/student/publish-diploma">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        Publish Diploma
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/student/revoke-diploma">
                                                        <i className="metismenu-icon pe-7s-graph"></i>
                                                        Revoke Diploma
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                onClick={this.onLogin}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <i className="metismenu-icon pe-7s-graph"></i>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(StudentSidebarLayout);
