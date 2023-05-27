import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ManufacturerDashboard from './pages/ManufacturerDashboard';
import TransporterDashboard from './pages/TransporterDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/manufacturer" component={ManufacturerDashboard} />
        <Route path="/transporter" component={TransporterDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
