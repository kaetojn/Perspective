import React from 'react';

class EmailBar extends React.Component {
  render() {
    return (
      <div className="emailbar">
      <div className="question"><h3>Your Email</h3></div>
      <input className="email" type="email" placeholder="you@example.com" value={this.props.email} onChange={this.props.value}/>
      </div>
    );
  }
};

export default EmailBar;