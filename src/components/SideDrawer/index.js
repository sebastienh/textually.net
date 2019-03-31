import React from 'react'
import styled from "styled-components";
import IndexSideMenu from "../IndexSideMenu"
import StyloSideMenu from "../StyloSideMenu"
import NavigationController from 'react-navigation-controller';
import LocationContext from "../../context/LocationContext"

export const SideDrawerDiv = styled.div`

    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background-color: #FFFCF7;
    width: 250px;
    transform: translateX(-100%);
    transition: transform 0.5s ease-out;
    box-shadow: 0px 0px 0px;

    /* mobile mode */
    @media (max-width: 768px) {

        ${({ open }) => open && `
            transform: translateX(0);
            box-shadow: 1px 0px 7px rgba(70,70,70,0.5);
        `}
    }

    /* desktop mode */
    @media (min-width: 769px) {

        transition: 0.5s;
        overflow-x: hidden;
        box-shadow: 0px 0px 0px;

        ${({ open }) => open && `
            transform: translateX(0);
            box-shadow: 1px 4px 3px rgba(70,70,70,0.5);
        `}
    }
`;

const TextuallyNavigator = styled(NavigationController)`

    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export default class SideDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rendered: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        if(nextProps.show != this.props.show) {
            return true;
        } 
        return false;
    }

    render() {

        const props = {
            // The views to place in the stack. The front-to-back order
            // of the views in this array represents the new bottom-to-top
            // order of the navigation stack. Thus, the last item added to
            // the array becomes the top item of the navigation stack.
            // NOTE: This can only be updated via `setViews()`
            views: [<IndexSideMenu />],
      
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

SideDrawer.contextType = LocationContext; 