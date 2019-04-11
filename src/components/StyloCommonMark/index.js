import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import { graphql } from "gatsby";
import ResponsiveImage from "../ResponsiveImage"
import Img from 'gatsby-image'
import Image from "../Image"
import { StyledTabPanel, StyledTabs, StyledTabList, StyledTab } from "../Tabs"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class StyloCommonMark extends Component {
  render() {

    return (

        <WhitePage>
            <Flex>
                <Box width={[1/6, 1/10]} />
                <Box width={[4/6, 8/10]}>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                    <Text fontSize={[ 20, 35, 50 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                    CommonMark + GitHub flavored
                    </Text>
                    </Flex>
                    <Text fontSize={[ 12, 16, 20 ]} mt={20} mb={[10,20,40]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Markdown was designed with readability in mind and Stylo embraces its 
                        formatting. It does not try to hide or change text while you write providing 
                        a smooth writing experience. What you write is what you get!!! 
                    </Text>
                    <StyledTabs
                        selectedTabClassName='is-selected'
                        selectedTabPanelClassName='is-selected'>
                        <StyledTabList>
                            <StyledTab>Headers</StyledTab>
                            <StyledTab>Links</StyledTab>
                            <StyledTab>Lists</StyledTab>
                            <StyledTab>Tables</StyledTab>
                            <StyledTab>Stikethrough</StyledTab>
                            <StyledTab>Code</StyledTab>
                        </StyledTabList>
                        <StyledTabPanel>
                            <Image filename="headers.png" />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <Image filename="links-images.png" />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <Image filename="lists.png" />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <Image filename="tables.png" />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <Image filename="strikethrough.png" />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <Image filename="code.png" />
                        </StyledTabPanel>
                    </StyledTabs>
                </Box>
                <Box width={[1/6, 1/10]} />
            </Flex>
        </WhitePage>
    )
  }
}
