import React, { Component } from 'react'
const defaultValue = {
    className: "btn btn-social-icon btn-google",
    iconName: "fa fa-google-plus",
    href: "http://google.com/+",
    style: {}
}
export default class SocialIcon extends Component {
    render(){
        return(
            <a
            style={defaultValue.style || this.props.style}
            className={defaultValue.className || this.props.className}
            href= {defaultValue.href || this.props.href}
            >
            <i className= {defaultValue.iconName || this.props.iconName/>
          </a>
        )
    }
}