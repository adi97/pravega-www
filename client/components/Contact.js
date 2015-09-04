import React, { PropTypes } from 'react';

import '../styles/contact.css';

class Contact {
  render() {
    return (
      <div className="contactwrapper">
        <div className="title">CORE TEAM</div>
        <ContactBox name="Sarat Chandra" designation="Chief Coordinator" email="sarat@pravega.org" phonenumber="8762728624"/>
        <ContactBox name="Arpan Das" designation="Technical events" email="arpan@pravega.org" phonenumber="8662730835"/>
        <ContactBox name="Kartikay Gaur" designation="Cultural events" email="kartikay@pravega.org" phonenumber="9632134045"/>
        <ContactBox name="Varuneshwar Reddy" designation="Publicity" email="varun@pravega.org" phonenumber="9632159789"/>
        <ContactBox name="Aditya Hardikar" designation="Outreach" email="aditya@pravega.org" phonenumber="9632161981"/>
        <ContactBox name="Pranav Nuti" designation="Finance" email="pranavnuti@pravega.org" phonenumber="8008889152"/>
        <ContactBox name="Rishabh Batra" designation="Logistics" email="rishabh@pravega.org" phonenumber="9663964503"/>
      </div>
    );
  }
}


class ContactBox {

  static propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="contactbox">
        <div className="name">{this.props.name}</div>
        <div className="designation">{this.props.designation}</div>
        <div className="email">{this.props.email}</div>
        <div className="phonenumber">{this.props.phonenumber}</div>
      </div>
    );
  }
}


export default Contact;
