import React, { Component } from 'react'
import styled from "styled-components";
import NavBarSeparatorContext from "../../context/NavBarSeparatorContext"

const Separator = styled.hr`
    margin-top: 0px;
    margin-bottom: 0px;
    height: 1px;
    margin-right: ${ props => props.marginRight ? props.marginRight : "0px"};
    background-color: ${ props => props.selected ? "#75B9BE" : "#C1C1C1"};
    transition: margin-right 0.5s;
`

const BottomSeparator = styled.div`
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    height: 1px;
    background-color: #ddd;
    display: block;
`

export default class TopNavBarSeparator extends Component {
  render() {
    return (
        <NavBarSeparatorContext.Consumer>
            {(context) => (
                <React.Fragment>
                  <BottomSeparator {...this.props} selectedVisible={context.selectedPageLinkVisible}>
                    <Separator {...this.props}
                             marginRight={Number.parseInt(context.separatorRightMargin) + "px"}
                             selected={context.selectedPageLinkVisible}/>
                  </BottomSeparator>
                </React.Fragment>
            )}
        </NavBarSeparatorContext.Consumer>
    )
  }
}
