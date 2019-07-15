import React from 'react';
import './App.css'
import { Button, Input } from '../lib';

class App extends React.Component{
  state ={
    button: false
  }
  buttonToggle = () =>{
    this.setState({button: !this.state.button})
  }
  render(){
    return(
      <div>
        <section>
          <Button onClick={this.buttonToggle} type="primary">Toggle</Button >
          <Button disabled={this.state.button} type="primary">Primary</Button >
          <Button disabled={this.state.button} type="danger">Danger</Button >
          <Button disabled={this.state.button} type="text">Text Button</Button >
          <Button disabled type="primary">Disabled</Button >
        </section>
        <section>
          <Input>Hi</Input>
        </section>
      </div>
    );
  }
}

export default App;
