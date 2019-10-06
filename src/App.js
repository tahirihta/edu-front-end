import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router basename="/">
                    {/* <BaseRouter /> */}
                    {renderRoutes(routes)}
                </Router>
            </Provider>
        );
    }
}

export default App;
