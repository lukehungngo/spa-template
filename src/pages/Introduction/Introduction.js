import React, { Component } from "react"
import { Button } from "reactstrap"
import introduction from "../../assets/Images/illu-solution.png"
import introduction2 from "../../assets/Images/illu-solution-2.png"
class Introduction extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-xs-6 d-sm-none" style={{ margin: "1em" }}>
            <img
              src={introduction}
              alt="banner"
              height="100%"
              width="100%"
              className="img-responsive"
            />
          </div>
          <div className="col-xs-6 d-sm-none" style={{ margin: "1em" }}>
            <div className="col justify-content-center">
              <div className="row justify-content-center">
                <span className="introduction-medium-text">
                  Better Your Performance
                </span>
                <br />
                <span className="introduction-medium-text">
                  With Our Solution
                </span>
                <br />
              </div>
              <div className="row justify-content-center">
                <Button
                  color="primary"
                  className="video-button"
                  style={{
                    margin: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          <div className="col-sm-5 d-none d-sm-block">
            <span className="introduction-medium-text">
              Better Your Performance
            </span>
            <div />
            <span className="introduction-medium-text">With Our Solution</span>
            <div />
            <Button
              color="primary"
              className="video-button"
              style={{
                margin: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "18px",
                paddingRight: "18px",
              }}
            >
              Get Started
            </Button>
          </div>
          <div className="col-sm-7 d-none d-sm-block">
            <img
              src={introduction2}
              alt="banner"
              height="90%"
              width="90%"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Introduction
