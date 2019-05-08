import React, { Component } from "react"
import IntroductionWeb  from './Introduction/IntroductionWeb'
import IntroductionMobile from './Introduction/IntroductionMobile'
class Introduction extends Component {
  constructor(props){
    super(props)
    this.state = {
      isMobile: true
    }
  }
  componentDidMount() {
    this.renderSection()
  }
  renderSection = () => {
    if (window.innerWidth >= 576)
      this.setState({
        isMobile: false
      })
    else
    this.setState({
      isMobile: true
    })
  }
  render() {
    return (
      <div className="container">
       {this.state.isMobile? <IntroductionMobile /> : <IntroductionWeb />}
      </div>
    )
  }
}
export default Introduction
