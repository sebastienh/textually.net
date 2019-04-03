import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"

export default class TitledSection extends Component {

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
        const node = ReactDOM.findDOMNode(this);
        const boundingRect = node.getBoundingClientRect();
        if( boundingRect.top <= window.scrollY && window.scrollY <= boundingRect.bottom) {
            this.context.updateIndexInPage(this.state.number);
        }
    }

    render() {

        const { children, id } = this.props

        return (
            <div id={id}>
                {children}
            </div>
        )
    }
}

TitledSection.contextType = LocationContext; 



