import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "rebass";
import LocationContext from "../../context/LocationContext"
import Pointer from '../../icons/pointer';
import { Flex, Box, Text, Container, Provider, Header } from "rebass";

export const HoverLink = styled(Link)`

    padding-top: 16px;
    padding-bottom: 12px;
    color: ${props => props.selected ? "#FFA701" : "#aaa"};
    font-weight: ${props => props.selected ? "bold" : "regular"};

    &:after {
        
        left: 0px;
        position: absolute;
        margin-top: 40px;
        width: 0;
        height: 1px;
        background: #aaa8;
        content: '';
        transition: width 0.35s ease-in-out;

        ${({ selected }) => selected && `
            height: 1px;
            width: 75%;
            background: #FFA70188;
        `}
    }
     
    &:hover:after {
        height: 1px;
        width: 75%;
    }
`

export default class NavigationLink extends Component {

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
            path,
            children,
            color,
            ...other
        } = this.props;

        return (
            <React.Fragment>
                <LocationContext.Consumer>
                    {(context) => (
                        <HoverLink selected={this.isSelected(context.pagePath)} {...other}>
                            {children}
                        </HoverLink> 
                    )}
                </LocationContext.Consumer>
            </React.Fragment>
        );
    }
}