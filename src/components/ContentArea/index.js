import React, { Component } from 'react';
import styled from "styled-components";
import logo from '../../../content/assets/textually-logo.png'
import DrawerToggleButton from "../DrawerToggleButton"
import AppLinks from "../AppLinks"
import { Flex, Box } from '@rebass/grid'

export default class ContentArea extends React.Component {
    render() {

        const { location, title, children } = this.props

        return (
            <Box
                p={0}
                m={0}
                style={{height: "100%", width: "100%"}}
                width={[
                    1,
                    3/4,
                    2/3
                ]}
            >
                {children}
            </Box>
        );
    }
}


