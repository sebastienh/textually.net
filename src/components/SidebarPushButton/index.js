import React, { Component } from 'react'
import styled from "styled-components";
import LocationContext from "../../context/LocationContext"


export const HoverButton = styled.button`

    padding: 0;
    box-shadow: 0px 0px 0px;
    padding-top: 16px;
    padding-bottom: 12px;
    color: ${props => props.selected ? "#FFA700" : "#777"};
    font-weight: ${props => props.selected ? "bold" : "regular"};
    border-width: 0px;
    outline: none;  
    background-color: inherit;
    padding-left: 8px;
    text-align: left;
    margin-left: 60px;

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
            width: 80%;
            background: #FFA70088;
        `}
    }
     
    &:hover:after {
        height: 1px;
        width: 80%;
    }

    &:hover {
        /* box-shadow: 2px 2px 4px rgb(0,0,0,0.5); */
        cursor: pointer;
    }
`


export default class SidebarPushButton extends Component {

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
        onClick,
        ...other
    } = this.props;

    return (
        <React.Fragment>
            <LocationContext.Consumer>
                {(context) => (
                    <HoverButton onClick={onClick} selected={this.isSelected(context.pagePath)} {...other}>
                        {children}
                    </HoverButton> 
                )}
            </LocationContext.Consumer>
        </React.Fragment>
    )
  }
}


