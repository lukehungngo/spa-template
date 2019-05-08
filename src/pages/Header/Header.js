import React, { Component } from "react"
import _ from "lodash"
import { Navbar, NavbarBrand, Nav, Collapse } from "reactstrap"
import NavItem from "../../components/NavItem/NavItem"
import logo from "../../assets/Images/tsf-logo.png"
import { Link, animateScroll as scroll } from "react-scroll"
const defaultValue = {
  listItem: ["introduction", "service", "whyus", "blog", "contact"],
}
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
      nav: "nav top",
      isActiveLink: {
        introduction: true,
        service: false,
        whyus: false,
        blog: false,
        contact: false,
      },
    }
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }
  toggleActiveLink = (section) => {
    let newIsActiveLink = this.state.isActiveLink
    _.forIn(this.state.isActiveLink, (value, key) => {
      if (this.state.isActiveLink.hasOwnProperty(key)) {
        if (key === section) {
          newIsActiveLink[key] = true
        } else {
          newIsActiveLink[key] = false
        }
      }
    })
    this.setState({
      isActiveLink: newIsActiveLink,
    })
  }
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  componentDidMount() {
    window.onscroll = () => {
      this.scrollToggleNavbar()
    }
  }
  scrollToggleNavbar = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      this.setState({ nav: "nav top" })
    } else {
      this.setState({ nav: "nav scroll" })
    }
  }
  render() {
    const collapseIcon = this.state.isNavOpen
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right"
    return (
      <Navbar expand="md" className={this.state.nav}>
        <div className="container">
          <NavbarBrand className="mr-auto" href="/" onClick={this.scrollToTop}>
            <img
              src={logo}
              height="40"
              width="226"
              alt="TSF"
              onClick={this.scrollToTop}
            />
          </NavbarBrand>
          <button
            onClick={this.toggleNav}
            id="toggleButton"
            className={`${collapseIcon}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-align-justify" />
          </button>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className={"row ml-auto"} style={{ margin: "5px" }}>
              <NavItem
                onSetActive={()=> this.toggleActiveLink("introduction")}
                scrollTo={"introduction"}
                onClick={this.toggleNav}
                title={"Introduction"}
                isActiveLink={this.state.isActiveLink.introduction}
              />
              <NavItem
                onSetActive={()=>this.toggleActiveLink("service")}
                scrollTo={"service"}
                onClick={this.toggleNav}
                title={"Service"}
                isActiveLink={this.state.isActiveLink.service}
              />
              <NavItem
                onSetActive={()=>this.toggleActiveLink("footer")}
                scrollTo={"footer"}
                onClick={this.toggleNav}
                title={"Footer"}
                isActiveLink={this.state.isActiveLink.footer}
              />
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
