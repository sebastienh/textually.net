import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"
import VisibilitySensor from 'react-visibility-sensor'

export default class TitledSection extends Component {

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

        const { children } = this.props

        return (
            <VisibilitySensor onChange={this.onChange} scrollCheck partialVisibility={true}>
                <div>
                    {children}
                </div>
            </VisibilitySensor>
        )
    }
}

TitledSection.contextType = LocationContext; 



