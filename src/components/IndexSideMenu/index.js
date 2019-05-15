import React, { Component } from 'react'
import { Flex, Box, Text, Link } from "rebass";
import styled, { css } from 'styled-components';
import StyloSideMenu from "../StyloSideMenu"
import NavigationController from 'react-navigation-controller';
import ExpandMoreIcon from "../../icons/expandMore";
import NavigationLink from "../NavigationLink"
import Pointer from '../../icons/pointer';
import SidebarPushButton from "../SidebarPushButton"

const {
    Transition
} = NavigationController

const MainLink = styled(NavigationLink)`

    box-shadow: 0px 0px 0px;
    margin-left: 60px;

    &:hover {
        cursor: pointer;
    }
`;

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
    margin-top: 160px;
    flex-direction: column;
    justify-content: center;
`

const MenuTitleContainer = styled(Flex)`
    left: 60px;
    height: 60px;
    box-shadow: 0px 1px 0px #B1000D;
    flex-direction: row;
    justify-content: center;
`

const SectionTitle = styled(Box)`
    left: 60px;
    height: 50px;
    margin-bottom: 10px;
    /* box-shadow: 0px 1px 0px #777; */
`

export default class IndexSideMenu extends Component {

    onStylo = () => {
        this.props.navigationController.pushView(
            <StyloSideMenu />, {
                transition: Transition.type.PUSH_LEFT
            })
    }

    render() {
        return (
            <MenuContainer>
                <LinksContainer>
                    <SectionTitle>
                        <Text 
                            ml={44} 
                            fontSize={[5]} 
                            fontWeight={"bold"} 
                            color={"#D74E09"}>
                            Textually
                        </Text>
                    </SectionTitle>
                    <MainLink
                        path={["/", "about"]}
                        href='/textually'
                        p={2}>
                        About
                    </MainLink>
                    <MainLink
                        path={["/", "news"]}
                        href='/news'
                        p={2}>
                        News
                    </MainLink>
                    <SidebarPushButton
                        onClick={this.onStylo}
                        path={["/", "stylo"]}
                        menu={<StyloSideMenu />}
                        navigationController={this.props.navigationController}
                        p={2}>
                        Stylo...
                    </SidebarPushButton>
                    <MainLink
                        path={["/", "contact"]}
                        href='/contact'
                        p={2}>
                        Contact
                    </MainLink>
                </LinksContainer>
            </MenuContainer>
        )
    }
}

