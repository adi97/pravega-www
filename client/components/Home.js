import React from 'react';
import { Link } from 'react-router';

import '../styles/home.css';

class Home {
  render() {
    return (
      <div className="home col-md-12">
        <div>Welcome to Pravega 2016. Have a nice time.</div>
        <div>
          <Link className="white-link" to="/campusAmbassador">Register for Campus Ambassador</Link>
        </div>
      </div>
    );
  }
}

export default Home;
