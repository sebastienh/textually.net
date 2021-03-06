import React, { Component } from 'react'
import { Flex, Box, Link, Text } from "rebass";
import styled, { css } from 'styled-components';
import NavigationController from 'react-navigation-controller';
import ExpandMoreIcon from "../../icons/expandMore";
import NavigationLink from "../NavigationLink"
import BackButton from "../BackButton"
import StyloDocumentationHtmlSideMenu from "../StyloDocumentationHtmlSideMenu"
import StyloDocumentationCssSideMenu from "../StyloDocumentationCssSideMenu"
import StyloDocumentationMarkdownSideMenu from "../StyloDocumentationMarkdownSideMenu"
import StyloDocumentationEssentialsSideMenu from "../StyloDocumentationEssentialsSideMenu"
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

export const LeftPointingIcon = styled(ExpandMoreIcon)`
    margin-top: 21px;
    margin-left: 0px;
    position: absolute;
    left: 20px;
    stroke: props.color;
    transform: rotate(180deg);
`

const MenuContainer = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
`

const LinksContainer = styled(Flex)`
    position: relative;
    width: 100%;
    margin-top: 100px;
    flex-direction: column;
    justify-content: center;
`

const SectionTitle = styled(Box)`
    left: 60px;
    height: 50px;
    margin-bottom: 10px;
`

const MenuTitleContainer = styled(Flex)`
    height: 60px;
    flex-direction: "row";
    /* box-shadow: 0px 1px 0px #aaa8; */
    /* font-weight: bold; */
`

export default class StyloDocumentationSideMenu extends Component {

    onReleaseNotes() {
        // this.props.navigationController.pushView(
        //     <div>Welcome Stylo!</div>
        // );
    }

    onEssentials() {
        this.props.navigationController.pushView(
            <StyloDocumentationEssentialsSideMenu />
        );
    }

    onHtml() {
        this.props.navigationController.pushView(
            <StyloDocumentationHtmlSideMenu />
        );
    }

    onCss() {
        this.props.navigationController.pushView(
            <StyloDocumentationCssSideMenu />
        );
    }

    onMarkdown() {
        this.props.navigationController.pushView(
            <StyloDocumentationMarkdownSideMenu />
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
                <Flex style={{height: "60px", top: "0"}} justifyContent={"center"} flexDirection={"column"}>

                    <MenuTitleContainer>
                        <Text fontSize={[3]} mt={"13px"} ml={"31px"} color={"#aaa"}>...</Text>
                        <Flex 
                            justifyContent={"center"} 
                            flexDirection={"column"}
                            style={{height:"100%"}}>
                            <BackButton
                                p={2}
                                fontSize={[3]}
                                onClick={this.back.bind(this)}
                                color='black'>
                                Stylo
                            </BackButton>
                        </Flex>
                    </MenuTitleContainer>
                </Flex>
                <LinksContainer>

                    <Box height={"auto"} />
                    <SectionTitle>
                        <Text 
                            ml={44} 
                            mb={10}
                            fontSize={[4]} 
                            fontWeight={"bold"} 
                            color={"#444545"}>
                            Documentation
                        </Text>
                    </SectionTitle>
                    <SidebarPushButton
                        path={["/", "stylo", "documentation", "stylo-essentials"]}
                        p={2}
                        onClick={this.onEssentials.bind(this)}>
                        Essentials...
                    </SidebarPushButton>
                    <SidebarPushButton
                        path={["/", "stylo", "documentation", "html"]}
                        p={2}
                        onClick={this.onHtml.bind(this)}>
                        HTML...
                    </SidebarPushButton>
                    <SidebarPushButton
                        path={["/", "stylo", "documentation", "css"]}
                        p={2}
                        onClick={this.onCss.bind(this)}>
                        CSS...
                    </SidebarPushButton>
                    <SidebarPushButton
                        path={["/", "stylo", "documentation", "markdown"]}
                        p={2}
                        onClick={this.onMarkdown.bind(this)}>
                        Markdown...
                    </SidebarPushButton>
                </LinksContainer>
            </MenuContainer>
        )
    }
}

