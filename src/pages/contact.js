import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import SEO from "../components/seo"
import { Flex, Text, Heading } from "rebass";
import PageLocation from "../components/PageLocation"
import PageTemplate from "../components/PageTemplate"
import { graphql } from 'gatsby'

export default class Contact extends Component {

  render() {

    const { data } = this.props
    const textuallyContact =  data.textuallyContact.edges[0].node

    return (
      <PageLocation path={["/", "contact"]}>
            <SEO
              title="Contact Us"
              keywords={[`contact`, `textually`, `email`]}
            />
          <PageTemplate>
            {/* <MarkdownContent post={textuallyContact} /> */}
            <Flex mt={60} flexDirection={"row"} justifyContent={"center"}> 
              <Heading  color={"#444545"} fontSize={[5,6,8]}>Contact Us</Heading>
            </Flex>
            <Flex mt={40} flexDirection={"row"} justifyContent={"center"}>
              <Text> 
                Leave us any comment, any suggestion we will be happy to answer.
              </Text>
            </Flex>
            <ContactForm mt={60}/>
          </PageTemplate>
      </PageLocation>
    )
  }
}

export const query = graphql`
query {
  textuallyContact: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { fields: { 
      slug: { eq: "/textually-contact/" } } }) {
    edges {
      node {
        htmlAst
      }
    }
  }
}
`;