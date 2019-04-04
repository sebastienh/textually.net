import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import CircledNumber from "../CircledNumber"
import DrawerContext from "../../context/DrawerContext"
import TitledSidebarContext from "../../context/TitledSidebarContext"
import SidebarLink from "../SidebarLink"
import LocationContext from '../../context/LocationContext';

const TitledLinksContainer = styled(Flex)`
    margin:0px;
    padding: 0px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
    display: ${props => props.display ? "flex" : "none"};

    /* ${({ open }) => open && `
        backdrop-filter: blur(10px);
        background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0));
    `} */
`;

const CenterHorizontally = styled(Flex)`
    z-index: 1000;
    margin: 0;
    padding: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: row;
`

export default class TitledSidebarLinks extends Component {
  
    constructor(props) {
        super(props);
    }
  
    createLinks(links) {

        let children = []

        for(var i = 0; i < links.length; i++) {

            let link = links[i]

            const {
                href,
                title
            } = link;

            children.push(<SidebarLink href={href} number={i+1}>{i+1}. {title}</SidebarLink>)
        }
        return children
    }

    render() {

        const { 
            numbers,
         } = this.props;

        return (

            <React.Fragment>
                <DrawerContext.Consumer>
                    {(drawerContext) => (                        
                        <TitledSidebarContext>
                            {(titledSidebarContext) => (
                                <LocationContext.Consumer>
                                    {(locationContext) => (
                                        <CenterHorizontally>
                                            <TitledLinksContainer 
                                                open={drawerContext.open} 
                                                display={titledSidebarContext.display && !drawerContext.open && locationContext.index !== null && locationContext.index !== undefined && locationContext.index !== 0}>
                                                {this.createLinks(titledSidebarContext.links)}
                                            </TitledLinksContainer>
                                        </CenterHorizontally>
                                    )}
                                </LocationContext.Consumer>
                            )}
                        </TitledSidebarContext>  
                    )}
                </DrawerContext.Consumer>
            </React.Fragment>
        )
    }
}