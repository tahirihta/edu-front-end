import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    );
};

export default BaseRouter;
