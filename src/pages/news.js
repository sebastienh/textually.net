import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from '@rebass/grid'
import { Heading } from 'rebass'
import SEO from "../components/seo"
import styled from "styled-components";
import PageLocation from "../components/PageLocation"
import DocumentationPageTemplate from "../components/DocumentationPageTemplate"
import MarkdownContent from "../components/MarkdownContent"
import { rhythm } from "../utils/typography"
import ContentArea from "../components/ContentArea"

const BlogLink = styled(Link)`
  color: black;
`

export const HeaderDivider = styled.hr`
  background-color: #D6E5E3;
  height: 10px;
`;

export const HeadingLevel1 = styled.h1`
  font-family: "Big Moore";
  font-weight: 500;
  font-style: italic;
`;

class News extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          width: 0,
          height: 0
      }
      this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      })
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize(e) {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
  
    render() {
  
      const { data } = this.props
      const posts = data.allMarkdownRemark.edges
  
      return (
        <PageLocation path={["/", "news"]}>
            <SEO
                title="All posts"
                keywords={[`blog`, `html`, `css`, `markdown`, `md`]}
              />
            <DocumentationPageTemplate>
              
              <Flex mt={60} flexDirection={"row"} justifyContent={"center"}> 
                <Heading  color={"#D74E09"} fontSize={[8]}>News</Heading>
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
                      <MarkdownContent  post={node} />
                    </div>
                  )
                })}
              </ContentArea>       
            </DocumentationPageTemplate>
        </PageLocation>
      )
    }
  }

export default News

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
        fileAbsolutePath: { regex: "/.*news.*/" } 
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
          htmlAst
        }
      }
    }
  }
`