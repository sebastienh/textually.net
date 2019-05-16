import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import Image from "../Image"
import SectionContainer from '../SectionContainer';

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const ShadowedImage = styled.img `
    box-shadow: 0px 10px 0px black;
`

export default class StyloHighlightable extends Component {
  
    render() {
        return (
            <SectionContainer>
                <Flex justifyContent={"center"} flexDirection={"row"}>
                <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                    Highlightable.
                </Text>
                </Flex>
                <Flex justifyContent={"center"} flexDirection={"row"}>
                <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} mt={20} mb={24} fontFamily={"HurmeGeometricSans3-Regular"}>
                    Tag parts of your text and highlight them when needed...
                </Text>
                </Flex>
                <Flex flexDirection={"row"} mt={0}>
                    <Box width={1/8} />
                    <Box width={6/8}>
                    <Image filename="highlight.png" />
                        {/* <ShadowedImage src="../../images/jpg/highlight.jpg" /> */}
                        {/* <Image filename="new-paradigm-dark.png" /> */}
                    </Box>
                    <Box width={1/8} />
                </Flex>
            </SectionContainer>
        )
    }
}
