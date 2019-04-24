import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Box } from '@rebass/grid'
import { Heading } from 'rebass'
import SEO from "../components/seo"
import styled from "styled-components";
import PageLocation from "../components/PageLocation"
import DocumentationPageTemplate from "../components/DocumentationPageTemplate"
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

class Textually extends React.Component {

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
    const textuallyAbout =  data.textuallyAbout.edges[0].node

    const {
      height
    } = this.state;

    return (
      <React.Fragment>
        <SEO
          title="Textually"
          keywords={[`textually`, `text editors`, `stylo`, `markdown`, `css`, `html`]}
        />
        <PageLocation path={["/", "about"]}>
          <DocumentationPageTemplate height={height}>
              <Flex mt={60} flexDirection={"row"} justifyContent={"center"}> 
                <Heading  color={"#D74E09"} fontSize={[8]}>Textually</Heading>
              </Flex>
              <MarkdownContent color={"white"} post={textuallyAbout} />
          </DocumentationPageTemplate>  
        </PageLocation>
      </React.Fragment>
    )
  }
}

export default Textually

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