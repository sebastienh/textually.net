import React, { Component } from 'react';
import styled from "styled-components";
import { Flex, Box, Link, Text } from "rebass";

export const MainLink = styled(Link)`

    font-family: "Avenir Next";
    box-shadow: 0 0 0 0;
    margin: 0px 10px 0px 10px;
    &:hover, &:active {
        box-shadow: 0 5px 0 0 #E69701;
    }
`;

// box-shadow: 10px 5px 5px red;
export const Header = styled(Flex)`
    height: 54px;
    box-shadow: 0px 4px 4px #888;
`;

export const Logo = styled.img`
    height: 30px;
    margin-bottom: 8px;
    margin-top: 8px;
    margin-left: 20px;
`;

const HiddableFlex = styled(Flex)` 

    @media (max-width: 768px) {
        display: none;
    }
`

export default class AppLinks extends React.Component {
    render() {
        return (
            <HiddableFlex>
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
                <MainLink
                    href='stylo'
                    p={2}
                    color='black'>
                    Stylo
                </MainLink>
                <MainLink
                    href='contact'
                    p={2}
                    color='black'>
                    Contact
                </MainLink>
            </HiddableFlex>
        );
    }
}


