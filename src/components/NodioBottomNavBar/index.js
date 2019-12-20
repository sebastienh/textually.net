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

export default class NodioBottomNavBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            diplayedSectionPath: ["/", "nodio"]
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
                                        path={["/", "nodio", "about"]}
                                        href='/nodio'
                                        p={2}>
                                        About
                                    </MainLink>
                                    <MainLink
                                        path={["/", "nodio", "privacy-policy"]}
                                        href='/nodio/privacy-policy'
                                        p={2}>
                                        Privacy Policy
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

NodioBottomNavBar.contextType = LocationContext;