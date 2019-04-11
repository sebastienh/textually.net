import React, { Component } from 'react'
import { Flex, Box, Link, Text } from "rebass";
import styled, { css } from 'styled-components';
import NavigationController from 'react-navigation-controller';
import ExpandMoreIcon from "../../icons/expandMore";
import LocationAwareNavigationLink from "../LocationAwareNavigationLink"
import BackButton from "../BackButton"

const {
    Transition
} = NavigationController

const MainLink = styled(LocationAwareNavigationLink)`

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

export default class StyloDocumentationHtmlSideMenu extends Component {

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
                                Documentation
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
                            color={"#D74E09"}>
                            HTML
                        </Text>
                    </SectionTitle>
                    <MainLink
                        path={["/", "stylo", "documentation", "html"]}
                        href='/stylo/documentation/html#introduction'
                        number={1}
                        p={2}>
                        Introduction
                    </MainLink>
                    <MainLink
                        path={["/", "stylo", "documentation", "html"]}
                        href='/stylo/documentation/html#document'
                        number={2}
                        p={2}>
                        Document
                    </MainLink>
                    <MainLink
                        path={["/", "stylo", "documentation", "html"]}
                        href='/stylo/documentation/html#element'
                        number={3}
                        p={2}>
                        Element
                    </MainLink>
                    <MainLink
                        path={["/", "stylo", "documentation", "html"]}
                        href='/stylo/documentation/html#definitions'
                        number={4}
                        p={2}>
                        Definitions
                    </MainLink>
                    <MainLink
                        path={["/", "stylo", "documentation", "html"]}
                        href='/stylo/documentation/html#attributes'
                        number={5}
                        p={2}>
                        Attributes
                    </MainLink>
                    <MainLink
                        path={["/", "stylo", "documentation", "html"]}
                        href='/stylo/documentation/html#id'
                        number={6}
                        p={2}>
                        Id
                    </MainLink>
                    <MainLink
                        path={["/", "stylo", "documentation", "html"]}
                        href='/stylo/documentation/html#class'
                        number={7}
                        p={2}>
                        class
                    </MainLink>
                </LinksContainer>
            </MenuContainer>
        )
    }
}

