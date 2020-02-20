import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'SuperMichal'
  };

  handleUserName = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {

    return (
      <div className="App">
        <UserInput 
          changed={this.handleUserName} 
          userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='Michal'/>
      </div>
    );
  }
}

export default App;
