import React, {Component} from 'react';

class Navbar extends Component {
  render(){
    return(
      <nav className="nav-bar">
        <img src="/images/ironhack-logo.svg"  alt="nav-logo"/>
        <img src="/images/menu-top.svg" alt="nav-logo"/>
      </nav>
    )
  }
}

export default Navbar;
