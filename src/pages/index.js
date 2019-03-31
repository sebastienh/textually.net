import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from '@rebass/grid'
import SEO from "../components/seo"
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

export const MarkdownContent = styled.div`
  font-weight: 400;

  h1 {
    color: #777;
  }

`;

class Index extends React.Component {

  render() {

    const { data } = this.props
    const textuallyAboutHtml =  data.textuallyAbout.edges[0].node.html

    return (
      <React.Fragment>
        <SEO
          title="Home"
          keywords={[`textually`, `text editors`, `stylo`, `markdown`, `css`, `html`]}
        />
        <PageLocation path={["/", "about"]}>

          <Flex>
            <Box width={1/10} />
            <Box width={8/10}>
              <MarkdownContent dangerouslySetInnerHTML={{ __html: textuallyAboutHtml }} />
            </Box>
            <Box width={1/10} />
          </Flex>        
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
        html
      }
    }
  }
}
`;