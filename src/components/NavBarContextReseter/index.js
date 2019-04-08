import React, { Component } from 'react'
import NavBarSeparatorContext from "../../context/NavBarSeparatorContext"

export default class NavBarContextReseter extends Component {

  componentWillMount() {
    this.context.reset()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

NavBarContextReseter.contextType = NavBarSeparatorContext;