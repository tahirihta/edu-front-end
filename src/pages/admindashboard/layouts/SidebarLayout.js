/* eslint-disable */
import React from "react";
import { withRouter, Link } from "react-router-dom";

class SidebarLayout extends React.Component {
    state = {
        adminName: ""
    };

    componentDidMount() {
        this.setState({
            adminName: localStorage.adminName
        });
    }

    onClick = () => {
        localStorage.removeItem("adminName");
        localStorage.removeItem("adminSessionToken");

        this.props.history.push("/");
    };

    render() {
        return (
            <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src"></div>
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
                                        <div className="widget-content-left ml-3 header-user-info">
                                            <div className="widget-heading">
                                                {this.state.adminName}
                                            </div>
                                            <div className="widget-subheading">
                                                Admin
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-main">
                    <div className="app-sidebar sidebar-shadow">
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
                                                <Link to="/dashboard/admin">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Analytics
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Management
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Monitoring
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Project Management
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-rocket"></i>
                                            Students
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </a>
                                        <ul>
                                            <li>
                                                <Link to="/dashboard/admin/all-students">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    All Students
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/admin/add-student">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Add New Student
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/admin/search-student">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Search Student
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/admin/search-student-credential">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Search Student Credential
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
                                                <Link to="/dashboard/admin/all-credentials">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    All Credentials
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/admin/add-credential">
                                                    <i className="metismenu-icon pe-7s-graph"></i>
                                                    Add Credential
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            onClick={this.onClick}
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
        );
    }
}

export default withRouter(SidebarLayout);
