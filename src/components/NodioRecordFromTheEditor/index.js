import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import SectionContainer from '../SectionContainer';
import Image from "../Image"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const Video = styled.video`
    box-shadow: 0 4px 8px 0;
`

export default class NodioRecordFromTheEditor extends Component {

    render() {
        return (

            <WhitePage>
                <SectionContainer>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                        <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Audio recordings.
                        </Text>
                    </Flex>
                    <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} mt={20} mb={24} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Record from the editor using the <em>record</em> button or use the keyboard shortcuts to access all audio functionality.
                        Each document keeps its own audio recordings.
                    </Text>
                    <Flex flexDirection={"row"} mt={0}>
                        <Box width={1/8} />
                        <Box width={6/8}>
                            <Image filename="raspberry-light-audio.png" />
                        </Box>
                        <Box width={1/8} />
                    </Flex>
                </SectionContainer>
            </WhitePage>
        )
    }
}