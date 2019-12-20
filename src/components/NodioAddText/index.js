

import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import SectionContainer from '../SectionContainer';
import video from '../../videos/add-new-text.m4v';

require("../../videos/add-new-text.m4v'")

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class NodioAddText extends Component {

    render() {
        return (

            <WhitePage>
                <SectionContainer>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                        <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Add files.
                        </Text>
                    </Flex>
                    <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} mt={20} mb={24} fontFamily={"HurmeGeometricSans3-Regular"}>
                        In Nodio, it is possible to add new text files directly from the editor using the <em>plus</em> button under each text editor.
                        They will be automatically added to the text selection and ready to be edited.
                    </Text>
                    <Flex flexDirection={"row"} mt={0}>
                        <Box width={1/8} />
                        <Box width={6/8}>
                            <video width="100%" height="100vh"  preload='auto' loop autoPlay muted>
                                <source src={video} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </Box>
                        <Box width={1/8} />
                    </Flex>
                </SectionContainer>
            </WhitePage>
        )
    }
}
