import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text, Heading } from 'rebass'
import In from "../../images/svg/in.svg"
import Share from "../../images/svg/share.svg"
import Statistics from "../../images/svg/statistics.svg"
import Open from "../../images/svg/open.svg"
import SectionContainer from "../SectionContainer"

const Page = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const H1 = styled.h1`
    margin: 0;
    margin-bottom: 20px;
`


function Feature(props) {

    const {
        icon,
        title,
        text,
        ...other
    } = props

    return (
        <Flex {...other} flexDirection={"row"} mt={[20, 40, 60]}>
            <Box width={[2/10]}>
                <Flex flexDirection={"row"} style={{height:"100%"}}>
                    <Box width={[1/4, 2/6]} />
                    <Flex width={[2/4, 2/6]} style={{height:"100%"}} flexDirection={"column"} justifyContent={"center"}>
                        {icon}
                    </Flex>
                    <Box width={[1/4, 2/6]} />
                </Flex>
            </Box>
            <Box width={[8/10]}>
                <Flex style={{height:"100%"}} flexDirection={"column"} justifyContent={"center"}>
                    <Flex style={{height:"100%"}} flexDirection={"column"}>
                        <Box>
                            <Heading mb={[10, 20, 30]} fontSize={[14, 20, 30]}>{title}</Heading>
                        </Box>
                        <Box>
                            <Text fontSize={[10, 12, 20]} color={"#848689"}>{text}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default class NodioOtherFeatures extends Component {

    render() {

        return (
            <Page>
                <SectionContainer>
                    <Feature
                        icon={<Open />}
                        title={"Open."}
                        text={"Nodio share the same format as Stylo and is designed to be open and readable by any text editor or version control system. It consists of a wrapper directory around plain text files in json, Markdown and CSS format."}
                    />
                    <Feature
                        icon={<Share />}
                        title={"Accessible."}
                        text={"Export to HTML, Word, PDF or even Markdown and plain text."}
                    />
                    <Feature
                        icon={<Statistics />}
                        title={"Statistics."}
                        text={"Nodio takes care of tracking characters, sentences, paragraphs and pages count along with reading time estimates for slow, average and fast reader. Want to know how many words you wrote since you started your writing session? Nodio _sessions_ will let you know just that!"}
                    />
                </SectionContainer>
            </Page>
        )
    }
}
