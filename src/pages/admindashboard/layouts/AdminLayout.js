import React, { Component, Fragment, Suspense } from 'react';
import SidebarLayout from './SidebarLayout';
import { renderRoutes } from 'react-router-config';

class AdminLayout extends Component {
    render() {
        const { route } = this.props;
        return (
            <Fragment>
                <Suspense fallback={<h2>Product list is loading...</h2>}>
                    <SidebarLayout>
                        {renderRoutes(route.routes)}
                    </SidebarLayout>
                </Suspense>
            </Fragment>
        );
    }
}

export default AdminLayout;