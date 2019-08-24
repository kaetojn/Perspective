import React from 'react';

class QuestionBar extends React.Component {
  render() {
    return (
      <div className="questionContent">
      <div className="question"><h3>{this.props.question}</h3></div>
      <div className="radioContent">
      <h3 className="Disagree">Disagree</h3>
      <input type="radio" value="1" checked={this.props.value === '1'} onChange={this.props.handleOptionChange}/>
      <input type="radio" value="2" checked={this.props.value === '2'} onChange={this.props.handleOptionChange}/>
      <input type="radio" value="3" checked={this.props.value === '3'} onChange={this.props.handleOptionChange}/>
      <input type="radio" value="4" checked={this.props.value === '4'} onChange={this.props.handleOptionChange}/>
      <input type="radio" value="5" checked={this.props.value === '5'} onChange={this.props.handleOptionChange}/>
      <input type="radio" value="6" checked={this.props.value === '6'} onChange={this.props.handleOptionChange}/>
      <input type="radio" value="7" checked={this.props.value === '7'} onChange={this.props.handleOptionChange}/>
      <h3 className="Agree">Agree</h3>
      </div>
      </div>
    );
  }
};

export default QuestionBar;

