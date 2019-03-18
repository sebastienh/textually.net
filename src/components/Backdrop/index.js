import React from 'react'
import styled from "styled-components";
import { Flex, Box, Link, Text } from "rebass";

export const BackdropDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 100;
`;

export default class Backdrop extends React.Component {
    render() {
        return (
            <BackdropDiv onClick={this.props.click}/>
        )
    }
}