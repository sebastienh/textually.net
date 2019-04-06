import React, { Component } from 'react'
import { Flex, Box, Text, Container, Provider, Header } from "rebass";
import styled from "styled-components";

export default class PageTemplate extends Component {


  render() {

    const {
      height,
      ...other
    } = this.props

    return (
      <Flex {...other} style={{height: height}}>
        <Box width={2/10} />
        <Box width={6/10}>
          {this.props.children}
        </Box>
        <Box width={2/10} />
      </Flex>      
    )
  }
}
