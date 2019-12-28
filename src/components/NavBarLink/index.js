import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "rebass";
import LocationContext from "../../context/LocationContext"
import NavBarSeparatorContext from "../../context/NavBarSeparatorContext"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";

export const HoverLink = styled(Link)`

    box-shadow: 0 0 0;
    color: ${props => props.selected ? "#75B9BE" : "#C1C1C1" };
    /* font-weight: ${props => props.selected ? "bold" : "regular"}; */
    font-size: ${props => props.fontSize ? props.fontSize : "inherit"}
`

class NavBarLinkRightUpdater extends Component {

    constructor(props) {

        super(props)
        this.state = {
            right: null
        }
    }

    componentDidMount() {

        this.context.updateSelectedPageLinkVisible(true)
        this.context.updateSelectedPageLinkRight(this.state.right)
    }

    render() {
        return (
            <HoverLink {...this.props} ref={(node) => this.updateNavBarLinkContextRight(node)} selected={true}>
                {this.props.children}    
            </HoverLink>
        )   
    }

    updateNavBarLinkContextRight(node) {

        if(node && !this.state.right) {
            let rect = node.getBoundingClientRect();
            let right = rect.right;
            this.state = {
                right: right
            }
        }
    }
}
NavBarLinkRightUpdater.contextType = NavBarSeparatorContext;


function NavBarLinkSwitcher(props) {

    const {
        selected,
        ...other
    } = props

    if(selected) {
        return <NavBarLinkRightUpdater {...other}>
            {props.children}
        </NavBarLinkRightUpdater>
    }
    else {
        return <HoverLink selected={false} {...other}>
            {props.children}
        </HoverLink>
    }
}

export default class NavBarLink extends Component {

    constructor(props) {
        super(props)
        this.state = {
            path: props.path
        }
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

    render() {

        const {
            children,
            ...other
        } = this.props;

        return (
            <React.Fragment>
                <LocationContext.Consumer>
                    {(context) => (
                        <NavBarLinkSwitcher selected={this.isSelected(context.pagePath)} {...other}>
                            {children}
                        </NavBarLinkSwitcher> 
                    )}
                </LocationContext.Consumer>
            </React.Fragment>
        )
    }
}