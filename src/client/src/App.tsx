import React, { useEffect, useState } from 'react';
import './App.css';
import { LoginScreen } from './screens/login.screen';
import { DashboardScreen } from './screens/dashboard.screen'
import { Router } from '@reach/router';
export const App = () => (
    <Router>
      <LoginScreen path="/" />
      <DashboardScreen path="/dashboard" />
    </Router>
)



