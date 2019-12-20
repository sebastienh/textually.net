import React, { Component } from 'react'
import LocationContext from "../../context/LocationContext"
import NavBarLink from "../NavBarLink"
import NavBarSectionButton from '../NavBarSectionButton';
import styled from "styled-components";
import { Flex } from "rebass";
import BottomNavBarContainer from "../BottomNavBarContainer"
import NavBarContextReseter from "../NavBarContextReseter"

const MainLink = styled(NavBarLink)`

    box-shadow: 0px 0px 0px;
    margin-left: 30px;

    &:hover {
        cursor: pointer;
    }
`;

export default class TextuallyBottomNavBar extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            diplayedSectionPath: ["/"]
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
                                        path={["/", "about"]}
                                        href='/'
                                        p={2}>
                                        About
                                    </MainLink>
                                    <MainLink
                                        path={["/", "news"]}
                                        href='/news'
                                        p={2}>
                                        News
                                    </MainLink>
                                    <NavBarSectionButton
                                        marginLeft={"30px"}
                                        path={["/", "stylo"]}
                                        p={2}>
                                        Stylo...
                                    </NavBarSectionButton>
                                    <NavBarSectionButton
                                        marginLeft={"30px"}
                                        path={["/", "nodio"]}
                                        p={2}>
                                        Nodio...
                                    </NavBarSectionButton>
                                    <MainLink
                                        path={["/", "contact"]}
                                        href='/contact'
                                        p={2}>
                                        Contact
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
