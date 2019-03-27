import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { Flex, Box, Container, Provider, Header } from "rebass";
import theme from "../styles/theme.js";
import { ThemeProvider } from 'styled-components'
import SideDrawer from "../components/SideDrawer"
import Backdrop from "../components/Backdrop"
import styled from "styled-components";
import MediaQuery from 'react-responsive';
import DrawerToggleButton from "../components/DrawerToggleButton"
import "./layout.css"

const Content = styled(Flex)`

  transition: 0.5s;

  /* desktop mode */
  @media (min-width: 769px) {
    ${({ open }) => open && `
      margin-left: 250px;
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

    margin-left:20px;
    width: 60px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    flex-direction: column;

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

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }


  render() {
    const { location, title, children } = this.props

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop =  <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>

          {/* desktop */}
          <MediaQuery query="(min-width: 769px)">
            <SideDrawer show={this.state.sideDrawerOpen}/>
            <Content open={this.state.sideDrawerOpen}>
              <Box 
                width={[
                    1/10,
                ]}>
                <DrawerToggleButtonContainer open={this.state.sideDrawerOpen}>
                  <DrawerToggleButton click={this.drawerToggleClickHandler}/>
                </DrawerToggleButtonContainer>
              </Box>
              <Box width={[
                    9/10,
                ]}>
                {/* {backdrop} */}
                <main>{children}</main>
              </Box>
            </Content>
          </MediaQuery>

          <MediaQuery query="(max-width: 768px)">
            <SideDrawer show={this.state.sideDrawerOpen}/>
            <Flex>
              <Box 
                width={[
                    1/10,
                ]}>
                <DrawerToggleButtonContainer>
                  <DrawerToggleButton click={this.drawerToggleClickHandler}/>
                </DrawerToggleButtonContainer>
              </Box>
              <Box width={[
                    9/10,
                ]}>
                {backdrop}
                <main>{children}</main>
              </Box>
            </Flex>
          </MediaQuery>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Layout;