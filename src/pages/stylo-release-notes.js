import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SideArea from "../components/SideArea"
import ContentArea from "../components/ContentArea"
import Accordion from "../components/Accordion"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import StyledAccordion from "../components/StyledAccordion";
import StyledAccordionItem from "../components/StyledAccordionItem";
import Pointer from "../icons/pointer"
import CircledNumber from "../components/CircledNumber"
import Image from 'gatsby-image';
import StyloLogo from "../../images/logo-green.svg"
import theme from "../styles/theme.js";
import PageHeaderSection from "../components/PageHeaderSection"
import StyloFourColoredScreenshots from "../components/StyloFourColoredScreenshots"
import PageSection from "../components/PageSection"
import PageLocation from "../components/PageLocation"
import PageScrollingNumbers from "../components/PageScrollingNumbers"

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

const CircledNumbersContainer = styled(Flex)`
    margin:0px;
    padding: 0px;
    width: 10%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
`;

const RightSideContainer = styled(Box)`

    margin:0px;
    padding: 0px;
    width: 60px;
    height: 100%;
    /* position: fixed; */
    /* top: 0; */
    /* bottom: 0; */
    /* justify-content: center; */
    /* flex-direction: column; */
`;

const CenterHorizontally = styled(Flex)`

    height: 100%;
    justify-content: center;
    flex-direction: row;
`

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const GreyPage = styled.section`
  background-color: #fafafa;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const ContentResizer = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 100vh;
  height: 100px;
`

class StyloReleaseNotes extends React.Component {

  render() {

    const { data } = this.props;
    const styloReleaseNotes =  data.styloReleaseNotes.edges[0].node.html;

    return (
      <PageLocation path={["/", "stylo", "release-notes"]}>
                {/* <PageScrollingNumbers links={[
              "/stylo#intro",
              "/stylo#four-colored-screenshots-page",
              "/stylo#last"
            ]}> */}
            <SEO
              title="Release Notes"
              keywords={[`stylo`, `releases`, `notes`]}
            />
          <Flex p={0}
                  m={0}>
              <WhitePage>
                  <Flex>
                      <Box width={1/10} />
                      <Box width={8/10}>
                          <Text>Text</Text>
                      </Box>
                      <Box width={1/10} />
                  </Flex>
              </WhitePage>
          </Flex>
          {/* </PageScrollingNumbers> */}
      </PageLocation>
    )
  }
}
export default StyloReleaseNotes

export const query = graphql`
query {
  styloReleaseNotes: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { fields: { 
      slug: { eq: "/stylo-release-notes/" } } }) {
    edges {
      node {
        html
      }
    }
  }
}
`;