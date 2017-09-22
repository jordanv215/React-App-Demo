import React, { Component } from 'react';
// import React and Component functionality from react

// create the react component
class Timer extends Component {
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
