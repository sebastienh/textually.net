import React, { Component } from 'react'
import { Flex, Box, Link, Text } from "rebass";
import styled from "styled-components";

const MainLink = styled(Link)`

    font-family: "Avenir Next";
    box-shadow: 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:hover {
        box-shadow: 2px 2px 4px rgb(0,0,0,0.5);
        cursor: pointer;
    }
`;

const PushLink = styled(Link)`

    font-family: "Avenir Next";
    box-shadow: 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:hover {
        box-shadow: 2px 2px 4px rgb(0,0,0,0.5);
        cursor: pointer;
    }
`

export default class StyloSideMenu extends Component {

    onStylo() {
        this.props.navigationController.pushView(
            <div>Welcome Stylo!</div>
        );
    }

    render() {
        return (
            <Box height={'100%'}>
                <MainLink
                    href='/'
                    p={2}
                    color='black'>
                    About
                </MainLink>
                <MainLink
                    href='blog'
                    p={2}
                    color='black'>
                    Documentation
                </MainLink>
                <PushLink
                    href='#'
                    p={2}
                    onClick={this.onStylo.bind(this)}
                    color='black'>
                    Release Notes
                </PushLink>
                <MainLink
                    href='contact'
                    p={2}
                    color='black'>
                    Privacy Policy
                </MainLink>
            </Box>
        )
    }
}

