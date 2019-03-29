import React, { Component } from 'react'
import { Flex, Box, Link, Text } from "rebass";
import styled, { css } from 'styled-components';
import NavigationController from 'react-navigation-controller';
import ExpandMoreIcon from "../../icons/expandMore";
import NavigationLink from "../NavigationLink"
import LocationContext from "../../context/LocationContext"

const {
    Transition
} = NavigationController

const MainLink = styled(NavigationLink)`

    box-shadow: 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:hover {
        box-shadow: 2px 2px 4px rgb(0,0,0,0.5);
        cursor: pointer;
    }
`;

const PushLink = styled(NavigationLink)`

    box-shadow: 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:hover {
        box-shadow: 2px 2px 4px rgb(0,0,0,0.5);
        cursor: pointer;
    }
`

export const LeftPointingIcon = styled(ExpandMoreIcon)`
    margin-top: 14px;
    margin-left: 0px;
    position: absolute;
    left: 20px;
    /* stroke: ${(props) => { if (props.color) return props.theme.colors[props.color]; return props.theme.colors.mineShaft; }} */
    stroke: props.color;
    transform: rotate(90deg);
`

const BackLink = styled(Link)`

    box-shadow: 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:hover {
        box-shadow: 2px 2px 4px rgb(0,0,0,0.5);
        cursor: pointer;
    }
`

const MenuContainer = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const LinksContainer = styled(Flex)`
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`

export default class StyloSideMenu extends Component {

    onReleaseNotes() {
        // this.props.navigationController.pushView(
        //     <div>Welcome Stylo!</div>
        // );
    }

    back() {
        this.props.navigationController.popView({
            transition: Transition.type.PUSH_RIGHT
          })
    }

    render() {
        return (
            <MenuContainer>
                <LeftPointingIcon color={"#000"} />
                <BackLink
                    href='#'
                    p={2}
                    onClick={this.back.bind(this)}
                    color='black'>
                    Back
                </BackLink>
                <LinksContainer>
                    <LocationContext.Consumer>
                        {(context) => (
                            <MainLink
                                path={["/", "stylo", "about"]}
                                onClick={() => { 
                                    context.updatePagePath(["/", "stylo", "about"]);
                                }}
                                href='stylo'
                                p={2}
                                color='black'>
                                About
                            </MainLink>
                        )}
                    </LocationContext.Consumer>
                    <MainLink
                        path={["/", "stylo", "documentation"]}
                        href='#'
                        p={2}
                        color='black'>
                        Documentation
                    </MainLink>
                    <PushLink
                        path={["/", "stylo", "release-notes"]}
                        href='stylo-release-notes'
                        p={2}
                        onClick={this.onReleaseNotes.bind(this)}
                        color='black'>
                        Release Notes
                    </PushLink>
                    <MainLink
                        path={["/", "stylo", "privacy-policy"]}
                        href='#'
                        p={2}
                        color='black'>
                        Privacy Policy
                    </MainLink>
                </LinksContainer>
            </MenuContainer>
        )
    }
}

