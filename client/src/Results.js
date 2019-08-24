import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'reactstrap';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      E:0,
      I:0,
      S:0,
      N:0,
      T:0,
      F:0,
      J:0,
      P:0
    }
  }

  render() {
    return (
      <div className="allContent">
      <h1>HELLO!!!!</h1>
      </div>
    );
  }
};

export default Results;
