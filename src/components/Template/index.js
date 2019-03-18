import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Provider, Container, Toolbar, Heading, Fixed } from "rebass";
import theme from "../styles/theme.js";
import globalStyles from "../styles/globalStyles";

globalStyles();

const Header = () => (
  <Fixed top left right zIndex={1}>
    <Toolbar bg={theme.second} mb="1.45em" py=".5em" height={1}>
      <Heading
        fontSize={[3, 4, 5]}
        pl="1.5em"
        is={Link}
        to="/"
        activeStyle={{
          color: theme.fifth
        }}
        children="Great Gatsby Starter"
      />
    </Toolbar>
  </Fixed>
);

const TemplateWrapper = ({ children }) => (
    <Provider theme={theme}>
      <Helmet
        title="Textually.net"
        meta={[
          { name: "description", content: "" },
          { name: "keywords", content: "react, redux, graphQl, javascript" }
        ]}
      />
      <Header />
      <Container pt={5}>{children()}</Container>
    </Provider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;