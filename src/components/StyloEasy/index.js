import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import MediaQuery from "react-responsive"

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
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    tab-size: 4;
`

const Pre = styled.pre`
    padding: 16px;
    overflow: auto;
    font-size: 85%;
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
`

export default class StyloEasy extends Component {
  render() {


    let sourceCode = "h1 {\n\tcolor: red;\n}"

    return (

        <WhitePage>
            <Flex>
                <Box width={[1/6, 1/10]} />
                <Box width={[4/6, 8/10]}>
                    <MediaQuery query="(min-width: 769px)">
                        <Flex flexDirection={"row"}>
                            <Box width={[5/12]} mt={100} ml={60}>
                                <Pre>
                                    <Code>
                                        {sourceCode}
                                    </Code>
                                </Pre>
                            </Box>
                            <Flex width={[7/12]} mt={100} justifyContent={"row"}>
                                <Box width={[1/5]} />
                                <Box width={[3/5]}>
                                    <Text color={"#f00"} fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                        Easy.
                                    </Text>
                                </Box>
                                <Box width={[1/5]} />
                            </Flex>
                        </Flex>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 768px)">
                        <Flex flexDirection={"column"}>
                            <Box mt={100}>
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
                    </MediaQuery>
                    <Flex flexDirection={"row"} mt={[20, 40, 100]}>
                        <Text color={"#848689"} fontSize={[ 14, 20, 30 ]}>
                            Stylo CSS uses a minimal and standard compliant subset of CSS. It is simple and fun to use. 
                        </Text>
                    </Flex>
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}