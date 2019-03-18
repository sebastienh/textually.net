// import React from "react";
// import PropTypes from "prop-types";
// import Link from "gatsby-link";
// import Helmet from "react-helmet";
// import { Provider, Container, Toolbar, Heading, Fixed, Header } from "rebass";
// import theme from "../styles/theme.js";
// import globalStyles from "../styles/globalStyles";

import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { Flex, Box, Container, Provider, Header } from "rebass";
import theme from "../styles/theme.js";
import { ThemeProvider } from 'styled-components'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Box>
          <Navigation />
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}> 
            <main>{children}</main>
            <Footer />
          </div>
        </Box>
      </ThemeProvider>
    );
  }
}

export default Layout;