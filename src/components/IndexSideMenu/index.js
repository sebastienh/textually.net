import React, { Component } from 'react'
import { Flex, Box, Link, Text } from "rebass";
import styled, { css } from 'styled-components';
import StyloSideMenu from "../StyloSideMenu"
import NavigationController from 'react-navigation-controller';
import ExpandMoreIcon from "../../icons/expandMore";

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

export const RightPointingIcon = styled(ExpandMoreIcon)`
    margin-top: 6px;
    margin-right: 0px;
    position: absolute;
    right: 20px;
    /* stroke: ${(props) => { if (props.color) return props.theme.colors[props.color]; return props.theme.colors.mineShaft; }} */
    stroke: props.color;
    transform: rotate(-90deg);
`

const MenuContainer = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const LinksContainer = styled(Flex)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`

export default class IndexSideMenu extends Component {

    onStylo() {
        this.props.navigationController.pushView(
            <StyloSideMenu />, {
                transition: Transition.type.PUSH_LEFT
            })
    }

    render() {
        return (
            <MenuContainer>
                <LinksContainer>
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
                        Blog
                    </MainLink>
                    <PushLink
                        href='#'
                        p={2}
                        onClick={this.onStylo.bind(this)}
                        color='black'>
                        Stylo
                        <RightPointingIcon color={"#000"}/>
                    </PushLink>
                    
                    <MainLink
                        href='contact'
                        p={2}
                        color='black'>
                        Contact
                    </MainLink>
                </LinksContainer>
            </MenuContainer>
        )
    }
}

