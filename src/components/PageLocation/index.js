import React, { Component } from 'react'
import LocationContext from "../../context/LocationContext"

export default class PageLocation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            path: props.pagePath
        }
    }

    componentDidMount() {
        this.context.updatePagePath(this.props.path);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
    )
  }
}

PageLocation.contextType = LocationContext; 