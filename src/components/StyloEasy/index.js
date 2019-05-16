import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import MediaQuery from "react-responsive"
import SectionContainer from "../SectionContainer"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const Code = styled.code`

    margin: 0;
    
    background-color: rgba(27,31,35,0.05);
    border-radius: 10px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    tab-size: 4;

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 240%;
    }
    @media (min-width: 1024px) {
        font-size: 240%;
    }
    @media (max-width: 768px) {
        font-size: 140%;
    }

`

const Pre = styled.pre`
    
    overflow: auto;
    background-color: #F2F2F2;
    border-radius: 3px;
    word-wrap: normal;
    margin-top: 0;
    margin-bottom: 16px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: normal;

    code {
        background-color: inherit;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 84px;
    }
    @media (min-width: 1024px) {
        padding: 84px;
    }
    @media (max-width: 768px) {
        padding: 44px;
    }
`

export default class StyloEasy extends Component {
  
    render() {

        let sourceCode = "h1 {\n\tcolor: red;\n}"

        return (
            <SectionContainer>
                <MediaQuery query="(min-width: 769px)">
                    {/* {matches =>
                        !matches ? (null) : ( */}
                        <Flex flexDirection={"row"} mt={[40, 70, 100]}>
                            <Box width={[6/12]}>
                                <Pre><Code>
                                    {sourceCode}
                                </Code></Pre>
                            </Box>
                            <Box width={[1/12]} />
                            <Flex width={[5/12]} justifyContent={"row"}>
                                <Flex flexDirection={"column"} justifyContent={"center"}>
                                    <Text color={"#f00"} fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                        Easy.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    {/* )} */}
                </MediaQuery>
                <MediaQuery query="(max-width: 768px)">
                    {/* {matches =>
                        !matches ? (null) : ( */}
                        <Flex flexDirection={"column"} mt={[40, 70, 100]}>
                            <Box>
                                <Pre>
                                    <Code>
                                        {sourceCode}
                                    </Code>
                                </Pre>
                            </Box>
                            <Flex flexDirection={"row"} justifyContent={"center"} mt={40}>
                                <Text color={"#f00"} fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                    Easy.
                                </Text>
                            </Flex>
                        </Flex>
                    {/* )} */}
                </MediaQuery>
                <Flex flexDirection={"row"} mt={[20, 40, 100]}>
                    <Text color={"#848689"} fontSize={[ 14, 20, 30 ]}>
                    Stylo CSS uses a minimal and standard compliant subset of CSS that only retains the usefull parts in the context of text editing. It is simple and fun to use.
                    </Text>
                </Flex>
            </SectionContainer>
        )
    }
}