import React, { Component } from 'react'
import { Flex, Box, Text, Link } from "rebass";
import styled, { css } from 'styled-components';
import StyloSideMenu from "../StyloSideMenu"
import NavigationController from 'react-navigation-controller';
import ExpandMoreIcon from "../../icons/expandMore";
import NavigationLink from "../NavigationLink"
import LocationContext from "../../context/LocationContext"
import { HoverLink } from "../NavigationLink"

const {
    Transition
} = NavigationController

const StyledLink = styled(HoverLink)`

    box-shadow: 0px 0px 0px;
    margin-left: 60px;
    padding-right: 2px;

    &:hover {
        cursor: pointer;
    }
`
export const RightPointingIcon = styled(ExpandMoreIcon)`
    /* margin-top: 6px; */
    /* margin-right: 0px; */
    /* position: absolute; */
    /* right: 20px; */
    fill: ${props => props.selected ? "#FFA701" : "#aaa"};
`

const ThreeDots = styled(Text)`

    font-size: 25pt;
    margin-top: -3px;
    margin-left: 2px;
    /* margin-top:4px; */
    /* margin-left: 100px; */
    color: ${props => props.selected ? "#FFA701" : "#aaa"};
`

export default class PushLink extends Component {

    constructor(props) {
        super(props)
        this.state = {
            path: props.path,
            menu: props.menu,
            navigationController: props.navigationController
        }
    }

    push() {
        this.state.navigationController.pushView(
            this.state.menu, {
                transition: Transition.type.PUSH_LEFT
            })
    }

    render() {
        return (
            <React.Fragment>
                <LocationContext.Consumer>
                    {(context) => (
                        <Flex flexDirection={"row"}>
                            
                            <StyledLink
                                selected={this.isSelected(context.pagePath)}
                                href='#'
                                p={2}
                                onClick={this.push.bind(this)}>
                                Stylo
                            </StyledLink>
                            <ThreeDots selected={this.isSelected(context.pagePath)}>
                                ...
                            </ThreeDots>
                        </Flex> 

                    )}
                </LocationContext.Consumer>
            </React.Fragment>
        )
    }

    isSelected = (contextPagePath) => {

        const {
            path
        } = this.state;

        if(contextPagePath !== undefined) {
            var equal = true;
            for(var i = 0; i < path.length; i++) {

                let element = path[i];
                if(i < contextPagePath.length) {
                    let contextElement = contextPagePath[i];
                    if(element != contextElement) {
                        equal = false;   
                    }
                }
                else {
                    equal = false;
                    break;
                }
            }
            return equal;
        }
        return false;
    }

}
