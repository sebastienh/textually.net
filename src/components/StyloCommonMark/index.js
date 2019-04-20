import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import Image from "../Image"
import { StyledTabPanel, StyledTabs, StyledTabList, StyledTab } from "../Tabs"
import SectionContainer from '../SectionContainer';

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

function Tab(props) {

    const {
        image 
    } = props

    return (
        <Flex flexDirection={"row"} mt={0}>
            <Box width={1/8} />
            <Box width={6/8}>
                {image}
            </Box>
            <Box width={1/8} />
        </Flex>
    )
}


export default class StyloCommonMark extends Component {
  render() {

    return (

        <WhitePage>
            <SectionContainer>
                <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                    <Text fontSize={[ 30, 40, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        CommonMark. GitHub.
                    </Text>
                </Flex>
                <Text color={"#848689"} fontSize={[ 12, 16, 20 ]} mt={20} mb={[10,20,40]} fontFamily={"HurmeGeometricSans3-Regular"}>
                    Along with unparalleled styling capabilities, Stylo offers impressive Markdown editing capabilities. 
                    Stylo implements the standard CommonMark and adds GitHub Flavored Markdown tables and strikethough. 
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

                    <Flex flexDirection={"row"} mt={0}>
                        <Box width={1/8} />
                        <Box width={6/8}>
                        <Image filename="headers.png" />
                        </Box>
                        <Box width={1/8} />
                    </Flex>

                        
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <Tab image={<Image filename="links-images.png" />} />
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <Tab image={<Image filename="lists.png" />} />
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <Tab image={<Image filename="tables.png" />} />
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <Tab image={<Image filename="strikethrough.png" />} />
                    </StyledTabPanel>
                    <StyledTabPanel>
                        <Tab image={<Image filename="code.png" />} />
                    </StyledTabPanel>
                </StyledTabs>
            </SectionContainer>
        </WhitePage>
    )
  }
}
