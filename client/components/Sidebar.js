import React, { Component, PropTypes } from 'react';

// TODO Animate Sidebar Transitions using react-motion or CSS animations.

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      option: 0
    };
  }

  handleClick(option) {
    this.setState({
      option
    });
  }

  render() {
    const options = [
      <MainOptions handleClick={::this.handleClick}/>,
      <TechnicalEvents handleClick={::this.handleClick} />,
      <CulturalEvents handleClick={::this.handleClick} />,
      <FunEvents handleClick={::this.handleClick} />,
      <OnlineEvents handleClick={::this.handleClick} />,
      <Workshops handleClick={::this.handleClick} />,
      <LectureSeries handleClick={::this.handleClick} />,
    ];

    return (
      <div className="sidebar">
        {options[this.state.option]}
      </div>
    );
  }
}

class MainOptions {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="sidebar-options">
        <div key={1} onClick={() => { this.props.handleClick(1); }}>Technical Events</div>
        <div key={2} onClick={() => { this.props.handleClick(2); }}>Cultural Events</div>
        <div key={3} onClick={() => { this.props.handleClick(3); }}>Fun Events</div>
        <div key={4} onClick={() => { this.props.handleClick(4); }}>Online Events</div>
        <div key={5} onClick={() => { this.props.handleClick(5); }}>Workshops</div>
        <div key={6} onClick={() => { this.props.handleClick(6); }}>Lecture Series</div>
      </div>
    );
  }
}

class TechnicalEvents {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="sidebar-options">
        <div className="back" onClick={() => { this.props.handleClick(0); }}>Back</div>
        <div>Technical Event 1</div>
        <div>Technical Event 2</div>
        <div>Technical Event 3</div>
        <div>Technical Event 4</div>
        <div>Technical Event 5</div>
        <div>Technical Event 6</div>
        <div>Technical Event 7</div>
        <div>Technical Event 8</div>
      </div>
    );
  }
}

class CulturalEvents {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="sidebar-options">
        <div className="back" onClick={() => { this.props.handleClick(0); }}>Back</div>
        <div>Cultural Event 1</div>
        <div>Cultural Event 2</div>
        <div>Cultural Event 3</div>
        <div>Cultural Event 4</div>
        <div>Cultural Event 5</div>
        <div>Cultural Event 6</div>
        <div>Cultural Event 7</div>
        <div>Cultural Event 8</div>
      </div>
    );
  }
}

class FunEvents {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="sidebar-options">
        <div className="back" onClick={() => { this.props.handleClick(0); }}>Back</div>
        <div>Fun Event 1</div>
        <div>Fun Event 2</div>
        <div>Fun Event 3</div>
        <div>Fun Event 4</div>
        <div>Fun Event 5</div>
        <div>Fun Event 6</div>
        <div>Fun Event 7</div>
        <div>Fun Event 8</div>
      </div>
    );
  }
}

class OnlineEvents {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="sidebar-options">
        <div className="back" onClick={() => { this.props.handleClick(0); }}>Back</div>
        <div>Online Event 1</div>
        <div>Online Event 2</div>
        <div>Online Event 3</div>
        <div>Online Event 4</div>
        <div>Online Event 5</div>
        <div>Online Event 6</div>
        <div>Online Event 7</div>
        <div>Online Event 8</div>
      </div>
    );
  }
}

class Workshops {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="sidebar-options">
        <div className="back" onClick={() => { this.props.handleClick(0); }}>Back</div>
        <div>Workshops 1</div>
        <div>Workshops 2</div>
        <div>Workshops 3</div>
        <div>Workshops 4</div>
        <div>Workshops 5</div>
        <div>Workshops 6</div>
        <div>Workshops 7</div>
        <div>Workshops 8</div>
      </div>
    );
  }
}

class LectureSeries {
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="sidebar-options">
        <div className="back" onClick={() => { this.props.handleClick(0); }}>Back</div>
        <div>Lecture 1</div>
        <div>Lecture 2</div>
        <div>Lecture 3</div>
        <div>Lecture 4</div>
        <div>Lecture 5</div>
        <div>Lecture 6</div>
        <div>Lecture 7</div>
        <div>Lecture 8</div>
      </div>
    );
  }
}

export default Sidebar;
