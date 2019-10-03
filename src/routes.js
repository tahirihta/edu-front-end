/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminLayout from './pages/admindashboard/layouts/AdminLayout';
import CreateCredentialPage from './pages/admindashboard/CreateCredentialPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/dashboard/admin',
        component: AdminLayout,
        routes: [
            {
                path: '/dashboard/admin',
                exact: true,
                component: AdminLayout
            },
            {
                path: '/dashboard/admin/add-credential',
                exact: true,
                component: lazy(() => import('./pages/admindashboard/CreateCredentialPage'))
            },
        ]
    },
    //   {
    //     path: '/errors',
    //     component: ErrorLayout,
    //     routes: [
    //       {
    //         path: '/errors/error-404',
    //         exact: true,
    //         component: lazy(() => import('views/Error404'))
    //       },
    //     ]
    //   },
    //   {
    //     route: '*',
    //     component: DashboardLayout,
    //     routes: [
    //       {
    //         path: '/calendar',
    //         exact: true,
    //         component: lazy(() => import('views/Calendar'))
    //       },
    //     ]
    //   }
];

export default routes;