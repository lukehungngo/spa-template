import React from "react"
// import "./App.css"
import Footer from "./pages/Footer/Footer"
import Header from "./pages/Header/Header"
import Introduction from "./pages/Introduction/Introduction"
import Service from "./pages/Service/Service"
const sections = {
  introduction: 'introduction',
  service: 'service',
  footer: 'footer',
}
function App() {
  return (
    <div className="App">
      <div style={{ overflowX: "hidden" }}>
        <div>
          <Header sections={sections}/>
          <div
            style={{ marginTop: "1em", marginBottom: "5em" }}
            id={sections.introduction}
          >
            <Introduction />
          </div>
          <div style={{ marginTop: "5em", marginBottom: "5em" }} id={sections.service}>
            <Service />
          </div>
          <div style={{ marginTop: "5em", marginBottom: "5em" }} id={sections.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
