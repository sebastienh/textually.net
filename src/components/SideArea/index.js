import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../../../content/assets/textually-logo.png'
import DrawerToggleButton from "../DrawerToggleButton"
import AppLinks from "../AppLinks"
import { Flex, Box } from '@rebass/grid'

export default class SideArea extends React.Component {
    render() {

        const { location, title, children } = this.props

        return (
            <Box 
                ml={0}
                width={[
                    0,
                    1
                ]}
            >
            <p>This is some text</p>

                {children}
            </Box>
        );
    }
}


