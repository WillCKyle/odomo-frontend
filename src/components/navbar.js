import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import HomeIcon from '../img/icons/home-icon.svg';
import ConnectIcon from '../img/icons/connect-icon.svg';
import ConsensusIcon from '../img/icons/consensus-icon.svg';
import ActionIcon from '../img/icons/action-icon.svg';
import ArtIcon from '../img/icons/art-icon.svg';

class NavBar extends Component {
  render() {
    return (
      <footer>

        <nav>
          <ul>
            <li>
              <Link to="/home"><img className="navbar-icon" alt="Home" src={HomeIcon}></img></Link>
            </li>
            <li>
              <Link to="/connect"><img className="navbar-icon" alt="Connect" src={ConnectIcon}></img></Link>
            </li>
            <li>
              <Link to="/consensus"><img className="navbar-icon" alt="Consensus" src={ConsensusIcon}></img></Link>
            </li>
            <li>
              <Link to="/action"><img className="navbar-icon" alt="Action" src={ActionIcon}></img></Link>
            </li>
            <li>
              <Link to="/art"><img className="navbar-icon" alt="Art" src={ArtIcon}></img></Link>
            </li>
          </ul>
        </nav>

      </footer>
    );
  }
}

export default NavBar;
