import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// components
import NavBar from './components/navbar';

// pages
import LandingPage from './pages/mainPages/LandingPage';
import NotFoundPage from './pages/mainPages/NotFoundPage';

import HomePage from './pages/mainPages/HomePage';
import ConnectPage from './pages/mainPages/ConnectPage';
import ConsensusPage from './pages/mainPages/ConsensusPage';
import ActionPage from './pages/mainPages/ActionPage';
import LibraryPage from './pages/mainPages/LibraryPage';

import ActionSearch from './pages/actionPages/ActionSearch';
import MyActions from './pages/actionPages/MyActions';

import LibrarySearch from './pages/libraryPages/LibrarySearch';
import MyLibrary from './pages/libraryPages/MyLibrary';

import ConnectSearch from './pages/connectPages/ConnectSearch';
import ConnectInbox from './pages/connectPages/ConnectInbox';

import ConsensusSearch from './pages/consensusPages/ConsensusSearch';
import MyIssues from './pages/consensusPages/MyIssues';

import ExplorePage from './pages/homePages/ExplorePage';
import MenuPage from './pages/homePages/MenuPage';

import IssuePage from './pages/issuePages/IssuePage';
import QuestionPage from './pages/issuePages/QuestionPage';

import AboutPage from './pages/menuPages/AboutPage';
import SettingsPage from './pages/menuPages/SettingsPage';
import ProfilePage from './pages/menuPages/ProfilePage';

// includes
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/home" component={HomePage} exact />
          <Route path="/connect" component={ConnectPage} exact />
          <Route path="/consensus" component={ConsensusPage} exact />
          <Route path="/action" component={ActionPage} exact />
          <Route path="/library" component={LibraryPage} exact />

          <Route path="/home/search" component={ExplorePage} exact />
          <Route path="/home/menu" component={MenuPage} exact />

          <Route path="/connect/search" component={ConnectSearch} exact />
          <Route path="/connect/inbox" component={ConnectInbox} exact />

          <Route path="/consensus/search" component={ConsensusSearch} exact />
          <Route path="/consensus/my-issues" component={MyIssues} exact />

          <Route path="/action/search" component={ActionSearch} exact />
          <Route path="/action/my-actions" component={MyActions} exact />

          <Route path="/library/search" component={LibrarySearch} exact />
          <Route path="/library/my-library" component={MyLibrary} exact />

          <Route path="/about" component={AboutPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/settings" component={SettingsPage} exact />

          <Route path="/issue/:name" component={IssuePage} exact />
          <Route path="/question/:name" component={QuestionPage} exact />

          <Route component={NotFoundPage} />
        </Switch>

        <NavBar />

      </div>
      </Router>
    );
  }
}

export default App;
