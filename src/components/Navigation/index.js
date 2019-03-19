import React, { Component } from 'react';
import styled from "styled-components";
import { Flex, Box, Link, Text } from "rebass";
import logo from '../../../content/assets/textually-logo.png'
import DrawerToggleButton from "../DrawerToggleButton"
import AppLinks from "../AppLinks"

// box-shadow: 10px 5px 5px red;
export const Header = styled(Flex)`
    height: 54px;
    box-shadow: 0px 4px 20px #ccc;
`;

export const Logo = styled.img`
    height: 30px;
    margin-bottom: 6px;
    margin-top: 10px;
    margin-left: 20px;
`;

export default class Navigation extends React.Component {
    render() {
        return (
            <Header
                px={2}
                color='black'
                bg='#D6E5E3'
                alignItems='center'>
                <DrawerToggleButton click={this.props.drawerClickHandler}/>
                <Logo src={logo} /> 
                <Box mx='auto' />
                <AppLinks />
            </Header>
        );
    }
}


