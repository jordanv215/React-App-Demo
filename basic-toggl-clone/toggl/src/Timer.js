import React, { Component } from 'react';
// import React and Component functionality from react

// create the react component
class Timer extends Component {

// using Component life cycle - this will trigger right after Timer has finished loading onto the page.
  componentDidMount(){
    // in this case, start the prop as soon as Timer loads.
    this.start()
  }

  // let's start creating a couple of functions to handle the desired functionality of the application
  stop(){
    // when stop is called, clear the setInterval - or just stop the timer
    clearInterval(this.timer)
  }

  start(){
    // used so you can't hit stop multiple times and add seconds per click
  this.stop()
  // 1000 milliseconds
  this.timer = setInterval(this.ticker, 1000)
  }

  // stops timer, then sets clock back to 0
  reset(){
    this.stop()
    this.setState({clock: 0})
  }

  // function that is called every second and then adds 1 second
  ticker(){
    const newTime = this.state.clock+1
    this.setState({clock: newTime})
  }

  // initializes the object
  constructor(props){
    // gives you access to this prop in the constructor
  super(props);

  this.state = {
    clock: 0
  };

  // binding gives you access to the global object that you're in INSIDE the function
  // You can also do this
  // stop = ()=>{
  // <button onClick={()=>this.stop()}>Stop</button>
  this.ticker = this.ticker.bind(this);
  this.stop = this.stop.bind(this);
  this.start = this.start.bind(this);
  this.reset = this.reset.bind(this);
}


  render(){
    return(
      <div>
        <p>Time spent on site: </p>
        <p>{this.state.clock} seconds</p>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

// export the timer component
export default Timer;
