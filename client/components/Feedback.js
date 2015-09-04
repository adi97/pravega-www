import React from 'react';
import '../styles/feedback.css';

class Feedback {
  render() {
    return (
      <div className="feedback-page">
        <div className="feedback-title">Feedback</div>
          <div className="wrap-all">
            <div className="name flex">
              <div>Name</div>
              <div><input type="text" /></div>
            </div>
            <div className="email flex">
              <div>E-mail</div>
              <div><input type="text" /></div>
            </div>
            <div className="feedback flex">
              <div>Feedback</div>
              <div><textarea type="text" /></div>
            </div>
          </div>
        <div className="submit-button">Submit</div>
      </div>
    );
  }
}

export default Feedback;
