import React, { Component } from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
} from "reactstrap"
import { Link, animateScroll as scroll } from "react-scroll"
import logo from '../../assets/Images/tsf-logo.png'
import NavItem from '../../components/NavItem/NavItem'
const defaultValue= {
    listItem: ["introduction", "service", "whyus", "blog", "contact"]
}
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
      nav: "nav.top"
      isActiveLink: {
        introduction: "active-link",
        service: "",
        whyus: "",
        blog: "",
        contact: "",
      },
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
    this.scrollToggleNavbar = this.scrollToggleNavbar.bind(this)
    this.toggleActiveLink = this.toggleActiveLink.bind(this)
    this.renderSidebar = this.renderSidebar.bind(this)
    this.renderNavItem = this.renderNavItem.bind(this)
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }
  toggleActiveLink(section) {
    switch (section) {
      case "introduction":
        this.setState({
          isActiveLink: {
            introduction: "active-link",
            service: "",
            whyus: "",
            blog: "",
            contact: "",
          },
        })
        break
      case "service":
        this.setState({
          isActiveLink: {
            introduction: "",
            service: "active-link",
            whyus: "",
            blog: "",
            contact: "",
          },
        })
        break
      case "whyus":
        this.setState({
          isActiveLink: {
            introduction: "",
            service: "",
            whyus: "active-link",
            blog: "",
            contact: "",
          },
        })
        break
      case "blog":
        this.setState({
          isActiveLink: {
            introduction: "",
            service: "",
            whyus: "",
            blog: "active-link",
            contact: "",
          },
        })
        break
      case "contact":
        this.setState({
          isActiveLink: {
            introduction: "",
            service: "",
            whyus: "",
            blog: "",
            contact: "active-link",
          },
        })
        break
      default:
        this.setState({
          isActiveLink: this.state.isActiveLink,
        })
        return
    }
  }
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  componentDidMount() {
    window.onscroll = () => {
      this.scrollToggleNavbar()
    }
  }
  componentDidUpdate() {
    this.scrollToggleNavbar()
  }
  scrollToggleNavbar() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        nav: "nav top"
    } else {
        nav: "nav scroll"
    }
  }
  renderNavItem() {
    return (
      <div>
        <NavItem className={this.state.isActiveLink.introduction}>
          <Link
            onSetActive={() => this.toggleActiveLink("introduction")}
            onClick={() => this.toggleNav()}
            className="nav-item-link"
            activeClass="active"
            to="introduction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Introduction
          </Link>
          <div className="nav-item-underline" />
        </NavItem>
        <NavItem className={this.state.isActiveLink.service}>
          <Link
            onSetActive={() => this.toggleActiveLink("service")}
            onClick={() => this.toggleNav()}
            className="nav-item-link"
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Service
          </Link>
          <div className="nav-item-underline" />
        </NavItem>
        <NavItem className={this.state.isActiveLink.whyus}>
          <Link
            onSetActive={() => this.toggleActiveLink("whyus")}
            onClick={() => this.toggleNav()}
            className="nav-item-link"
            activeClass="active"
            to="whyus"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Why Us?
          </Link>
          <div className="nav-item-underline" />
        </NavItem>
        <NavItem className={this.state.isActiveLink.contact}>
          <Link
            onSetActive={() => this.toggleActiveLink("contact")}
            onClick={() => this.toggleNav()}
            className="nav-item-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            Contact
          </Link>
          <div className="nav-item-underline" />
        </NavItem>
      </div>
    )
  }
  renderSidebar = () => {
    return (
      <div>
        <Nav className="sidebar">
          <div className="col">
            <div
              className="row justify-content-end"
              style={{ padding: "5px", margin: "10px" }}
            >
              <div
                className="fa fa-arrow-right fa-lg"
                onClick={this.toggleNav}
              />
            </div>
            {this.renderNavItem()}
          </div>
        </Nav>
        <div className={this.state.isNavOpen ? "overlay active" : "overlay"} />
      </div>
    )
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
              <NavItem className={this.state.isActiveLink.introduction}>
                <Link
                  onSetActive={() => this.toggleActiveLink("introduction")}
                  // onClick={() => this.toggleNav()}
                  className="nav-item-link"
                  activeClass="active"
                  to="introduction"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Introduction
                </Link>
                <div className="nav-item-underline" />
              </NavItem>
              <NavItem className={this.state.isActiveLink.service}>
                <Link
                  onSetActive={() => this.toggleActiveLink("service")}
                  // onClick={() => this.toggleNav()}
                  className="nav-item-link"
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Service
                </Link>
                <div className="nav-item-underline" />
              </NavItem>
              <NavItem className={this.state.isActiveLink.whyus}>
                <Link
                  onSetActive={() => this.toggleActiveLink("whyus")}
                  // onClick={() => this.toggleNav()}
                  className="nav-item-link"
                  activeClass="active"
                  to="whyus"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Why Us?
                </Link>
                <div className="nav-item-underline" />
              </NavItem>
              <NavItem className={this.state.isActiveLink.blog}>
                <Link
                  onSetActive={() => this.toggleActiveLink("blog")}
                  // onClick={() => this.toggleNav()}
                  className="nav-item-link"
                  activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Blog
                </Link>
                <div className="nav-item-underline" />
              </NavItem>
              <NavItem className={this.state.isActiveLink.contact}>
                <Link
                  onSetActive={() => this.toggleActiveLink("contact")}
                  // onClick={() => this.toggleNav()}
                  className="nav-item-link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={500}
                >
                  Contact
                </Link>
                <div className="nav-item-underline" />
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
