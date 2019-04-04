import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from "gatsby"
import LocationContext from "../../context/LocationContext"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";

const PlainLink = styled(Link)`
    box-shadow: 0 0 0;
    text-decoration: none;
    z-index: 1000;
    color: ${props => props.selected ? "#FFA701" : "#aaa"};
    font-weight: 600;
`

const CenterHorizontally = styled(Flex)`
    z-index: 1000;
    margin: 0;
    padding: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: row;
`

// context.state.index == number ? "#f00" : color}
export default class SidebarLink extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
                    <PlainLink to={href} selected={context.index == number}>
                        {children}
                    </PlainLink>
                )}
            </LocationContext.Consumer>
        )
    }
}
