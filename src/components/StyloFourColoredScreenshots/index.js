import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import MarkdownTag from "../MarkdownTag"
import Image from "../Image"

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

    return (

        <WhitePage>
            <Flex>
                <Box width={[1/6, 1/10]} />
                <Box width={[4/6, 8/10]}>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                    <Text fontSize={[ 20, 35, 50 ]} fontWeight={"bold"} fontFamily={"HurmeGeometricSans3-Regular"}>
                      <MarkdownTag># </MarkdownTag>Customizable Markdown text editor
                    </Text>
                    </Flex>
                    <Text fontSize={[ 12, 16, 20 ]} mt={20} mb={40} fontFamily={"HurmeGeometricSans3-Regular"}>
                        In Stylo, theming is a first class citizen. Use the best styling language available to style Markdown: CSS. 
                    </Text>
                    <Image filename="colored-four-screens.png" />
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}
