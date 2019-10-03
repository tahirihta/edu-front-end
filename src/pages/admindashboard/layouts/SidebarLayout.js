import React from 'react';

class SidebarLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
                    <div className="app-header header-shadow">
                        <div className="app-header__logo">
                            <div className="logo-src"></div>
                            <div className="header__pane ml-auto">
                            </div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            <span>
                                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
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
                                            <div className="widget-content-left">
                                                <div className="btn-group">
                                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                        <img width="42" className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" />
                                                        <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                                    </a>
                                                    <div tabindex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                                        <div className="dropdown-menu-header">
                                                            <div className="dropdown-menu-header-inner bg-info">
                                                                <div className="menu-header-image opacity-2" style={{ backgroundImage: "url('assets/images/dropdown-header/city3.jpg')" }}></div>
                                                                <div className="menu-header-content text-left">
                                                                    <div className="widget-content p-0">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left mr-3">
                                                                                <img width="42" className="rounded-circle"
                                                                                    src="assets/images/avatars/1.jpg"
                                                                                    alt="" />
                                                                            </div>
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-heading">Alina Mcloughlin</div>
                                                                                <div className="widget-subheading opacity-8">A short profile description</div>
                                                                            </div>
                                                                            <div className="widget-content-right mr-2">
                                                                                <button className="btn-pill btn-shadow btn-shine btn btn-focus">Logout
                                                                            </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left  ml-3 header-user-info">
                                                <div className="widget-heading">
                                                    Alina Mclourd
                                            </div>
                                                <div className="widget-subheading">
                                                    VP People Manager
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
                                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-className="closed-sidebar">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="app-header__mobile-menu">
                                <div>
                                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="app-header__menu">
                                <span>
                                    <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                        <span className="btn-icon-wrapper">
                                            <i className="fa fa-ellipsis-v fa-w-6"></i>
                                        </span>
                                    </button>
                                </span>
                            </div>    <div className="scrollbar-sidebar">
                                <div className="app-sidebar__inner">
                                    <ul className="vertical-nav-menu">
                                        <li class="app-sidebar__heading">Dashboard</li>
                                        <li>
                                            <a href="/dashboard/admin">
                                                <i class="metismenu-icon pe-7s-graph"></i>Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/dashboard/admin/add-credential">
                                                <i class="metismenu-icon pe-7s-graph"></i>Add Credential
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {this.props.children}
                        {/* <div className="app-main__outer">
                        <div className="app-main__inner">
                            <div className="app-page-title">
                                <div className="page-title-wrapper">
                                    <div className="page-title-heading">
                                        <div className="page-title-icon">
                                            <i className="pe-7s-car icon-gradient bg-mean-fruit">
                                            </i>
                                        </div>
                                        <div>Analytics Dashboard
                                    <div className="page-title-subheading">This is an example dashboard created using build-in elements and components.
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default SidebarLayout;
