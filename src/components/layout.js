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
import "./layout.css"

const Content = styled.div`

  transition: 0.5s;

  /* desktop mode */
  @media (min-width: 769px) {
    ${({ open }) => open && `
      margin-left: 300px;
    `}
  }
`

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
          <Box height="100%">
            <Navigation drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
            <main>{children}</main>
            <Footer />
          </Box>
      </ThemeProvider>
    );
  }
}

export default Layout;