import React from 'react';
import { Link } from 'react-router';

class Footer {

  render() {
    return (
      <div className="footer">
        <div className="footer-menu">
          <div><Link className="white-link" to="/feedback">Feedback</Link></div>
          <div><Link className="white-link" to="/about">About</Link></div>
          <div>FAQ</div>
        </div>
        <div className="social-media">
          <div>f</div>
          <div>t</div>
          <div>g+</div>
        </div>
      </div>
    );
  }
}

export default Footer;
