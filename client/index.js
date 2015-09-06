import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import { Menubar, Home, Schedule, News,
         Hospitality, Sponsors, Contact,
         Login, Sidebar, Footer, About,
         Feedback, CampusAmbassador } from './components';

import './styles/main.css';

class App {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    const content = (
      <div className="row">
        {this.props.children}
      </div>
    );

    // FIXME content-wrapper has display:flex so columns here don't stack
    const contentWrapper = (
      <div className="content-wrapper row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="content col-md-10">
          {content}
        </div>
      </div>
    );

    return (
      <div className="app-container">
        <Menubar />
        {contentWrapper}
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
      <Route path="feedback" component={Feedback} />
      <Route path="about" component={About}/>
      <Route path="campusAmbassador" component={CampusAmbassador} />
    </Route>
  </Router>
);

ReactDOM.render(AppRouter, document.getElementById('app'));

export default App;
