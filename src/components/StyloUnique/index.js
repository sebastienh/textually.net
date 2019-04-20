import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import Gear from "../Gear"
import SectionContainer from "../SectionContainer"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class StyloUnique extends Component {
  render() {

    return (

        <WhitePage>
            <SectionContainer>
                <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                    <Text color={"#D74E09"} fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Unique.
                    </Text>
                </Flex>
                <Flex flexDirection={"column"}>
                    <Flex mt={40} flexDirection={"row"}>
                        <Box width={[1/6]} />
                        <Box width={[4/6]}>
                            <Text color={"#848689"} fontSize={[ 10, 12, 24 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                A custom text rendering engine technology provides a smooth writing experience along with advanced live styling capabilities.  
                            </Text>
                        </Box>
                        <Box width={[1/6]} />
                    </Flex>  
                    <Flex mt={[10, 15, 20]} flexDirection={"row"} justifyContent={"center"}>
                        <Gear outerColor={"#aaa"} innerColor={"#D74E09"} size={["100px", "175px", "350px"]}/>
                    </Flex>
                </Flex>
            </SectionContainer>
        </WhitePage>
    )
  }
}