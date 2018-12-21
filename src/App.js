import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    user: [
      {userName: "Guilherme"}
    ]
  }

  nameChangedHandler = (event) => {
    this.setState({   user: [
      {userName: event.target.value}
    ]})
 }

  render() {
    return (
      <div className="App">
       <UserOutput 
       userName={this.state.user[0].userName}/> 
       <UserOutput 
       userName={this.state.user[0].userName}/>
       <UserOutput 
       userName={this.state.user[0].userName}/>
       <UserOutput 
       userName={this.state.user[0].userName}/>
       <UserInput 
       userName={this.state.user[0].userName}
       changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
