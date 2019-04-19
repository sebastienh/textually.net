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
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={[0,10,20]}>
                        <Text fontSize={[40, 60, 80]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Immersive... 
                        </Text>
                    </Flex>
                    <Box mt={[0,10,20]}>
                        <Image filename="immerse-in-the-text.png" />
                    </Box>
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}
