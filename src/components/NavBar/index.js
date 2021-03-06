import React, { Component } from 'react';
import styled from "styled-components";
import { Flex, Box, Text } from "rebass";
import DrawerToggleButton from "../DrawerToggleButton"
import MediaQuery from 'react-responsive';
import NavBarSectionButton from '../NavBarSectionButton';
import TextuallyBottomNavBar from '../TextuallyBottomNavBar';
import LocationContext from "../../context/LocationContext"
import StyloDocumentationBottomNavBar from "../StyloDocumentationBottomNavBar"
import NodioDocumentationBottomNavBar from "../NodioDocumentationBottomNavBar"
import StyloBottomNavBar from "../StyloBottomNavBar"
import NodioBottomNavBar from "../NodioBottomNavBar"
import TopNavBarSeparator from "../TopNavBarSeparator"

// box-shadow: 10px 5px 5px red;
export const Header = styled(Flex)`

    /* background-color: #FFFCF7; */
    background-color: #FFF;
    box-shadow: ${props => props.visible ? "0px 2px 10px #ddd" : "0px 0px 0px"};
    position: fixed;
    padding: 0;
    width: 100%;
    z-index: 1100;
    
    @media (min-width: 769px) {
        height: 90px;
        transition: top 0.5s;
        top: ${props => props.visible ? "0px" : "-100px"};
    }

    @media (max-width: 768px) {
        height: 54px;
        transition: top 0.5s;
        top: ${props => props.visible ? "0px" : "-54px"};
    }
`;

export const Logo = styled.img`
    height: 30px;
    margin-bottom: 6px;
    margin-top: 10px;
    margin-left: 20px;
`;

const TopContainer = styled(Flex)`

`

const BottomContainer = styled(Flex)`
    align-items: center;
`

const SectionLinkSeparator = styled(Text)`
    margin-left: 0px;
    font-size: 20pt;
    color: #ddd;
`

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            prevScrollPos: 0,
            visible: true
        };
    }

    componentDidMount() {
        this.setState({
            prevScrollPos: window !== undefined && window !== null ? window.pageYOffset : 0,
            visible: true
        })
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {

        const { prevScrollPos, visible } = this.state
        const currentScrollPos = window.pageYOffset
        const nextVisibleState = prevScrollPos > currentScrollPos || currentScrollPos <= 0 || prevScrollPos <= 0

        // we reset the displayed path if we hide the navbar 
        // so that the next time we will display the actual 
        // navigation path 
        if(visible && !nextVisibleState) {
            this.setState({
                prevScrollPos: currentScrollPos,
                visible: nextVisibleState,
            })

            this.context.updateDisplayedSectionPath(null)
        }
        else {
            this.setState({
                prevScrollPos: currentScrollPos,
                visible: nextVisibleState,
            })
        }
    }

    bottomElements = (sectionPath) => {

        if(sectionPath !== undefined && sectionPath !== null) {
            let beforeLastSection = sectionPath[sectionPath.length-2]
            let lastSection = sectionPath[sectionPath.length-1]

            if(lastSection == '/') {
                return <TextuallyBottomNavBar />
            }
            else if(lastSection == 'stylo') {
                return <StyloBottomNavBar />
            }
            else if(lastSection == 'nodio') {
                return <NodioBottomNavBar />
            }
            else if(lastSection == 'documentation' && beforeLastSection == 'stylo') {
                return <StyloDocumentationBottomNavBar />
            }
            else if(lastSection == 'documentation' && beforeLastSection == 'nodio') {
                return <NodioDocumentationBottomNavBar />
            }
        }
        return null;
    }

    sectionName = (pathString) => {

        if(pathString == "/") {
            return "Textually"
        }
        else if(pathString == "stylo") {
            return "Stylo"
        }
        else if(pathString == "nodio") {
            return "Nodio"
        }
        else if(pathString == "documentation") {
            return "Documentation"
        }
        else if(pathString == "markdown") {
            return "Markdown"
        }
    }

    topElements = (sectionPath) => {

        var topBarElements = []

        if(sectionPath !== undefined && sectionPath !== null) {
            for(var i = 0; i < sectionPath.length; i++) {

                if(topBarElements.length != 0) {
                    topBarElements.push(<SectionLinkSeparator> • </SectionLinkSeparator>)
                }

                topBarElements.push(
                    <NavBarSectionButton
                        path={sectionPath.slice(0, i+1)}
                        p={2}>
                        {this.sectionName(sectionPath[i])}
                    </NavBarSectionButton>
                )
            }
        }
        return topBarElements
    }


    sectionPath = (locationContext) => {

        if(locationContext.displayedSectionPath !== null) {
            return locationContext.displayedSectionPath
        }
        else {
            return locationContext.pagePath.slice(0, locationContext.pagePath.length-1)
        }
    }

    renderTop = (locationContext) => {

        var sectionPath = this.sectionPath(locationContext)
        return this.topElements(sectionPath)
    }

    renderBottom = (locationContext) => {

        var sectionPath = this.sectionPath(locationContext)
        return this.bottomElements(sectionPath)
    }

    render() {

        const {
            drawerOpen
        } = this.props;

        return (
            <LocationContext.Consumer>
                {(locationContext) => (
                    <Header
                        visible={this.state.visible && !drawerOpen}
                        px={2}
                        color='black'
                        bg='#D6E5E3'
                        alignItems='center'>
                        <MediaQuery query="(max-width: 768px)">
                            <DrawerToggleButton click={this.props.drawerClickHandler}/>
                        </MediaQuery>
                        <MediaQuery query="(min-width: 769px)">
                            <Flex style={{width:"100%"}}>
                                <Box width={[1/10]} />
                                <Flex width={[8/10]} flexDirection={"column"}>
                                    <TopContainer fontSize={"13pt"} px={2}>
                                        {this.renderTop(locationContext)}
                                    </TopContainer>
                                    <TopNavBarSeparator />
                                    <Flex fontSize={"13pt"} px={2} style={{width:"100%"}}>
                                        <Box mx='auto' />
                                        <Box>
                                            {this.renderBottom(locationContext)}
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Box width={[1/10]} />
                            </Flex>
                        </MediaQuery>
                    </Header>
                )}
            </LocationContext.Consumer>
        );
    }
}

NavBar.contextType = LocationContext; 