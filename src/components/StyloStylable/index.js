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

export default class StyloStylable extends Component {
  
    render() {
        return (

            <WhitePage>
                <SectionContainer>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                    <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Stylable.
                    </Text>
                    </Flex>
                    <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} mt={20} mb={24} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Markdown and CSS are brought together to provide outstanding editing and styling capabalities. 
                        While Markdown defines the document content and its structure, CSS describes it's presentation. 
                        It's the perfect match! 
                    </Text>
                    <Flex flexDirection={"row"} mt={0}>
                        <Box width={1/8} />
                        <Box width={6/8}>
                            <Image filename="new-paradigm.png" />
                        </Box>
                        <Box width={1/8} />
                    </Flex>
                </SectionContainer>
            </WhitePage>
        )
    }
}
