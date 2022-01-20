import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      session:25,
      break:5,
      seconds:0,
      counting:false
    }
    
    this.handleBreakDecrement=this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement=this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement=this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement=this.handleSessionIncrement.bind(this);
    this.handleReset=this.handleReset.bind(this);
    this.handleStart=this.handleStart.bind(this);
  }

  handleBreakIncrement(event){
    if(this.state.break<60){
      this.setState({
        break:this.state.break+1
      })
    }
  }

  handleBreakDecrement(event){
    if(this.state.break>1){
      this.setState({
      break:this.state.break-1
    })
    }
    
  }
  
  handleSessionIncrement(event){
    if(this.state.session<60){
      this.setState({
        session:this.state.session+1
      })
    }
  }
  
  handleSessionDecrement(event){
    if(this.state.session>1){
      this.setState({
        session:this.state.session-1
      })
    }
  }

  handleReset(event){
    this.setState({
      session:25,
      break:5
    })
  }

  handleStart(event){
    console.log("it's start");
    this.setState({counting : !this.state.counting})
    if (this.state.counting === true){
      setInterval( () => this.setState ({session:this.state.session-1 }), 1000);
    }
    console.log(this.state.counting)
       
  }

  render(){
    return(
      <div className="big-container">
        <div className="count-down">
          <div id="timer-label">SESSION</div>
          <time id="time-left">{this.state.session}</time>
          <div className='buttons'>
            <button id="start_stop"onClick={this.handleStart}>start</button>
          <button id="reset" onClick={this.handleReset}>reset</button>
          </div>
          
        </div> 
        
        <div className="edit-value">
          <div className="edit-label">Change Session or Break Length:</div>
          
          <div className='edit-session'>
            <div id="session-label">SESSION LENGTH</div>
            <div id="session-length">{this.state.session}</div>
            <button id="session-increment" onClick={this.handleSessionIncrement}>more</button>
            <button id="session-decrement" onClick={this.handleSessionDecrement}>less</button>
                    
          </div>

          <div className='edit-break'>
            <div id="break-label">Break Length (minutes)</div>
            <div id="break-length">{this.state.break}</div>
            <button id="break-increment" onClick={this.handleBreakIncrement}>more</button>
            <button id="break-decrement" onClick={this.handleBreakDecrement}>less</button>
          </div>
        </div>
      </div>
     
    )
  }
}

export default App;
