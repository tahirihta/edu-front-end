import React, { Component, Fragment, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import StudentSidebarLayout from "./StudentSidebarLayout";

class StudentLayout extends Component {
    componentDidMount() {
        if (!localStorage.studentInfo) {
            this.props.history.push("/student/login");
        }
    }

    render() {
        const { route } = this.props;
        return (
            <Fragment>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <StudentSidebarLayout>
                        {renderRoutes(route.routes)}
                    </StudentSidebarLayout>
                </Suspense>
            </Fragment>
        );
    }
}

export default StudentLayout;
