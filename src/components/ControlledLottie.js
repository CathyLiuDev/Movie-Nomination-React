// ControlledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './media/40615-star.json'

class ControlledLottie extends Component {
  // state = {isStopped: false};
  // console.log(this.state.isStopped, this.state.isPaused);
  // componentDidMount() {
    // this.setState({isStopped: !isStopped, isPaused: !isPaused});
  // }
  onAnimationFinish = () => {
    // this.setState({isStopped: 'true'})
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
              // isStopped={this.state.isStopped}
              // isClickToPauseDisabled={true}
              // isStopped={this.props.isStopped}
              // isPaused={this.props.isPaused}
              onClick={() => this.setState({isStopped: false})}
        />
        {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>Stop</button>
        <button style={buttonStyle} onClick={() => this.setState({isStopped: false, isPaused: false })}>Play</button>
        <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>Pause</button> */}
      </div>
    )
  }
}

export default ControlledLottie