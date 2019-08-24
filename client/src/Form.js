import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from '../routes';
import ReactDOM from 'react-dom';
import EmailBar from './components/email';
import QuestionBar from './components/QuestionBar';
import { Button } from 'reactstrap';

const questions = ["You find it takes effort to introduce yourself to other people.", "You consider yourself more practical than creative.", "Winning a debate matters less to you than making sure no one gets upset.", "You get energized going to social events that involve many interactions.", "You often spend time exploring unrealistic and impractical yet intriguing ideas.", "Deadlines seem to you to be of relative rather than absolute importance.", "Logic is usually more important than heart when it comes to making important decisions.", "Your home and work environments are quite tidy.", "You do not mind being at the center of attention.", "Keeping your options open is more important than having a to-do list."];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q1Answer: '',
      q2Answer: '',
      q3Answer: '',
      q4Answer: '',
      q5Answer: '',
      q6Answer: '',
      q7Answer: '',
      q8Answer: '',
      q9Answer: '',
      q10Answer: '',
      email: '',
      E:0,
      I:0,
      S:0,
      N:0,
      T:0,
      F:0,
      J:0,
      P:0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.q1 = this.q1.bind(this)
    this.q2 = this.q2.bind(this)
    this.q3 = this.q3.bind(this)
    this.q4 = this.q4.bind(this)
    this.q5 = this.q5.bind(this)
    this.q6 = this.q6.bind(this)
    this.q7 = this.q7.bind(this)
    this.q8 = this.q8.bind(this)
    this.q9 = this.q9.bind(this)
    this.q10 = this.q10.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleFormSubmit(formSubmitEvent) {
    //formSubmitEvent.preventDefault();

  var one = parseInt(this.state.q1Answer)
  var two = parseInt(this.state.q2Answer)
  var three = parseInt(this.state.q3Answer)
  var four = parseInt(this.state.q4Answer)
  var five = parseInt(this.state.q5Answer)
  var six = parseInt(this.state.q6Answer)
  var sev = parseInt(this.state.q7Answer)
  var eight = parseInt(this.state.q8Answer)
  var nine = parseInt(this.state.q9Answer)
  var ten = parseInt(this.state.q10Answer)


    const data = {email:this.state.email, q1:one, q2:two, q3:three, q4:four, q5:five, q6:six, q7:sev, q8:eight, q9:nine, q10:ten};

    fetch('/api/results', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)})
        .then(resposnse => resposnse.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
   }

  q1(changeEvent) {this.setState({q1Answer: changeEvent.target.value});}
  q2(changeEvent) {this.setState({q2Answer: changeEvent.target.value});}
  q3(changeEvent) {this.setState({q3Answer: changeEvent.target.value});}
  q4(changeEvent) {this.setState({q4Answer: changeEvent.target.value});}
  q5(changeEvent) {this.setState({q5Answer: changeEvent.target.value});}
  q6(changeEvent) {this.setState({q6Answer: changeEvent.target.value});}
  q7(changeEvent) {this.setState({q7Answer: changeEvent.target.value});}
  q8(changeEvent) {this.setState({q8Answer: changeEvent.target.value});}
  q9(changeEvent) {this.setState({q9Answer: changeEvent.target.value});}
  q10(changeEvent) {this.setState({q10Answer: changeEvent.target.value});}
  handleEmailChange(changeEvent) {this.setState({email: changeEvent.target.value});}


  render() {
    return (
      <div className="allContent">
      <form onSubmit={this.handleFormSubmit}>
      <QuestionBar question={questions[0]} handleOptionChange={this.q1} value={this.state.q1Answer}/>
      <QuestionBar question={questions[1]} handleOptionChange={this.q2} value={this.state.q2Answer}/>
      <QuestionBar question={questions[2]} handleOptionChange={this.q3} value={this.state.q3Answer}/>
      <QuestionBar question={questions[3]} handleOptionChange={this.q4} value={this.state.q4Answer}/>
      <QuestionBar question={questions[4]} handleOptionChange={this.q5} value={this.state.q5Answer}/>
      <QuestionBar question={questions[5]} handleOptionChange={this.q6} value={this.state.q6Answer}/>
      <QuestionBar question={questions[6]} handleOptionChange={this.q7} value={this.state.q7Answer}/>
      <QuestionBar question={questions[7]} handleOptionChange={this.q8} value={this.state.q8Answer}/>
      <QuestionBar question={questions[8]} handleOptionChange={this.q9} value={this.state.q9Answer}/>
      <QuestionBar question={questions[9]} handleOptionChange={this.q10} value={this.state.q10Answer}/>
      <EmailBar email={this.state.email} value={this.handleEmailChange}/>
      <div className="sumbitbutton"><Button color="primary" type="submit">Save & Continue</Button></div>
      </form>
      </div>
    );
  }
};

export default Form;
