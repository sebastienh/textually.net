import React, { Component } from 'react'
import styled from "styled-components";
import LocationContext from "../../context/LocationContext"
import NavBarSeparatorContext from "../../context/NavBarSeparatorContext"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";

export const HoverButton = styled.button`

    padding: 8px;
    box-shadow: 0px 0px 0px;
    color: ${props => props.selected ? "#FFA700" : props.onPath ? "#D74E09" : "#666"};
    border-width: 0px;
    outline: none;  
    background-color: inherit;
    padding-left: 8px;
    text-align: left;
    margin-left: ${props => props.marginLeft ? props.marginLeft : "0px"};

    &:hover {

        cursor: pointer;
    }
`

class NavBarButtonRightUpdater extends Component {

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
            <HoverButton {...this.props} ref={(node) => this.updateNavBarButtonContextRight(node)} selected={true}>
                {this.props.children}
            </HoverButton>
        )   
    }

    updateNavBarButtonContextRight = (node) => {
        if(node && !this.state.right) {
            let rect = node.getBoundingClientRect();
            let right = rect.right;
            this.state = {
                right: right
            }
        }
    }
}
NavBarButtonRightUpdater.contextType = NavBarSeparatorContext;


function NavBarButtonSwitcher(props) {

    const {
        selected,
        ...other
    } = props

    if(props.selected) {
        return <NavBarButtonRightUpdater {...other}>
            {props.children}
        </NavBarButtonRightUpdater>
    }
    else {
        return <HoverButton selected={false} {...other}>
            {props.children}
        </HoverButton>
    }
}

export default class NavBarSectionButton extends Component {

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

            let section = path[path.length-1]
            let currentSection = contextPagePath[contextPagePath.length-2]
            
            if(section === currentSection) {
                return true
            }
        }
        return false;
    }

    onPath = (contextPagePath) => {

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


    updateDisplayedSection = () => {

        this.context.updateDisplayedSectionPath(this.state.path)
    }

    render() {

        const {
            path,
            children,
            color,
            onClick,
            ...other
        } = this.props;

        return (
            <React.Fragment>
                <LocationContext.Consumer>
                    {(context) => (
                        <NavBarButtonSwitcher 
                            onClick={this.updateDisplayedSection} 
                            selected={this.isSelected(context.pagePath)} 
                            onPath={this.onPath(context.pagePath)}{...other}>
                            {children}
                        </NavBarButtonSwitcher> 
                    )}
                </LocationContext.Consumer>
            </React.Fragment>
        )
  }
}

NavBarSectionButton.contextType = LocationContext; 