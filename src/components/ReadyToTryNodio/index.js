import React, { Component } from 'react'
import styled from "styled-components";
import { Flex } from '@rebass/grid'
import { Text, Link } from 'rebass'
import DownloadMacAppStore from  "../../images/svg/Download_on_the_Mac_App_Store.svg"
import MacAppStoreDownloadImage from "../../images/svg/MacAppStoreDownloadImage.svg"
import SectionContainer from "../SectionContainer"

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

export default class ReadyToTryNodio extends Component {

    render() {
        return (

            <WhitePage>
                <SectionContainer>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                        <Text fontSize={[ 40, 60, 80 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Ready to try Nodio?
                        </Text>
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={40}>
                        <Text mt={40} fontSize={[ 10, 14, 20 ]} mb={40} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Nodio is available for free from the macOS Apple Store. Go get it now while it last...
                        </Text>
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={[80]} mb={[100]}>
                        <Link style={{boxShadow:"0 0 0"}} href="https://apps.apple.com/ca/app/nodio/id1483730218?mt=12">
                            <MacAppStoreDownloadImage />
                        </Link>
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                        <Flex justifyContent={"left"} flexDirection={"row"} mt={20}>
                                All source texts from Wikipedia. A big thanks to its community!
                        </Flex>
                    </Flex>
                </SectionContainer>
            </WhitePage>
        )
  }
}