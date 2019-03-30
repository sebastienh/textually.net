import React, { Component } from 'react'
import ScrollingNumbersSidebarContext from "../../context/ScrollingNumbersSidebarContext"

export default class PageScrollingNumbers extends Component {

    componentDidMount() {
        this.context.updateLinks(this.props.links);
        this.context.show();
    }

    componentWillUnmount() {

        this.context.hide()
        this.context.resetLinks()
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
    )
  }
}

PageScrollingNumbers.contextType = ScrollingNumbersSidebarContext; 