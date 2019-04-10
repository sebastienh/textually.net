import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import { graphql } from "gatsby";
import ResponsiveImage from "../ResponsiveImage"
import Img from 'gatsby-image'
import Image from "../Image"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class StyloNewParadigm extends Component {
  render() {

    return (

        <WhitePage>
            <Flex>
                <Box width={[1/6, 1/10]} />
                <Box width={[4/6, 8/10]}>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                    <Text fontSize={[ 20, 35, 50 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        A new text editing paradigm
                    </Text>
                    </Flex>
                    <Text fontSize={[ 12, 16, 20 ]} mt={20} mb={40} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Stylo is designed to seamlessly integrate web technologies 
                        such as HTML and CSS in a Markdown text editing environment. 
                    </Text>
                    <Image filename="new-paradigm.png" />
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}
