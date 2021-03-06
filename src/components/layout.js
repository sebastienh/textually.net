import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from "../components/Footer"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";
import styled from "styled-components";
import theme from "../styles/theme.js";
import { ThemeProvider } from 'styled-components'
import SideDrawer from "../components/SideDrawer"
import Backdrop from "../components/Backdrop"

import MediaQuery from 'react-responsive';
import DrawerToggleButton from "../components/DrawerToggleButton"
import "./layout.css"
import DrawerContext from "../context/DrawerContext"
import CircledNumbersSidebar from "../components/CircledNumbersSidebar"
import TitledSidebarLinks from "../components/TitledSidebarLinks"
import LocationContext from "../context/LocationContext"
import NavBar from "../components/NavBar"

const Content = styled(Box)`

  transition: 0.5s;

  /* desktop mode */
  @media (min-width: 769px) {
    ${({ open }) => open && `
      transform: translate(250px, 0px);
    `}
  }
`

export const BackdropDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 100;
`;

export const DrawerToggleButtonContainer = styled(Flex)`

    /* margin-left:20px; */
    /* width: 60px; */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    flex-direction: column;
    z-index: 100;
    transition: 0.5s;

    /* desktop mode */
    @media (min-width: 769px) {
    ${({ open }) => open && `
      margin-left: 270px;
    `}
}
`;

export const Logo = styled.img`
    height: 30px;
    margin-bottom: 6px;
    margin-top: 10px;
    margin-left: 20px;
`;

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.handleDrawerToggle();
  };

  backdropClickHandler() {
    this.handleDrawerToggle();
  }

  handleDrawerToggle() {
    this.context.toggleDrawer();
  }

  render() {
    const { location, title, children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
            <MediaQuery query="(min-width: 769px)">
              {/* {matches =>
              !matches ? (null) : ( */}
                <React.Fragment>
                  <LocationContext.Consumer>
                    {(locationContext) => (
                        <NavBar 
                          currentPath={locationContext.pagePath}
                          drawerClickHandler={this.drawerToggleClickHandler} 
                          drawerOpen={false}/>
                    )}
                  </LocationContext.Consumer>
                  <Content open={false} theme={theme}>
                    <Box width={[
                          10/10,
                      ]}>
                      <main>{children}</main>
                    </Box>
                  </Content>
                  <Flex style={{zIndex:"1000"}}>
                    <Box mx='auto' style={{zIndex:"1000"}}/>
                    <Box       
                      width={[
                        1/10,
                      ]}     
                      zIndex={100}
                      style={{zIndex:"1000"}}
                      alignSelf={"right"}>
                      <CircledNumbersSidebar />
                    </Box>
                  </Flex>
                  <Flex style={{zIndex:"1000"}}>
                    <Box       
                    width={[
                      3/10,
                    ]}     
                    zIndex={100}
                    style={{zIndex:"1000"}}
                    alignSelf={"right"}>
                      <TitledSidebarLinks />
                    </Box>
                  </Flex>
                </React.Fragment>
              {/* )} */}
            </MediaQuery>
            <MediaQuery query="(max-width: 768px)">
            {/* {matches =>
              !matches ? null : ( */}
                <DrawerContext.Consumer>
                  {(drawerContext) => (
                    <React.Fragment>
                      <NavBar 
                        drawerClickHandler={this.drawerToggleClickHandler}
                        drawerOpen={drawerContext !== undefined && drawerContext !== null ? drawerContext.open : false}/>
                      <SideDrawer show={drawerContext !== undefined && drawerContext !== null ? drawerContext.open : false}/>
                      <Box width={[
                            10/10,
                        ]}>
                        {(drawerContext !== undefined && drawerContext !== null && drawerContext.open) ? <Backdrop click={this.backdropClickHandler} /> : null}
                        <main>{children}</main>
                      </Box>
                      <Flex style={{zIndex:"1000"}}>
                        <Box mx='auto' style={{zIndex:"1000"}}/>
                        <Box       
                        width={[
                          1/10,
                        ]}     
                        zIndex={100}
                        style={{zIndex:"1000"}}
                        alignSelf={"right"}>
                          <CircledNumbersSidebar /> 
                        </Box>
                      </Flex>
                    </React.Fragment>
                  )}
                </DrawerContext.Consumer>
              {/* )} */}
            </MediaQuery>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

Layout.contextType = DrawerContext; 
export default Layout;