import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components";
import PageLocation from "../components/PageLocation"

export const HeaderDivider = styled.hr`
  background-color: #D6E5E3;
  height: 10px;
`;

export const HeadingLevel1 = styled.h1`
  font-family: "Big Moore";
  font-weight: 500;
  font-style: italic;
`;

export const Content = styled.div`
  font-family: "Avenir Next";
  font-weight: 400;
`;

class Index extends React.Component {

  render() {

    const { data } = this.props
    const textuallyAboutHtml =  data.textuallyAbout.edges[0].node.html

    return (
      <PageLocation path={["/", "about"]}>
        <SEO
          title="Home"
          keywords={[`textually`, `text editors`, `stylo`, `markdown`, `css`, `html`]}
        />
        <HeadingLevel1>This is all about text!</HeadingLevel1>
        <HeaderDivider />
        <Content dangerouslySetInnerHTML={{ __html: textuallyAboutHtml }} />
      </PageLocation>
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
        html
      }
    }
  }
}
`;