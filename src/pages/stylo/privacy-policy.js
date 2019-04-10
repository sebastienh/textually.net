import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../../components/seo"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text, Heading } from 'rebass'
import theme from "../../styles/theme.js";
import PageHeaderSection from "../../components/PageHeaderSection"
import PageSection from "../../components/PageSection"
import PageLocation from "../../components/PageLocation"
import PageScrollingNumbers from "../../components/PageScrollingNumbers"
import MarkdownContent from "../../components/MarkdownContent"
import PageTemplate from "../../components/PageTemplate"
import DocumentationPageTemplate from "../../components/DocumentationPageTemplate"

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

class StyloPrivacyPolicy extends React.Component {

  render() {

    const { data } = this.props;
    const styloPrivacyPolicy =  data.styloPrivacyPolicy.edges[0].node

    return (
      <PageLocation path={["/", "stylo", "privacy-policy"]}>
                {/* <PageScrollingNumbers links={[
              "/stylo#intro",
              "/stylo#four-colored-screenshots-page",
              "/stylo#last"
            ]}> */}
            <SEO
              title="Release Notes"
              keywords={[`stylo`, `releases`, `notes`]}
            />
            <Flex mt={120} flexDirection={"row"} justifyContent={"center"}> 
              <Heading  color={"#D74E09"} fontSize={[8]}>Stylo Privacy Policy</Heading>
            </Flex>
            <DocumentationPageTemplate>
                <MarkdownContent post={styloPrivacyPolicy} />
            </DocumentationPageTemplate>
      </PageLocation>
    )
  }
}
export default StyloPrivacyPolicy

export const query = graphql`
query {
  styloPrivacyPolicy: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { fields: { 
      slug: { eq: "/stylo-privacy-policy/" } } }) {
    edges {
      node {
        htmlAst
      }
    }
  }
}
`;