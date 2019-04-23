import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import YinYang from "../YinYang"
import MediaQuery from "react-responsive"
import SectionContainer from '../SectionContainer';

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

    let text = "Stylo represents a new paradigm in text editing and bring Markdown format to an unprecedented representational level. State-of-the-art innovations seamlessly integrate the well-known lightweight markup language into the fundamental web technology stack."

    return (

        <WhitePage>
            <SectionContainer>
                <Flex flexDirection={"row"} mt={30}>
                    <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Revolutionary.
                    </Text>
                </Flex>
                <MediaQuery query="(min-width: 769px)">
                    <Flex flexDirection={"row"}>
                        <Box width={[5/12]} mt={[40, 60, 80]}>
                            <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                {text}    
                            </Text>
                        </Box>
                        <Box width={[7/12]} mt={[40, 60, 80]} ml={50}>
                            <YinYang fillColor={"#848689"} dotColor={"#D74E09"} width={"200"} height={"200"} />
                        </Box>
                    </Flex>
                </MediaQuery>
                <MediaQuery query="(max-width: 768px)">
                        <Box mt={[40, 60, 80]}>
                            <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                {text}    
                            </Text>
                        </Box>
                        <Box mt={[40, 60, 80]}>
                            <YinYang fillColor={"#848689"} dotColor={"#D74E09"} width={"200"} height={"200"} />
                        </Box>
                </MediaQuery>
            </SectionContainer>
        </WhitePage>
    )
  }
}
