import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import SEO from "../components/seo"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";

const Contact = () => {
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
  );
};

export default Contact;