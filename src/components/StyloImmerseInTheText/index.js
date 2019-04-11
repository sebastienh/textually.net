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

export default class StyloImmerseInTheText extends Component {
  render() {

    return (

        <WhitePage>
            <Flex>
                <Box width={[1/6, 1/10]} />
                <Box width={[4/6, 8/10]}>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                    <Text fontSize={[ 20, 35, 50 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Immerse in the text... 
                    </Text>
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                        <Text fontSize={[ 12, 16, 20 ]} mt={20} mb={40} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Stylo interface is designed to disappear to let you write!
                        </Text>
                    </Flex>
                    <Image filename="immerse-in-the-text.png" />
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}
