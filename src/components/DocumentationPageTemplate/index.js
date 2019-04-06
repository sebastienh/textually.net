import React, { Component } from 'react'
import { Flex, Box, Text, Container, Provider, Header } from "rebass";
import styled from "styled-components";

export default class DocumentationPageTemplate extends Component {
  render() {
    return (
      <Flex {...this.props}>
        <Box width={3/10} />
        <Box width={4/10}>
          {this.props.children}
        </Box>
        <Box width={3/10} />
      </Flex>      
    )
  }
}