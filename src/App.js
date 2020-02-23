import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    inputText: '',
    textLength: 0
  }

  changeInputHandler = (event) => {
    const inputText = event.target.value;
    this.setState({
      inputText: inputText,
      textLength: inputText.length
    });
  }

  deleteCharhandler = (index) => {
    const inputText = this.state.inputText.split('');
    inputText.splice(index, 1);
    const updatedText = inputText.join('');

    this.setState({
      inputText: updatedText
    });

  }

  render() {
    const charList = this.state.inputText.split('').map((char, index) => {
      return <CharComponent 
        textChar={char} 
        key={index}
        clicked={() => this.deleteCharhandler(index)}/>
    });
    
    return (
      <div className="App">
        <input type="text" 
        onChange={this.changeInputHandler} 
        value={this.state.inputText}/>
        <p>Input length is: {this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength}/>
        {charList}
      </div>
    );
  }
}

export default App;
