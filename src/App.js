import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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
import SearchPage from './pages/mainPages/SearchPage';
import ActPage from './pages/mainPages/ActPage';
import YouPage from './pages/mainPages/YouPage';
import AddPage from './pages/mainPages/AddPage';

import EventPage from './pages/actPages/EventPage';
import ActionPage from './pages/actPages/ActionPage';
import GroupPage from './pages/actPages/GroupPage';

import AddEventPage from './pages/addPages/AddEventPage';
import AddActionPage from './pages/addPages/AddActionPage';
import AddGroupPage from './pages/addPages/AddGroupPage';

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

          <Route path="/search" component={SearchPage} exact />
          <Route path="/act" component={ActPage} exact />
          <Route path="/you" component={YouPage} exact />
          <Route path="/add" component={AddPage} exact />

          <Route path="/act/event" component={EventPage} exact />
          <Route path="/act/action" component={ActionPage} exact />
          <Route path="/act/group" component={GroupPage} exact />

          <Route path="/add/event" component={AddEventPage} exact />
          <Route path="/add/action" component={AddActionPage} exact />
          <Route path="/add/group" component={AddGroupPage} exact />
          
        </Switch>

        <NavBar />

      </div>
      </Router>
      </ThemeProvider>
    );
  }
}

export default App;
