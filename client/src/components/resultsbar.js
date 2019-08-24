import React from 'react';

class ResultsBar extends React.Component {
  render() {
    return (
      <div className="resultsContent">
      <div className="leftcontainer"><h3 className="Left">{this.props.left}</h3></div>
      <div className="barcontainer">
      <div className="lbar" style={{backgroundColor: this.props.lc}}></div>
      <div className="rbar" style={{backgroundColor: this.props.rc}}></div>
      </div>
      <div lassName="rightcontainer"><h3 className="Right">{this.props.right}</h3></div>
      </div>
    );
  }
};

export default ResultsBar;

