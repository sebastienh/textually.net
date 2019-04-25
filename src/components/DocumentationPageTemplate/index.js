import React, { Component } from 'react'
import { Flex, Box, Text, Container, Provider, Header } from "rebass";
import styled from "styled-components";
import MediaQuery from 'react-media';

const DocumentationContainer = styled(Flex)`
  
  @media (min-width: 769px) {
    margin-top: 80px;
  }
`

export default class DocumentationPageTemplate extends Component {

  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(max-width: 768px)">
          {matches =>
            !matches ? (null) : (
            <DocumentationContainer {...this.props}>
              <Box width={1/10} />
              <Box width={8/10}>
                {this.props.children}
              </Box>
              <Box width={1/10} />
            </DocumentationContainer>    
          )}
        </MediaQuery>
        <MediaQuery query="(min-width: 769px)">
          {matches =>
            !matches ? (null) : (
            <DocumentationContainer {...this.props}>
              <Box width={3/10} />
              <Box width={4/10}>
                {this.props.children}
              </Box>
              <Box width={3/10} />
            </DocumentationContainer>      
          )}
        </MediaQuery>
      </React.Fragment>
    )
  }
}