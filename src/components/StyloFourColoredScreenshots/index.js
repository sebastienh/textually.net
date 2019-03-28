import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import { graphql } from "gatsby";
import ResponsiveImage from "../ResponsiveImage"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class StyloFourColoredScreenshots extends Component {
  render() {

    const {
        images 
    } = this.props;

    return (

        <WhitePage>
            <Flex>
                <Box width={1/10} />
                <Box width={8/10}>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                    <Text fontSize={[ 20, 35, 50 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Markdown the way you want
                    </Text>
                    </Flex>
                    <Text fontSize={[ 12, 16, 20 ]} mt={20} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Theming in Stylo is a first class citizen, because it is a lot more than just colors or fonts… it’s a creative mood!
                    </Text>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={10}>
                        <ResponsiveImage images={images} />
                    </Flex>
                </Box>
                <Box width={1/10} />
            </Flex>
        </WhitePage>
    )
  }
}
