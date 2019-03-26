import React, { Component } from 'react'
import { Flex, Box, Link, Text } from "rebass";
import styled from "styled-components";
import NavigationController from 'react-navigation-controller';

const {
    Transition
} = NavigationController

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

const BackLink = styled(Link)`

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

const MenuContainer = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export default class StyloSideMenu extends Component {

    onStylo() {
        this.props.navigationController.pushView(
            <div>Welcome Stylo!</div>
        );
    }

    back() {
        this.props.navigationController.popView({
            transition: Transition.type.PUSH_RIGHT
          })
    }

    render() {
        return (
            <MenuContainer>
                <BackLink
                    href='#'
                    p={2}
                    onClick={this.back.bind(this)}
                    color='black'>
                    Back
                </BackLink>
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
            </MenuContainer>
        )
    }
}

