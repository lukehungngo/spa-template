import React, { Component } from 'react'
import { NavItem, Link } from 'reactstrap'
import { Link, animateScroll as scroll } from "react-scroll"
import './NavItem.scss'
const defaultValue = {
    navClassName: "",
    onSetActive: () => {},
    onClick: () => {},
    scrollTo: "introduction"
}
export default class StyledNavItem extends Component {
    render() {
      return (
        <NavItem className={this.props.navClassName || defaultValue.navClassName}>
          <Link
            onSetActive={this.props.onSetActive || defaultValue.onSetActive}
            onClick={this.props.scrollTo || defaultValue.onClick}
            activeClass="active"
            to={this.props.scrollTo || defaultValue.scrollTo}
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            Contact
          </Link>
          <div />
        </NavItem>
      )
    }
}