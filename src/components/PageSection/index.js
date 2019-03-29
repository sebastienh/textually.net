import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"

const HeaderBox = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #f9f9f9;
    height: ${props => props.height ?  props.height : "100%"};
    width: ${props => props.width ?  props.width : "100%"};
`

export default class PageSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        }
        this.handleScrollPositionChange = this.handleScrollPositionChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollPositionChange);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollPositionChange);
    }

    handleScrollPositionChange(e) {
        console.log("handling scroll position change in PageSection:" + window.scrollY);

        const node = ReactDOM.findDOMNode(this);
        const boundingRect = node.getBoundingClientRect();
        if( boundingRect.top <= window.scrollY && window.scrollY <= boundingRect.bottom) {
            this.context.updateIndexInPage(this.state.number);
        }
    }

    render() {

        const { children } = this.props

        return (
            <div>
                {children}
            </div>
        )
    }
}

PageSection.contextType = LocationContext; 

