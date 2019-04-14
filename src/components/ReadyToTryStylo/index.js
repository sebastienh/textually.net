import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text, Link } from 'rebass'
import Image from "../Image"
import DownloadMacAppStore from  "../../images/svg/Download_on_the_Mac_App_Store.svg"

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
                <Flex>
                    <Box width={[1/6, 1/10]} />
                    <Box width={[4/6, 8/10]}>
                        <Flex justifyContent={"center"} flexDirection={"row"} mt={30}>
                        <Text fontSize={[ 20, 35, 50 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                            Ready to try Stylo?
                        </Text>
                        </Flex>
                        <Text fontSize={[ 12, 16, 20 ]} mt={20} mb={40} fontFamily={"HurmeGeometricSans3-Regular"}>

                        </Text>
                        <Flex justifyContent={"center"} flexDirection={"row"}>
                            <Link href="https://itunes.apple.com/us/app/stylo/id1456230357?mt=8">
                                <DownloadMacAppStore width={[
                                    "200px",
                                    "300px",
                                    "500px"]}/>
                            </Link>
                        </Flex>
                    </Box>
                    <Box width={[1/6, 1/10]} />
                </Flex>
            </WhitePage>
        )
  }
}