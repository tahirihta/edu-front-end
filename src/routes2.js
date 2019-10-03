import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VerifierLoginPage from "./pages/VerifierLoginPage";
import AdminDashboardPage from "./pages/dashboard/AdminDashboardPage";

const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    exact
                    path="/verifier-login"
                    component={VerifierLoginPage}
                />
                <Route
                    exact
                    path="/dashboard/admin"
                    component={AdminDashboardPage}
                />
            </Switch>
        </div>
    );
};

export default BaseRouter;
