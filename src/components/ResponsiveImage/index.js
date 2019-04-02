import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import Img from 'gatsby-image/withIEPolyfill'

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
                <Img fixed={desktop} alt="desktop"/>
            </MediaQuery>
            <MediaQuery query="(min-width: 800px) and (max-width: 1200px)">
                <Img fixed={tablet} alt="tablet"/>
            </MediaQuery>
            <MediaQuery query="(max-width: 450px)">
                <Img fixed={mobile} alt="mobile"/>
            </MediaQuery>
        </React.Fragment>
    )
  }
}