import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import YinYang from "../YinYang"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class StyloRevolutionary extends Component {
  render() {

    return (

        <WhitePage>
            <Flex>
                <Box width={[1/6, 1/10]} />
                <Box width={[4/6, 8/10]}>
                    <Flex flexDirection={"row"} mt={30}>
                        <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Revolutionary.
                        </Text>
                    </Flex>
                    <Flex flexDirection={"row"}>
                        <Box width={[7/12]} mt={[40, 60, 100]}>
                            <Text color={"#848689"} fontSize={[ 10, 12, 24 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                Stylo represents a new paradigm in text editing and bring Markdown format to
                                 an unprecedented representational level. State-of-the-art innovations seamlessly 
                                 integrate the well-known lightweight markup language into the fundamental web technology stack.
                            </Text>
                        </Box>
                        <Box width={[5/12]} mt={[40, 60, 100]} ml={60}>
                        {/* 848689 */}
                            <YinYang fillColor={"#848689"} dotColor={"#D74E09"} width={"300"} height={"300"} />
                        </Box>
                    </Flex>
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}
