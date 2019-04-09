import React, { Component } from 'react'
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
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

    return (

        <PageLocation path={["/", "stylo", "acknowledgments"]}>
            <SEO
              title="Stylo Acknowledgments"
              keywords={[
                `textually`, 
                `libraries`, 
                `fonts`, 
                `licences`]}
            />  
            <TitledSidebar links={[
                {
                    href: "/stylo/acknowledgments#index",
                    title: "Index"
                },
                {
                    href: "/stylo/acknowledgments#fonts",
                    title: "Fonts"
                },
                {
                    href: "/stylo/acknowledgments#libraries",
                    title: "Libraries"
                }
            ]}>            
            <DocumentationPageTemplate>
                <Flex flexDirection={"column"}>
                    <TitledSection id={"index"} number={1}>    
                        <Box>
                            <MarkdownContent post={acknowledgments} />
                        </Box>  
                    </TitledSection>
                    <TitledSection id={"fonts"} number={2}>
                        <Box number={11}>
                            <MarkdownContent post={fonts}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"libraries"} number={3}>
                        <Box number={14}>
                            <MarkdownContent post={libraries}/>
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
}
`;