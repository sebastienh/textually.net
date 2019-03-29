import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import SEO from "../components/seo"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";
import LocationContext from "../context/LocationContext"

export default class Contact extends Component {

  componentDidMount() {

    console.log("Trying to update location context");
    this.context.updatePagePath(["/", "contact"]);
  }

  render() {
    return (
      <Layout>
  
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
      </Layout>
    )
  }
}

Contact.contextType = LocationContext; 