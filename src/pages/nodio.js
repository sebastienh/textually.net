import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ContentArea from "../components/ContentArea"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import NodioLogo from "../images/svg/nodio-logo.svg"
import PageHeaderSection from "../components/PageHeaderSection"
import PageSection from "../components/PageSection"
import PageLocation from "../components/PageLocation"
import ReadyToTryNodio from "../components/ReadyToTryNodio"
import NodioIntro from "../components/NodioIntro"
import NodioOtherFeatures from "../components/NodioOtherFeatures"
import NodioOutline from "../components/NodioOutline"
import NodioTags from "../components/NodioTags"
import NodioFilteredTags from "../components/NodioFilteredTags"
import NodioNavigatedTags from "../components/NodioNavigatedTags"
import NodioAddText from "../components/NodioAddText"
import NodioEditorsPane from "../components/NodioEditorsPane"
import NodioRecordFromTheEditor from "../components/NodioRecordFromTheEditor"
import StyloCommonMark from "../components/StyloCommonMark";
import ShareYourWork from "../components/ShareYourWork"


export const HeaderDivider = styled.hr`
  background-color: #D6E5E3;
  height: 10px;
`;

export const SectionDivider = styled.hr`
  background-color: #000;
  height: 6px;
`;

export const HeadingLevel1 = styled.h1`
  font-family: "Big Moore";
  font-weight: 500;
  font-style: italic;
  margin-top: 0;
`;

export const Content = styled.div`
  
`;

export const AccordionText = styled.div`
  font-family: "Avenir Next";
  font-weight: 400;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ContentResizer = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 100vh;
  height: 100px;
`

export default class NodioIndex extends React.Component {

    render() {

        const { data } = this.props;

        return (
            <PageLocation path={["/", "nodio", "about"]}>
                <SEO
                    title="Nodio App"
                    keywords={[
                        `textually`,
                        `text editor`,
                        `nodio`,
                        `markdown`,
                        `audio`,
                        `md`,
                        `commonmark`,
                        `css`,
                        `html`]}
                />
                <Flex p={0} m={0}>
                    <ContentArea>
                        <PageSection id={"intro"} number={1}>
                            <PageHeaderSection>
                                <ContentResizer>
                                    <Flex mt={80} justifyContent={"center"} flexDirection={"row"}>
                                        <NodioLogo />
                                    </Flex>
                                    <Flex justifyContent={"center"} flexDirection={"row"}>
                                        <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                            Nodio
                                        </Text>
                                    </Flex>
                                </ContentResizer>
                            </PageHeaderSection>
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-intro"} number={2}>
                            <NodioIntro />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-outline"} number={3}>
                            <NodioOutline />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-editors-pane"} number={4}>
                            <NodioEditorsPane />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-tags"} number={5}>
                            <NodioTags />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-filtered-tags"} number={6}>
                            <NodioFilteredTags />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-navigated-tags"} number={7}>
                            <NodioNavigatedTags />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-record-inside-editor"} number={8}>
                            <NodioRecordFromTheEditor />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-share-your-work"} number={9}>
                            <ShareYourWork />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"stylo-commonmark"} number={10}>
                            <StyloCommonMark />
                        </PageSection>
                        <PageSection mt={[20,60,80]} id={"nodio-other-features"} number={11}>
                            <NodioOtherFeatures />
                        </PageSection>
                        <PageSection bg={"#f6f6f6"}  mt={[20,60,80]} id={"ready-to-try-stylo"} number={12}>
                            <ReadyToTryNodio />
                        </PageSection>
                    </ContentArea>
                </Flex>
            </PageLocation>
        )
    }
}
