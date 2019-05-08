import React from "react"
import "./App.css"
import Footer from "./pages/Footer/Footer"
import Header from "./pages/Header/Header"
import Introduction from "./pages/Introduction/Introduction"
import Service from "./pages/Service/Service"
function App() {
  return (
    <div className="App">
      <div style={{ overflowX: "hidden" }}>
        <div>
          <Header />
          <div
            style={{ marginTop: "1em", marginBottom: "5em" }}
            id="introduction"
          >
            <Introduction />
          </div>
          <div style={{ marginTop: "5em", marginBottom: "5em" }} id="service">
            <Service />
          </div>
          <div style={{ marginTop: "5em", marginBottom: "5em" }} id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
