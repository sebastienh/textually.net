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

export default class NodioDocumentationBottomNavBar extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            diplayedSectionPath: ["/", "nodio", "documentation"]
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
                                        path={["/", "nodio", "documentation", "essentials"]}
                                        href='/nodio/documentation/essentials'
                                        p={2}>
                                        Essentials
                                    </MainLink>
                                    <MainLink
                                        path={["/", "nodio", "documentation", "markdown"]}
                                        href='/nodio/documentation/markdown'
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

NodioDocumentationBottomNavBar.contextType = LocationContext;