import React, { Component, Fragment, Suspense } from "react";
import SidebarLayout from "./SidebarLayout";
import { renderRoutes } from "react-router-config";
import Modal from "../../../components/Modal";

class AdminLayout extends Component {
    render() {
        const { route } = this.props;
        return (
            <Fragment>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <SidebarLayout>{renderRoutes(route.routes)}</SidebarLayout>
                    <Modal />
                </Suspense>
            </Fragment>
        );
    }
}

export default AdminLayout;
