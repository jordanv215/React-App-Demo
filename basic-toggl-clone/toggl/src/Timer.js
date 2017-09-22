import React, { Component } from 'react';
// import React and Component functionality from react

// create the react component
class Timer extends Component {

// using Component life cycle - this will trigger right after Timer has finished loading onto the page.
  componentDidMount(){
    this.start
  }

  // let's start creating a couple of functions to handle the desired functionality of the application
  stop(){
    clearInterval(this.timer)
  }

  start(){
  this.stop()
  this.timer = setInterval(this.ticker, 1000)
  }

  reset(){
    this.stop()
    this.setState({clock: 0})
  }

  ticker(){
    const newTime = this.state.clock+1
    this.setState({clock: newTime})
  }


  render(){
    return(
      <div>
        <p>Time spent on site: </p>
        <span>00 seconds</span>
      </div>
    );
  }
}

// export the timer component
export default Timer;
