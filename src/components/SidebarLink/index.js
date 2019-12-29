import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from "gatsby"
import LocationContext from "../../context/LocationContext"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";
import LocationAwareLink from "../LocationAwareLink"

const PlainLink = styled.a`
    box-shadow: 0 0 0;
    text-decoration: none;
    font-weight: 200;
    color: ${props => props.selected ? "#FFBF00" : "#aaa"};
`

const Li = styled.li`
    z-index: 1000;
    color: ${props => props.selected ? "#FFBF00" : "#aaa"};
    font-weight: 200;
    margin-bottom: 0;
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
            selectedColor: "#FFBF00",
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
                    <Li selected={context.visibleIndexes.has(number)}>
                        <Box pl={["5px", "0px"]} fontSize={[1,2]}>
                            <LocationAwareLink href={href} number={number}>
                                {children}
                            </LocationAwareLink>
                        </Box>
                    </Li>
                )}
            </LocationContext.Consumer>
        )
    }
}
