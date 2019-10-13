/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
/* eslint-disable */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AdminLayout from "./pages/admindashboard/layouts/AdminLayout";
import AdminDashboardPage from "./pages/admindashboard/AdminDashboardPage";
import StudentDashboardPage from "./pages/studentdashboard/StudentDashboardPage";
import StudentLayout from "./pages/studentdashboard/layouts/StudentLayout";
import VerifierLoginPage from "./pages/VerifierLoginPage";
import StudentLoginPage from "./pages/StudentLoginPage";
import ErrorPage from "./pages/ErrorPage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/dashboard/admin",
        component: AdminLayout,
        routes: [
            {
                path: "/dashboard/admin",
                exact: true,
                component: AdminDashboardPage
            },
            {
                path: "/dashboard/admin/all-students",
                exact: true,
                component: lazy(() =>
                    import("./pages/admindashboard/ListStudentPage")
                )
            },
            {
                path: "/dashboard/admin/all-credentials",
                exact: true,
                component: lazy(() =>
                    import("./pages/admindashboard/ListCredentialPage")
                )
            },
            {
                path: "/dashboard/admin/add-credential",
                exact: true,
                component: lazy(() =>
                    import("./pages/admindashboard/CreateCredentialPage")
                )
            },
            {
                path: "/dashboard/admin/add-student",
                exact: true,
                component: lazy(() =>
                    import("./pages/admindashboard/CreateStudentPage")
                )
            },
            {
                path: "/dashboard/admin/search-student",
                exact: true,
                component: lazy(() =>
                    import("./pages/admindashboard/SearchStudentPage")
                )
            },
            {
                path: "/dashboard/admin/search-student-credential",
                exact: true,
                component: lazy(() =>
                    import("./pages/admindashboard/SearchStudentCredentialPage")
                )
            },
            {
                component: () => <Redirect to="/errors/error-404" />
            }
        ]
    },
    {
        path: "/verifier-login",
        exact: true,
        component: VerifierLoginPage
    },
    {
        path: "/student-login",
        exact: true,
        component: StudentLoginPage
    },
    {
        path: "/recover-password",
        component: RecoverPasswordPage
    },
    {
        path: "/dashboard/student",
        component: StudentLayout,
        routes: [
            {
                path: "/dashboard/student",
                exact: true,
                component: StudentDashboardPage
            },
            {
                path: "/dashboard/student/all-diploma",
                exact: true,
                component: lazy(() =>
                    import("./pages/studentdashboard/AllDiplomaPage")
                )
            },
            {
                path: "/dashboard/student/all-publish-diploma",
                exact: true,
                component: lazy(() =>
                    import("./pages/studentdashboard/ListPublishDiplomaPage")
                )
            },
            {
                path: "/dashboard/student/all-certification",
                exact: true,
                component: lazy(() =>
                    import("./pages/studentdashboard/ListCertificationPage")
                )
            },
            {
                path: "/dashboard/student/all-standards",
                exact: true,
                component: lazy(() =>
                    import("./pages/studentdashboard/ListStandardPage")
                )
            },
            {
                path: "/dashboard/student/all-revoke-diploma",
                exact: true,
                component: lazy(() =>
                    import("./pages/studentdashboard/ListRevokeDiplomaPage")
                )
            },
            {
                path: "/dashboard/student/revoke-publish-diploma",
                exact: true,
                component: lazy(() =>
                    import("./pages/studentdashboard/RevokePublishDiplomaPage")
                )
            },
        ]
    },
    {
        path: "/errors/error-404",
        component: ErrorPage
    }
];

export default routes;
