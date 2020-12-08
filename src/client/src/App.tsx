import React from 'react';
import { LoginScreen } from './screens/login.screen';
import { DashboardScreen } from './screens/dashboard.screen'
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import store from './store/configureStore'
export const App = () => (
    <Provider store={store} >
      <Router>
        <LoginScreen path="/" />
        <DashboardScreen path="/dashboard" />
      </Router>
    </Provider>
)



