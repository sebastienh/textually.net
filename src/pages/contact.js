import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import SEO from "../components/seo"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";
import PageLocation from "../components/PageLocation"

export default class Contact extends Component {

  render() {
    return (
      <PageLocation path={["/", "contact"]}>
          <Flex>
              <Box 
                width={[
                    8/9,
                ]}>
                <ContactForm />
              </Box>
              <Box width={[
                    1/9,
                ]}>
              </Box>
          </Flex> 
      </PageLocation>
    )
  }
}