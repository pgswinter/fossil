import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import rootReducer from './reducer';
import history from "./history";

import App from './App';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(
    rootReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware),
        // other store enhancers if any
    )
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Router history={history}>
    <Provider store={store}>
        <Route component={App} />
    </Provider>
</Router>, document.getElementById('root'));