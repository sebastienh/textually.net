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

        // when we click on a page we really navigate there,
        // so there is no displayed section anymore 
        // as the section displayed reflects the actual section
        this.context.updateDisplayedSectionPath(null);
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