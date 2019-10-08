import React, { Component, Fragment, Suspense } from "react";
import SidebarLayout from "./SidebarLayout";
import { renderRoutes } from "react-router-config";

class AdminLayout extends Component {
    componentDidMount() {
        if (
            !localStorage.getItem("adminName") &&
            !localStorage.getItem("adminSessionToken")
        ) {
            this.props.history.push("/");
        }
    }

    render() {
        const { route } = this.props;
        return (
            <Fragment>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <SidebarLayout>{renderRoutes(route.routes)}</SidebarLayout>
                </Suspense>
            </Fragment>
        );
    }
}

export default AdminLayout;
