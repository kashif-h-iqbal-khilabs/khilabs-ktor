import React from 'react';
import { LoginScreen } from './screens/login.screen';
import { DashboardScreen } from './screens/dashboard.screen'
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import {PrivateRoute} from './helper/privateRoutes'
import store from './store/configureStore'
export const App = () => (
    <Provider store={store} >
      <Router>
        <LoginScreen path="/" />
        <PrivateRoute path="/dashboard" Component={DashboardScreen} />
      </Router>
    </Provider>
)



