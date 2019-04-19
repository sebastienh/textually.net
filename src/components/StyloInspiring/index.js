import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import Image from "../Image"
import MediaQuery from "react-responsive"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class StyloInspiring extends Component {
  render() {

    return (

        <WhitePage>
            <Flex>
                <Box width={[1/6, 1/10]} />
                <Box width={[4/6, 8/10]}>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                        <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Inspiring.
                        </Text>
                    </Flex>
                    <MediaQuery query="(min-width: 769px)">
                        <Flex flexDirection={"row"}>
                            <Box width={[5/12]} mt={100} ml={60}>
                                <Image filename="colored-four-screens.png" />
                            </Box>
                            <Flex width={[7/12]} mt={100} justifyContent={"row"}>
                                <Box width={[1/5]} />
                                <Box width={[3/5]}>
                                    <Text color={"#848689"} fontSize={[ 10, 12, 24 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                        Each document comes with it's own styles. They are easy to create, modify and apply.  Use the style that will bring your document clarity and legibility; the one that will unleash your creativity!
                                    </Text>
                                </Box>
                                <Box width={[1/5]} />
                            </Flex>
                        </Flex>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 768px)">
                        <Box mt={30}>
                        <Image filename="colored-four-screens.png" />
                        <Flex mt={[40, 60]} justifyContent={"row"}>
                            <Text color={"#848689"} fontSize={[ 14, 20, 24 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                Each document comes with it's own styles. They are easy to create, modify and apply.  Use the style that will bring your document clarity and legibility; the one that will unleash your creativity!
                            </Text>
                        </Flex>
                        </Box>
                    </MediaQuery>
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}