import React, { Component } from 'react'
import Button from '../../../components/Button/Button'
import introductionImage from '../../../assets/Images/illu-solution-2.png'
import '../Introduction.scss'
class IntroductionWeb extends Component {
    render(){
    return (
        <div className="row justify-content-center">
          <div className="col-sm-5 d-none d-sm-block">
            <span className="introduction-web-text">
              Better Your Performance
            </span>
            <div />
            <span className="introduction-web-text">
              With Our Solution
            </span>
            <div />
            <Button title={"Explore Us"}/>
          </div>
          <div className="col-sm-7 d-none d-sm-block">
            <img
              src={introductionImage}
              alt="banner"
              height="90%"
              width="90%"
              className="img-responsive"
            />
          </div>
        </div>
    )
    }
}
export default IntroductionWeb