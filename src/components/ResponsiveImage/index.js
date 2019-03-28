import React, { Component } from 'react'
import MediaQuery from 'react-responsive';

export default class ResponsiveImage extends Component {
  render() {

    const {
        desktop,
        tablet,
        mobile
    } = this.props.images;

    return (
        <React.Fragment>
            <MediaQuery query="(min-width: 1200px)">
                <img src={desktop} alt="desktop"/>
            </MediaQuery>
            <MediaQuery query="(min-width: 800px) and (max-width: 1200px)">
                <img src={tablet} alt="tablet"/>
            </MediaQuery>
            <MediaQuery query="(max-width: 450px)">
                <img src={mobile} alt="mobile"/>
            </MediaQuery>
        </React.Fragment>
    )
  }
}