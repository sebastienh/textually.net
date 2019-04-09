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
    const markdownSpecificElements = data.markdownSpecificElements.edges[0].node;
    const markdownUaStylesheet = data.markdownUaStylesheet.edges[0].node;
    const mdBlockquote = data.mdBlockquote.edges[0].node;
    const mdCode = data.mdCode.edges[0].node;
    const mdContents = data.mdContents.edges[0].node;
    const mdEmphasis = data.mdEmphasis.edges[0].node;
    const mdHeaders = data.mdHeaders.edges[0].node;
    const mdHorizontalBar = data.mdHorizontalBar.edges[0].node;
    const mdImage = data.mdImage.edges[0].node;
    const mdLink = data.mdLink.edges[0].node;
    const mdLists = data.mdLists.edges[0].node;
    const mdReference = data.mdReference.edges[0].node;
    const mdStrikethrough = data.mdStrikethrough.edges[0].node;
    const mdTable = data.mdTable.edges[0].node;

    return (
        <PageLocation path={["/", "stylo", "documentation", "markdown"]}>
            <SEO
              title="Stylo App - Documentation - Markdown"
              keywords={[
                `textually`, 
                `stylo`, 
                `markdown`, 
                `md`, 
                `commonmark`,
                `gfm`,
                `Github Flavored Markdown`]}
            />  
            <TitledSidebar links={[
                {
                    href: "#introduction",
                    title: "Introduction"
                },
                {
                    href: "#specific-elements",
                    title: "Markdown Specific Elements"
                },
                {
                    href: "#headers",
                    title: "Headers"
                },
                {
                    href: "#horizontal-bar",
                    title: "Horizontal Bar"
                },
                {
                    href: "#emphasis",
                    title: "Emphasis"
                },
                {
                    href: "#strikethrough",
                    title: "Strikethrough"
                },
                {
                    href: "#blockquote",
                    title: "Blockquote"
                },
                {
                    href: "#lists",
                    title: "Lists"
                },
                {
                    href: "#code",
                    title: "Code"
                },
                {
                    href: "#table",
                    title: "Table"
                },
                {
                    href: "#reference",
                    title: "Reference"
                },
                {
                    href: "#link",
                    title: "Link"
                },
                {
                    href: "#image",
                    title: "Image"
                },
                {
                    href: "#ua-stylesheet",
                    title: "Markdown UA stylesheet"
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
                        Markdown
                        </Text>
                    </Flex>
                </ContentResizer>
            </PageHeaderSection>  
            <DocumentationPageTemplate>
                <Flex flexDirection={"column"}>
                    <TitledSection id={"introduction"} number={1}>    
                        <Box>
                            <MarkdownContent post={mdContents} />
                        </Box>  
                    </TitledSection>
                    <TitledSection id={"specific-elements"} number={2}>
                        <Box>
                            <MarkdownContent post={markdownSpecificElements}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"headers"} number={3}>
                        <Box>
                            <MarkdownContent post={mdHeaders}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"horizontal-bar"} number={4}>
                        <Box>
                            <MarkdownContent post={mdHorizontalBar}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"emphasis"} number={5}>
                        <Box>
                            <MarkdownContent post={mdEmphasis}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"strikethrough"} number={6}>
                        <Box>
                            <MarkdownContent post={mdStrikethrough}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"blockquote"} number={7}>
                        <Box>
                            <MarkdownContent post={mdBlockquote}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"lists"} number={8}>
                        <Box>
                            <MarkdownContent post={mdLists}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"code"} number={9}>
                        <Box>
                            <MarkdownContent post={mdCode}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"table"} number={10}>
                        <Box>
                            <MarkdownContent post={mdTable}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"reference"} number={11}>
                        <Box>
                            <MarkdownContent post={mdReference}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"link"} number={12}>
                        <Box>
                            <MarkdownContent post={mdLink}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"image"} number={13}>
                        <Box>
                            <MarkdownContent post={mdImage}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"ua-stylesheet"} number={14}>
                        <Box>
                            <MarkdownContent post={markdownUaStylesheet}/>
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
  markdownSpecificElements: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/markdownSpecificElements/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  markdownUaStylesheet: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/markdownUaStylesheet/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdBlockquote: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdBlockquote/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdCode: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdCode/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdContents: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdContents/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  
  mdEmphasis: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdEmphasis/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdHeaders: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdHeaders/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdHorizontalBar: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdHorizontalBar/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdImage: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdImage/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdLink: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdLink/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdLists: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdLists/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdReference: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdReference/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdStrikethrough: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdStrikethrough/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  mdTable: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/mdTable/" } 
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