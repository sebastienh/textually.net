import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import SideArea from "../components/SideArea"
import ContentArea from "../components/ContentArea"
import Accordion from "../components/Accordion"
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import StyledAccordion from "../components/StyledAccordion";
import StyledAccordionItem from "../components/StyledAccordionItem";
import Pointer from "../icons/pointer"

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
        <Flex 
          mt={100}
          mb={100}>
          <Box 
                width={[
                    0,
                    1/4
                ]}
                ml={40}
                pr={40}
            >
            <Flex 
              css={{
                position: '-webkit-sticky',
                position: 'sticky',
                top: '120px',
                bottom: '0px'
              }}
              flexDirection={"column"}
              width={[
                1
              ]}
            >
              <StyledAccordion title="Documentation">
                <StyledAccordion title="Stylo">
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                </StyledAccordion>
                <StyledAccordion title="HTML">
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                </StyledAccordion>
                <StyledAccordion title="Markdown">
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                </StyledAccordion>
                <StyledAccordion title="CSS">
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                  <StyledAccordionItem title="Lorem ipsum" />
                </StyledAccordion>
              </StyledAccordion>
              <Text ml={10} fontSize={"15px"} fontWeight={300}>Privacy Policy</Text>
            </Flex>
          </Box>
          <ContentArea>
            <HeadingLevel1>Creativity is about freedom!</HeadingLevel1>
            <HeaderDivider />
            <Content dangerouslySetInnerHTML={{ __html: styloAboutHtml }} />
            </ContentArea>
        </Flex>
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