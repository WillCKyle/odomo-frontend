import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, SvgIcon } from '@mui/material';
import { ReactComponent as Act } from '../Assets/svg/Act.svg';
import { ReactComponent as Add } from '../Assets/svg/Add.svg';
import { ReactComponent as You } from '../Assets/svg/You.svg';


class NavBar extends Component {
  render() {
    return (
      <BottomNavigation>
        <BottomNavigationAction component={Link} to="/act" icon={<SvgIcon><Act /></SvgIcon>}/>
      </BottomNavigation>
      // <footer>

      // <nav>
      //   <ul className="navbar">

      //     <li className="item">
      //       <NavLink activeClassName="selected" to="/action"><svg className="navbar-icon" alt="Action" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.04323 8.74487L8.3356 10.158L10.5 11.5712M10.5 11.5712L13.3788 13.4554M10.5 11.5712L15.2127 5.44752M13.3788 13.4554L16.1297 15.5M13.3788 13.4554L18.4221 8.74487M16.1297 15.5L18.518 13L17.9636 18.6369L16.1297 20.9922L15.6712 29H12.5H6.5017L6.96018 20.5211L1 11.5712L5.12628 4.50542L13.3788 7.74724L12.0034 9.61767L15.2127 5.44752M16.1297 15.5C17.1995 14.5579 19.4307 11.948 19.7975 11.5712C20.1643 11.1943 19.9503 10.472 19.7975 10.158L18.4221 8.74487M18.4221 8.74487L15.2127 5.44752M15.2127 5.44752L12.0034 3M12.0034 3C12.4619 3.47105 10.4446 1.58491 9.71103 1.20807C8.97747 0.831233 8.48843 1.05106 8.3356 1.20807L6.04323 4.88226L9.71103 6.30643L12.0034 3Z"/></svg></NavLink>
      //     </li>

      //     <li className="item">
      //       <NavLink activeClassName="selected" to="/add"><svg className="navbar-icon" alt="Add" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="12.0385" y1="0.5" x2="12.0385" y2="24.5" stroke-linecap="round"/><line x1="0.5" y1="12.9615" x2="24.5" y2="12.9615" stroke-linecap="round"/></svg></NavLink>
      //     </li>

      //     <li className="item">
      //       <NavLink activeClassName="selected" to="/you"><svg className="navbar-icon" alt="You" width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.37449 1C5.31987 1 2.84362 3.38781 2.84362 6.33333C2.84362 6.81913 2.91098 6.84532 3.03718 7.29257C3.36869 8.46743 4.10624 10.0744 5.09549 10.7778C2.66807 11.9417 1 13.764 1 16.5556V25H2.84615C7.16405 25 9.58492 25 13.9028 25H15.749V16.5556C15.749 13.764 14.0809 11.9417 11.6535 10.7778C12.6427 10.0744 13.3803 8.46743 13.7118 7.29257C13.838 6.84532 13.9053 6.81913 13.9053 6.33333C13.9053 3.38781 11.4291 1 8.37449 1Z" /></svg></NavLink>
      //     </li>

      //   </ul>
      // </nav>


      // </footer>

    );
  }
}

export default NavBar;
