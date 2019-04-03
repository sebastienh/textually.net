import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"
import VisibilitySensor from 'react-visibility-sensor'

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
        this.onChange = this.onChange.bind(this);
    }

    onChange(isVisible) {

        if(isVisible) {
            this.context.updateIndexInPage(this.state.number);
        }
    }

    render() {

        const { children, id, partialVisibility, minTopValue } = this.props

        let partial = (partialVisibility !== null && partialVisibility) ? partialVisibility: false;
        let min = (minTopValue !== null) ? minTopValue : 0;

        return (
            <VisibilitySensor 
                key={id} 
                onChange={this.onChange} 
                scrollThrottle={200} 
                scrollCheck 
                partialVisibility={partial}
                minTopValue={min}>
                <div id={id}>
                    {children}
                </div>
            </VisibilitySensor>
        )
    }
}

PageSection.contextType = LocationContext; 

