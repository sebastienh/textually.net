import React from 'react'
import AppLinks from "../AppLinks"
import styled from "styled-components";
import { Flex, Box, Link, Text } from "rebass";

export const SideDrawerDiv = styled.div`

    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background-color: #FFFCF7;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* mobile mode */
    @media (max-width: 768px) {

        width: 40%;
        max-width: 400px;
        transform: translateX(-100%);
        transition: transform 0.5s ease-out;
        box-shadow: 0px 0px 0px;

        ${({ open }) => open && `
            transform: translateX(0);
            box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
        `}
    }

    /* desktop mode */
    @media (min-width: 769px) {

        width: 0;
        transition: 0.5s;
        overflow-x: hidden;
        box-shadow: 1px 0px 7px rgba(0,0,0,0.5);

        ${({ open }) => open && `
            width: 300px;
        `}
    }
`;









export const MainLink = styled(Link)`

    font-family: "Avenir Next";
    box-shadow: 0 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default class SideDrawer extends React.Component {
    
    render() {

        return (
            <SideDrawerDiv open={this.props.show}>
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
            </SideDrawerDiv>
        );
    }
}