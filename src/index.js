import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router} from 'react-router-dom'
import { LocaleProvider } from 'antd';
import nl from 'antd/lib/locale-provider/nl_NL';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <LocaleProvider locale={nl}>
            <Router>
              <App />
            </Router>
        </LocaleProvider>
    </Provider>
    ,document.getElementById('app'));
