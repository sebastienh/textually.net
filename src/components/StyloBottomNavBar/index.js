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
    margin-left: 30px;

    &:hover {
        cursor: pointer;
    }
`;

export default class StyloBottomNavBar extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            diplayedSectionPath: ["/", "stylo"]
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
                                        path={["/", "stylo", "about"]}
                                        href='/'
                                        p={2}>
                                        About
                                    </MainLink>
                                    <NavBarSectionButton
                                        marginLeft={"30px"}
                                        path={["/", "stylo", "documentation"]}
                                        p={2}>
                                        Documentation...
                                    </NavBarSectionButton>
                                    {/* <MainLink
                                        path={["/", "stylo", "release-notes"]}
                                        href='#'
                                        p={2}>
                                        Release Notes
                                    </MainLink> */}
                                    <MainLink
                                        path={["/", "stylo", "privacy-policy"]}
                                        href='/stylo/privacy-policy'
                                        p={2}>
                                        Privacy Policy
                                    </MainLink>
                                    <MainLink
                                        path={["/", "stylo", "acknowledgments"]}
                                        href='/stylo/acknowledgments'
                                        p={2}>
                                        Acknowledgments
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

StyloBottomNavBar.contextType = LocationContext; 