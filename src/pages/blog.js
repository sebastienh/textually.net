import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from '@rebass/grid'
import { Heading } from 'rebass'
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ContentArea from "../components/ContentArea"
import PageLocation from "../components/PageLocation"
import styled from "styled-components";
import DocumentationPageTemplate from "../components/DocumentationPageTemplate"

const BlogLink = styled(Link)`
  color: black;
`

class BlogIndex extends React.Component {

  render() {

    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <PageLocation path={["/", "blog"]}>
          <SEO
              title="All posts"
              keywords={[`blog`, `html`, `css`, `markdown`, `md`]}
            />
          <DocumentationPageTemplate>
            
            <Flex mt={60} flexDirection={"row"} justifyContent={"center"}> 
              <Heading  color={"#444545"} fontSize={[8]}>Blog</Heading>
            </Flex>
            <ContentArea>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <BlogLink style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </BlogLink>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                )
              })}
            </ContentArea>       
          </DocumentationPageTemplate>
      </PageLocation>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], order: DESC 
      }, 
      filter: { 
        fileAbsolutePath: { regex: "/.*blog.*/" } 
      }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
