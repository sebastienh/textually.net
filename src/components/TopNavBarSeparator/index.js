import React, { Component } from 'react'
import styled from "styled-components";
import NavBarSeparatorContext from "../../context/NavBarSeparatorContext"

const Separator = styled.hr`
    margin-top: -1px;
    margin-bottom: 0px;
    height: 1px;
    margin-right: ${ props => props.marginRight ? props.marginRight : "0px"};
    background-color: ${ props => props.selected ? "#FFA700" : "#A1A1A1"};
    transition: margin-right 0.5s;
`

const BottomSeparator = styled.hr`
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    height: 1px;
    background-color: #ddd;
    display: ${ props => props.selectedVisible ? "block" : "none"};
`

export default class TopNavBarSeparator extends Component {
  render() {
    return (
        <NavBarSeparatorContext.Consumer>
            {(context) => (
                <React.Fragment>
                  <BottomSeparator {...this.props} 
                    selectedVisible={context.selectedPageLinkVisible} />
                  <Separator {...this.props} 
                      marginRight={Number.parseInt(context.separatorRightMargin) + "px"} 
                      selected={context.selectedPageLinkVisible}/>
                </React.Fragment>
            )}
        </NavBarSeparatorContext.Consumer>
    )
  }
}
