// ControlledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './media/40615-star.json'

class ControlledLottie extends Component {
  onAnimationFinish = () => {
    console.log(this.state.isStopped, this.state.isPaused)
  }

  render(){

    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
      // isClickToPauseDisabled: false
    };

    return(
      <div className="controlled">
        <Lottie options={defaultOptions}
              height={60}
              width={60}
              onClick={() => this.setState({isStopped: false})}
        />
      </div>
    )
  }
}

export default ControlledLottie