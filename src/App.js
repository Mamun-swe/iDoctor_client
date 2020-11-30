import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop/Index'

import HomeIndex from './pages/Home/Index'
import AboutIndex from './pages/About/Index'
import ContactIndex from './pages/Contact/Index'
import SearchResultIndex from './pages/SearchResult/Index'

import LoginIndex from './pages/Auth/Login'
import RegisterIndex from './pages/Auth/Register'
import ResetIndex from './pages/Auth/Reset'

import DoctorAccountMaster from './pages/Account/Doctor/Master'
import PatientAccountMaster from './pages/Account/Patient/Master'

import FourOFour from './pages/FourOFour/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
            <Route exact path="/about-us" component={AboutIndex} />
            <Route exact path="/contact-us" component={ContactIndex} />
            <Route exact path="/search" component={SearchResultIndex} />

            <Route exact path="/login" component={LoginIndex} />
            <Route exact path="/register" component={RegisterIndex} />
            <Route exact path="/reset" component={ResetIndex} />

            <Route path="/doctor" component={DoctorAccountMaster} />
            <Route path="/patient" component={PatientAccountMaster} />

            <Route path="*" component={FourOFour} />

          </Switch>
        </ ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
