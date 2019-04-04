import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"
import handleViewport from 'react-in-viewport';

const HeaderBox = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #f9f9f9;
    height: ${props => props.height ?  props.height : "100%"};
    width: ${props => props.width ?  props.width : "100%"};
`   

class PageSectionInsideBlock extends Component {

    render() {

        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

const TrackerPageSection = handleViewport(PageSectionInsideBlock, { rootMargin: '-1.0px' });

class PageSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        }
        this.onEnterViewport = this.onEnterViewport.bind(this);
        this.onLeaveViewport = this.onLeaveViewport.bind(this);
    }

    onEnterViewport() {
        this.context.enteringIndex(this.state.number);
    }

    onLeaveViewport() {
        this.context.leavingIndex(this.state.number);
    }

    render() {

        const { children, id, partialVisibility, minTopValue, ...other } = this.props

        return (

            <TrackerPageSection onEnterViewport={this.onEnterViewport} onLeaveViewport={this.onLeaveViewport}>
                <Box {...other} id={id}>
                    {children}
                </Box>
            </TrackerPageSection>
        )
    }
}

PageSection.contextType = LocationContext; 

export default PageSection;
