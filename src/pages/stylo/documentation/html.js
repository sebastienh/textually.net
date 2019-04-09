import React from "react"
import { graphql } from "gatsby"
import SEO from "../../../components/seo"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import StyloLogo from "../../../images/svg/logo-red.svg"
import PageHeaderSection from "../../../components/PageHeaderSection"
import PageSection from "../../../components/PageSection"
import PageLocation from "../../../components/PageLocation"
import TitledSidebar from "../../../components/TitledSidebar"
import MarkdownContent from "../../../components/MarkdownContent";
import DocumentationPageTemplate from "../../../components/DocumentationPageTemplate"
import TitledSection from "../../../components/TitledSection"

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

class StyloDocumentation extends React.Component {

  render() {

    const { data } = this.props;
    const attributes = data.attributes.edges[0].node;
    const htmlClass = data.class.edges[0].node;
    const definitions = data.definitions.edges[0].node;
    const document = data.document.edges[0].node;
    const element = data.element.edges[0].node;
    const htmlContents = data.htmlContents.edges[0].node;
    const id = data.id.edges[0].node;

    return (
        <PageLocation path={["/", "stylo", "documentation", "html"]}>
            <SEO
              title="Stylo - Documentation - HTML"
              keywords={[
                `textually`, 
                `stylo`, 
                `html`]}
            />  
            <TitledSidebar links={[
                {
                    href: "#introduction",
                    title: "Introduction"
                },
                {
                    href: "#document",
                    title: "Document"
                },
                {
                    href: "#element",
                    title: "Element"
                },
                {
                    href: "#definitions",
                    title: "Definitions"
                },
                {
                    href: "#attributes",
                    title: "Attributes"
                },
                {
                    href: "#id",
                    title: "Id"
                },
                {
                    href: "#class",
                    title: "Class"
                }
            ]}>            
            <PageHeaderSection id={"header"}>
                <ContentResizer>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                        <StyloLogo width={[
                        "200px",
                        "300px",
                        "500px"]}/>
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                        <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        HTML
                        </Text>
                    </Flex>
                </ContentResizer>
            </PageHeaderSection>  
            <DocumentationPageTemplate>
                <Flex flexDirection={"column"}>
                    <TitledSection id={"introduction"} number={1}>    
                        <Box>
                            <MarkdownContent post={htmlContents} />
                        </Box>  
                    </TitledSection>
                    <TitledSection id={"document"} number={2}>
                        <Box>
                            <MarkdownContent post={document}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"element"} number={3}>
                        <Box>
                            <MarkdownContent post={element}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"definitions"} number={4}>
                        <Box>
                            <MarkdownContent post={definitions}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"attributes"} number={5}>
                        <Box>
                            <MarkdownContent post={attributes}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"id"} number={6}>
                        <Box>
                            <MarkdownContent post={id}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"class"} number={7}>
                        <Box>
                            <MarkdownContent post={htmlClass}/>
                        </Box>
                    </TitledSection>
                </Flex>
            </DocumentationPageTemplate>
            </TitledSidebar>
        </PageLocation>
    )
  }
}
export default StyloDocumentation

export const query = graphql`
query {
  attributes: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/attributes/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  class: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/class/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  definitions: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/definitions/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  document: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/document/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  element: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/element/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  htmlContents: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/htmlContents/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  id: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/id/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
}
`;