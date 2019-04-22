import React, { Component } from 'react'
import styled from "styled-components";
import { Flex } from '@rebass/grid'
import { Text, Link } from 'rebass'
import DownloadMacAppStore from  "../../images/svg/Download_on_the_Mac_App_Store.svg"
import SectionContainer from "../SectionContainer"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class ReadyToTryStylo extends Component {

    render() {
        return (

            <WhitePage>
                <SectionContainer>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                        <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Ready to try Stylo?
                        </Text>
                    </Flex>
                    <Text color={"#848689"} fontSize={[ 10, 14, 20 ]} mt={20} mb={40} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Stylo is still in it's infancy but is already a great technological achievement. It brings unprecendented and easy to use styling capabilities to Markdown in an immersive and beautiful UI. And this is just he beggining! With all the new features in the work, buying Stylo today will put you in the best position to follows these exciting developments.
                    </Text>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={40}>
                        <Text mt={40} fontSize={[ 10, 14, 20 ]} mb={40} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Stylo is available from the macOS Apple Store at the low introductory price of 9.99$
                        </Text>
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={[80]} mb={[100]}>
                        <Link style={{boxShadow:"0 0 0"}} href="https://itunes.apple.com/us/app/stylo/id1456230357?mt=8">
                            <DownloadMacAppStore />
                        </Link>
                    </Flex>
                </SectionContainer>
            </WhitePage>
        )
  }
}