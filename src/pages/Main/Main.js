import React, { Component } from 'react'
import './Main.scss'
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Introduction from "../Introduction/Introduction"
import Service from "../Service/Service"
const sections = {
  introduction: "introduction",
  service: "service",
  footer: "footer",
}
export default class Main extends Component {
    render() {
        return(
          <div className="main-container">
            <div>
            <Header sections={sections} />
            <div
                className="white-container"
                id={sections.introduction}
            >
                <Introduction />
            </div>
            <div 
                className="lightgrey-container"
                id={sections.service}
            >
                <Service />
            </div>
            <div
                style={{ marginTop: "5em", marginBottom: "5em" }}
                id={sections.footer}
            >
                <Footer />
            </div>
            </div>
        </div>
        )
    }
}