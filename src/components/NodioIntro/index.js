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

export default class NodioIntro extends Component {
    render() {

        // let text = "Stylo represents a new paradigm in text editing and bring Markdown format to an unprecedented representational level. State-of-the-art innovations seamlessly integrate the well-known lightweight markup language into the fundamental web technology stack."
        let text = "Nodio is a full fledged Markdown text editor with an outline to help manage multiple text files and their associated audio recordings. It has been thought from the ground up to make it easy to manage audio recordings, generally speech, and text files. "

        return (

            <WhitePage>
                <SectionContainer>
                    <Flex flexDirection={"row"} mt={30}>
                        <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            When Markdown meets audio.
                        </Text>
                    </Flex>
                    <MediaQuery query="(min-width: 769px)">
                        <Flex flexDirection={"row"}>
                            <Box mt={[40, 60, 80]}>
                                <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                    {text}
                                </Text>
                            </Box>

                        </Flex>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 768px)">
                        <React.Fragment>
                            <Box mt={[40, 60, 80]}>
                                <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                    {text}
                                </Text>
                                <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                    More coming soon...
                                </Text>
                            </Box>
                            <Box mt={[40, 60, 80]}>
                                <YinYang fillColor={"#848689"} dotColor={"#D74E09"} width={"200"} height={"200"} />
                            </Box>
                        </React.Fragment>
                    </MediaQuery>
                </SectionContainer>
            </WhitePage>
        )
    }
}
