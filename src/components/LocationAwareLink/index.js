import React, { Component } from 'react'
import styled from "styled-components";
import LocationContext from "../../context/LocationContext"

const PlainLink = styled.a`
    box-shadow: 0 0 0;
    text-decoration: none;
    font-weight: 200;
    color: ${props => props.selected ? "#FFA701" : "#aaa"};
`

// context.state.index == number ? "#f00" : color}
export default class LocationAwareLink extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: props.number,
            selectedColor: "#FFA700",
            unselectedColor: "#000"
        }
    }

    render() {

        const {
            href,
            number,
            children
        } = this.props;

        return (
            <LocationContext.Consumer>
                {(context) => (
                    <PlainLink href={href} selected={context.visibleIndexes.has(this.state.number)}>
                        {children}
                    </PlainLink>
                )}
            </LocationContext.Consumer>
        )
    }
}
