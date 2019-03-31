import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from '@rebass/grid'
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ContentArea from "../components/ContentArea"
import PageLocation from "../components/PageLocation"

class BlogIndex extends React.Component {

  render() {

    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <PageLocation path={["/", "blog"]}>
        <Flex>
          <Box width={1/10} />
          <Box width={8/10}>
            <ContentArea>
            <SEO
              title="All posts"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <Bio />
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
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
          </Box>
          <Box width={1/10} />
        </Flex>
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
