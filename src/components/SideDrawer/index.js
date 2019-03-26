import React from 'react'
import AppLinks from "../AppLinks"
import styled from "styled-components";
import { Flex, Box, Link, Text } from "rebass";
import IndexSideMenu from "../IndexSideMenu"
import NavigationController from 'react-navigation-controller';

export const SideDrawerDiv = styled.div`

    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background-color: #FFFCF7;
    width: 40%;
    max-width: 400px;
    transform: translateX(-100%);
    transition: transform 0.5s ease-out;
    box-shadow: 0px 0px 0px;

    ${({ open }) => open && `
        transform: translateX(0);
        box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
    `}
`;

const TextuallyNavigator = styled(NavigationController)`

    position: relative;
    width: 100%;
    height: 100%;
    background: #DDDDDD;
    overflow: hidden;
`

export default class SideDrawer extends React.Component {
    
    render() {

        const props = {
            // The views to place in the stack. The front-to-back order
            // of the views in this array represents the new bottom-to-top
            // order of the navigation stack. Thus, the last item added to
            // the array becomes the top item of the navigation stack.
            // NOTE: This can only be updated via `setViews()`
            views: [
                <IndexSideMenu />
            ],
      
            // If set to true, the navigation will save the state of each view that
            // pushed onto the stack. When `popView()` is called, the navigationController
            // will rehydrate the state of the view before it is shown.
            // Defaults to false
            // NOTE: This can only be updated via `setViews()`
            preserveState: true,
      
            // The spring tension for transitions
            // http://facebook.github.io/rebound-js/docs/rebound.html
            // Defaults to 10
            transitionTension: 0,
      
            // The spring friction for transitions
            // Defaults to 6
            transitionFriction: 5
          };

        return (
            <SideDrawerDiv open={this.props.show}>
                <TextuallyNavigator {...props} />
            </SideDrawerDiv>
        );
    }
}