import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import {
    Switch,
} from "react-router-dom";
import routerConfig from "./configs/router";

import {
    OrderPageLoader,
    HomePageLoader
} from './loadable';

import Header from './components/Master/Header';
import Footer from './components/Master/Footer';

import './styles/index.less';
import './styles/fontawesome/css/all.css';
import "./styles/package/datepicker.css";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="landing">
                    <p className="title">List of order</p>
                    <p className="category">Orders information & payment</p>
                </div>
                <hr />
                <div className="breadcrumb">
                    <div className="container">
                        <Link to=""><i className="fas fa-chevron-left"></i>{` back`}</Link>
                    </div>
                </div>
                <hr />
                <div className="wrapper">
                    <div className="container">
                        <Switch>
                            <Route
                                path={routerConfig["home"]}
                                exact
                                render={props => <HomePageLoader
                                    {...props}
                                />}
                            />
                            <Route
                                path={routerConfig["order"]}
                                exact
                                render={props => <OrderPageLoader
                                    {...props}
                                />}
                            />
                            <Route
                                path={routerConfig["warehouse"]}
                                exact
                                render={props => <HomePageLoader
                                    {...props}
                                />}
                            />
                            <Route
                                path={routerConfig["customer"]}
                                exact
                                render={props => <HomePageLoader
                                    {...props}
                                />}
                            />
                            <Route
                                path={routerConfig["system"]}
                                exact
                                render={props => <HomePageLoader
                                    {...props}
                                />}
                            />
                            <Route
                                path={routerConfig["notification"]}
                                exact
                                render={props => <HomePageLoader
                                    {...props}
                                />}
                            />
                            <Route
                                path={routerConfig["account"]}
                                exact
                                render={props => <HomePageLoader
                                    {...props}
                                />}
                            />
                        </Switch>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

export default App;