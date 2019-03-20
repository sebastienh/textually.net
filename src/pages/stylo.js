import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import SideArea from "../components/SideArea"
import ContentArea from "../components/ContentArea"
import Accordion from "../components/Accordion"
import { Flex, Box, Text } from '@rebass/grid'
import StickyBox from "react-sticky-box";

export const HeaderDivider = styled.hr`
  background-color: #D6E5E3;
  height: 10px;
`;

export const HeadingLevel1 = styled.h1`
  font-family: "Big Moore";
  font-weight: 500;
  font-style: italic;
  margin-top: 0;
`;

export const Content = styled.div`
  font-family: "Avenir Next";
  font-weight: 400;
`;

export const AccordionText = styled.div`
  font-family: "Avenir Next";
  font-weight: 400;
  width: 100%;
  margin: 0;
  padding: 0;
`;

class Index extends React.Component {

  render() {

    const { data } = this.props
    const styloAboutHtml =  data.styloAbout.edges[0].node.html

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`textually`, `text editors`, `stylo`, `markdown`, `css`, `html`]}
        />
        <Box style={{display: "flex", alignItems: "flex-start"}} mt={100}>
          <StickyBox offsetTop={20} offsetBottom={20}>
            <Accordion title="Static content" openByDefault>
              <AccordionText>Lorem ipsum dolor sit amet, </AccordionText>
              <Accordion title="Static content">
                <AccordionText>Lorem ipsum </AccordionText>
              </Accordion>
            </Accordion>
          </StickyBox>
          <ContentArea>
            <HeadingLevel1>Creativity is about freedom!</HeadingLevel1>
            <HeaderDivider />
            <Content dangerouslySetInnerHTML={{ __html: styloAboutHtml }} />
            </ContentArea>
        </Box>
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
query {
  styloAbout: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { fields: { 
      slug: { eq: "/stylo-about/" } } }) {
    edges {
      node {
        html
      }
    }
  }
}
`;