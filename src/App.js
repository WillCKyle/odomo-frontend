import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Assets/Theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';

// components
import NavBar from './components/navbar';

// pages
import LandingPage from './pages/mainPages/LandingPage';
import ContactPage from './pages/mainPages/ContactPage';

// includes
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <div className="App">

        <Switch>
          <Route component={LandingPage} />

          <Route path="/contact" component={ContactPage} exact />
          
        </Switch>

      </div>
      </Router>
      </ThemeProvider>
    );
  }
}

export default App;
