import React, { Component } from 'react'
import { Flex, Box, Link, Text } from "rebass";
import styled from "styled-components";
import StyloSideMenu from "../StyloSideMenu"

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

export default class IndexSideMenu extends Component {

    onStylo() {
        this.props.navigationController.pushView(
            <StyloSideMenu />
        );
    }

    render() {
        return (
            <React.Fragment>
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
                </PushLink>
                <MainLink
                    href='contact'
                    p={2}
                    color='black'>
                    Contact
                </MainLink>
            </React.Fragment>
        )
    }
}

