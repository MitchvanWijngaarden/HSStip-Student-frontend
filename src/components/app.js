import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import { Layout} from 'antd';

import PrivateRoute from './HOC/private_route';
import Login from './login';
import Dashboard from './dashboard';
import Register from './register';
import WachtwoordReset from './wachtwoord_reset';

class App extends Component {
    render() {
        return (
            <Layout style={{height:"100vh"}}>
                <Route path="/" exact component={Login} />
                <Route path="/wachtwoord-reset" component={WachtwoordReset}/>
                <Route path="/register" component={Register}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
            </Layout>
        );
    }
}

export default App;