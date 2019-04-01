import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from '@rebass/grid'
import SEO from "../components/seo"
import styled from "styled-components";
import PageLocation from "../components/PageLocation"
import PageTemplate from "../components/PageTemplate"
import MarkdownContent from "../components/MarkdownContent"

export const HeaderDivider = styled.hr`
  background-color: #D6E5E3;
  height: 10px;
`;

export const HeadingLevel1 = styled.h1`
  font-family: "Big Moore";
  font-weight: 500;
  font-style: italic;
`;

class Index extends React.Component {

  render() {

    const { data } = this.props
    const textuallyAbout =  data.textuallyAbout.edges[0].node

    return (
      <React.Fragment>
        <SEO
          title="Home"
          keywords={[`textually`, `text editors`, `stylo`, `markdown`, `css`, `html`]}
        />
        <PageLocation path={["/", "about"]}>
          <PageTemplate>
              <MarkdownContent post={textuallyAbout} />
          </PageTemplate>  
        </PageLocation>
      </React.Fragment>
    )
  }
}

export default Index

export const query = graphql`
query {
  textuallyAbout: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { fields: { 
      slug: { eq: "/textually-about/" } } }) {
    edges {
      node {
        htmlAst
      }
    }
  }
}
`;