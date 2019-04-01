import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from '@rebass/grid'
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ContentArea from "../components/ContentArea"
import PageLocation from "../components/PageLocation"
import styled from "styled-components";
import PageTemplate from "../components/PageTemplate"

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
          <PageTemplate>
            
            <h1>Blog</h1>
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
          </PageTemplate>
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
