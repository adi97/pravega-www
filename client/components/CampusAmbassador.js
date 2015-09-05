import React, { PropTypes } from 'react';
import '../styles/campusAmbassador.css';

class CampusAmbassador {
  render() {
    return (
      <div>
        <div className="title">
          Campus Ambassador Application
        </div>
        <div className="ca-form">
          <LabelAndInput name="First Name" inputName="firstName" />
          <LabelAndInput name="Last Name" inputName="lastName" />
          <LabelAndInput name="College Name" inputName="collegeName" />
          <LabelAndInput name="Branch" inputName="branch" />
          <LabelAndInput name="Year" inputName="year" />
          <LabelAndInput name="Age" inputName="age" />
          <LabelAndInput name="Phone Number" inputName="phoneNumber" />
          <LabelAndInput name="Email Address" inputName="emailAddress" />
          <Gender />
        </div>
        <Description />
      </div>
    );
  }
}

class Gender {
  render() {
    return (
      <div className="field-input-wrapper">
        <div>Gender</div>
        <div>
          <div className="gender-buttons">
            <div><input type="radio" name="gender" />Female</div>
            <div><input type="radio" name="gender" />Male</div>
          </div>
        </div>
      </div>
    );
  }
}

class Description {
  render() {
    return (
      <div className="description">
        <div>Describe in 500 words why you should be college ambassador</div>
        <div><textarea rows="5" cols="110"></textarea></div>
      </div>
    );
  }
}

class LabelAndInput {

  static propTypes = {
    name: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired
  }

  render() {
    return (
        <div className="field-input-wrapper">
          <div>{this.props.name}</div>
          <input type="text" name={this.props.inputName} />
        </div>
    );
  }
}

export default CampusAmbassador;
