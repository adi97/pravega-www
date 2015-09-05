import React from 'react';
import { Link } from 'react-router';

class Home {
  render() {
    return (
      <div>
        Welcome to Pravega 2016. Have a nice time.
        <div>
          <Link className="white-link" to="/campusAmbassador">Register for Campus Ambassador</Link>
        </div>
      </div>
    );
  }
}

export default Home;
