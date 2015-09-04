import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import { Menubar, Home, Schedule, News,
         Hospitality, Sponsors, Contact,
         Login, Sidebar, Footer, CampusAmbassador } from './components';

import './styles/main.css';

class App {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div className="container">
        <Menubar />
        <div className="content-wrapper">
          <Sidebar />
          <div className="content">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const AppRouter = (
  <Router history={createHistory()}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="schedule" component={Schedule} />
      <Route path="news" component={News} />
      <Route path="hospitality" component={Hospitality} />
      <Route path="contact" component={Contact} />
      <Route path="sponsors" component={Sponsors} />
      <Route path="login" component={Login} />
      <Route path="campusAmbassador" component={CampusAmbassador} />
    </Route>
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));

export default App;
