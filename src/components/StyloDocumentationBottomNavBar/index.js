import React, { Component } from 'react'
import LocationContext from "../../context/LocationContext"
import NavBarLink from "../NavBarLink"
import NavBarSectionButton from "../NavBarSectionButton"
import styled from "styled-components";
import { Flex, Box } from "rebass";
import BottomNavBarContainer from "../BottomNavBarContainer"
import NavBarContextReseter from "../NavBarContextReseter"

const MainLink = styled(NavBarLink)`

    box-shadow: 0px 0px 0px;
    margin-left: 60px;

    &:hover {
        cursor: pointer;
    }
`;

export default class StyloDocumentationBottomNavBar extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            diplayedSectionPath: ["/", "stylo", "documentation"]
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBarContextReseter>
                    <LocationContext.Consumer>
                        {(context) => (
                            <BottomNavBarContainer>
                                <Flex flexDirection={"row"}>
                                    <MainLink
                                        path={["/", "stylo", "documentation", "styloessentials"]}
                                        href='/stylo/documentation/stylo-essentials'
                                        p={2}>
                                        Essentials
                                    </MainLink>
                                    <MainLink
                                        path={["/", "stylo", "documentation", "html"]}
                                        href='/stylo/documentation/html'
                                        p={2}>
                                        HTML
                                    </MainLink>
                                    <MainLink
                                        path={["/", "stylo", "documentation", "css"]}
                                        href='/stylo/documentation/css'
                                        p={2}>
                                        CSS
                                    </MainLink>
                                    <MainLink
                                        path={["/", "stylo", "documentation", "markdown"]}
                                        href='/stylo/documentation/markdown'
                                        p={2}>
                                        Markdown
                                    </MainLink>
                                </Flex>
                            </BottomNavBarContainer>
                        )}
                    </LocationContext.Consumer>
                </NavBarContextReseter>
            </React.Fragment>
        )
    }
}

StyloDocumentationBottomNavBar.contextType = LocationContext; 