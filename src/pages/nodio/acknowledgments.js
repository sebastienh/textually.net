import React, { Component } from 'react'
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text, Heading } from 'rebass'
import StyloLogo from "../../images/svg/logo-red.svg"
import PageHeaderSection from "../../components/PageHeaderSection"
import PageSection from "../../components/PageSection"
import PageLocation from "../../components/PageLocation"
import TitledSidebar from "../../components/TitledSidebar"
import MarkdownContent from "../../components/MarkdownContent";
import DocumentationPageTemplate from "../../components/DocumentationPageTemplate"
import TitledSection from "../../components/TitledSection"

export default class Acknowledgments extends Component {


  render() {

    const { data } = this.props;
    const acknowledgments = data.acknowledgments.edges[0].node;
    const fonts = data.fonts.edges[0].node;
    const libraries = data.libraries.edges[0].node;
    const bitstream = data.bitstream.edges[0].node;
    const sil = data.sil.edges[0].node;
    const apache = data.apache.edges[0].node;
    const licences = data.licences.edges[0].node;
    
    return (

        <PageLocation path={["/", "nodio", "acknowledgments"]}>
            <SEO
              title="Nodio Acknowledgments"
              keywords={[
                `textually`, 
                `libraries`, 
                `fonts`, 
                `licences`]}
            />  
            <TitledSidebar links={[
                {
                    href: "/nodio/acknowledgments#index",
                    title: "Acknowledgments"
                },
                {
                    href: "/nodio/acknowledgments#fonts",
                    title: "Fonts"
                },
                {
                    href: "/nodio/acknowledgments#libraries",
                    title: "Libraries"
                },
                {
                    href: "/nodio/acknowledgments#licences",
                    title: "Licences"
                }
            ]}>            
            {/* <Flex mt={140} flexDirection={"row"} justifyContent={"center"}> 
              <Heading color={"#444545"} fontSize={[8]}>Acknowledgments</Heading>
            </Flex> */}
            <Flex mt={140} flexDirection={"row"} justifyContent={"center"}> 
              <Heading  color={"#444545"} fontSize={[5,6,8]}>Acknowledgments</Heading>
            </Flex>
            <DocumentationPageTemplate>
                <Flex flexDirection={"column"}>
                    <TitledSection id={"index"} number={1}>    
                        <Box>
                            <MarkdownContent post={acknowledgments} />
                        </Box>  
                    </TitledSection>
                    <TitledSection id={"fonts"} number={2}>
                        <Box number={1}>
                            <MarkdownContent post={fonts}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"libraries"} number={3}>
                        <Box number={2}>
                            <MarkdownContent post={libraries}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"licences"} number={4}>
                        <Box number={3}>
                            <MarkdownContent post={licences}/>
                        </Box>
                        <Box id={"sil"} number={4}>
                            <MarkdownContent post={sil}/>
                        </Box>
                        <Box id={"apache"} number={5}>
                            <MarkdownContent post={apache}/>
                        </Box>
                        <Box id={"bitstream"} number={6}>
                            <MarkdownContent post={bitstream}/>
                        </Box>
                    </TitledSection>
                </Flex>
            </DocumentationPageTemplate>
            </TitledSidebar>
        </PageLocation>
    )
  }
}

export const query = graphql`
query {
  acknowledgments: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/acknowledgments/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  fonts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/fonts/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  libraries: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/libraries/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  licences: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/licences/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  bitstream: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/bitstream/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  sil: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/sil/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  apache: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/apache/" } 
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