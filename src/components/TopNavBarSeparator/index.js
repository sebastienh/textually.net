import React, { Component } from 'react'
import styled from "styled-components";
import NavBarSeparatorContext from "../../context/NavBarSeparatorContext"

const Separator = styled.hr`
    margin-top: 0px;
    margin-bottom: 0px;
    height: 1px;
    margin-right: ${ props => props.marginRight ? props.marginRight : "0px"};
    background-color: ${ props => props.selected ? "#FFA700" : "#A1A1A1"};
    transition: margin-right 0.5s;
`

export default class TopNavBarSeparator extends Component {
  render() {
    return (
        <NavBarSeparatorContext.Consumer>
            {(context) => (
                <Separator {...this.props} 
                    marginRight={Number.parseInt(context.separatorRightMargin) + "px"} 
                    selected={context.selectedPageLinkVisible}/>
            )}
        </NavBarSeparatorContext.Consumer>
    )
  }
}
