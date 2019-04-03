import React, { Component } from 'react'
import TitledSidebarContext from "../../context/TitledSidebarContext"

export default class TitledSidebar extends Component {

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

TitledSidebar.contextType = TitledSidebarContext; 