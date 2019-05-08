import React from "react"
import { Card } from "reactstrap"
import mobileImgage from "../../assets/Images/service-mobile-2.png"
import blockchainImage from "../../assets/Images/service-blockchain-3.png"
import webImage from "../../assets/Images/service-web-3.png"
function Service() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="col">
        <h3 className="service-intro-small-text">OUR SERVICES</h3>
        <h1 className="service-big-text">Making Ideas Come to Life !</h1>
      </div>
      <div>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-4" style={{ padding: "0px" }}>
            <Card className="card-service col align-items-center">
              <div className="row justify-content-center">
                <img
                  src={mobileImgage}
                  style={{ width: "6rem", height: "6rem" }}
                  alt="mobile"
                />
              </div>
              <div className="row justify-content-center">
                <span
                  className="text-center service-sm-text"
                  style={{ marginTop: "20px" }}
                >
                  Mobile Development
                </span>
                <span
                  className="text-center service-small-text"
                  style={{ marginTop: "10px" }}
                >
                  Our services include both friendly and scalable IOS and
                  Android application
                </span>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-4" style={{ padding: "0px" }}>
            <Card className="card-service col align-items-center">
              <div className="row justify-content-center">
                <img
                  src={webImage}
                  style={{ width: "6rem", height: "6rem" }}
                  alt="web"
                />
              </div>
              <div className="row justify-content-center">
                <span
                  className="text-center service-sm-text"
                  style={{ marginTop: "20px" }}
                >
                  Web Development
                </span>
                <span
                  className="text-center service-small-text"
                  style={{ marginTop: "10px" }}
                >
                  Variety kinds of web application with good user experience,
                  responsive design
                </span>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-4" style={{ padding: "0px" }}>
            <Card className="card-service col align-items-center">
              <div className="row justify-content-center">
                <img
                  src={blockchainImage}
                  style={{ width: "6rem", height: "6rem" }}
                  alt="mobile"
                />
              </div>
              <div className="row justify-content-center">
                <span
                  className="text-center service-sm-text"
                  style={{ marginTop: "20px" }}
                >
                  Blockchain
                </span>
                <span
                  className="text-center service-small-text"
                  style={{ marginTop: "10px" }}
                >
                  An insightful Blockchain application development is at your
                  service
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}
export default Service
