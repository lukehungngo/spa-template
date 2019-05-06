import React, { Component } from "react"
import { Button } from "reactstrap"
import "./button.scss"
const defaultValue = {
  type: "primary",
  style: {},
  text: "missing text",
  onClick: () => {},
}
export default class StyledButton extends Component {
  render() {
    return (
      <Button
        color={this.props.type || defaultValue.type}
        style={this.props.style || defaultValue.style}
        onClick={this.props.onClick || defaultValue.onClick}
      >
        {this.props.text || defaultValue.text}
      </Button>
    )
  }
}
