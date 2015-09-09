import React from 'react';
import { Link } from 'react-router';

// TODO Fix header at the top

class Menubar {
  render() {
    return (
      <div className="menubar">
        <MenubarLeft />
        <MenubarRightenc />
      </div>
    );
  }
}

class MenubarLeft {
  render() {
    return (
      <div className="menubar-left">
        <div>Airbus</div>
        <div>Pravega'16</div>
      </div>
    );
  }
}

class MenubarRightenc {
  render() {
    return (
      <div className="menubarrightenc hidden-md-down">
       <MenubarRight />
      </div>
    );
  }
}

class MenubarRight {
  render() {
    return (
      <div className="menubar-right">
        <div><Link className="white-link" to="/">Home</Link></div>
        <div><Link className="white-link" visible-md-block visible-lg-block to="/schedule">Schedule</Link></div>
        <div><Link className="white-link" to="/news">News</Link></div>
        <div><Link className="white-link" to="/hospitality">Hospitality</Link></div>
        <div><Link className="white-link" to="/sponsors">Sponsor Us</Link></div>
        <div><Link className="white-link" to="/contact">Contact</Link></div>
        <div><Link className="white-link" to="/login">Login</Link></div>
      </div>
    );
  }
}

export default Menubar;
