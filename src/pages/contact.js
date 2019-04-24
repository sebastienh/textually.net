import React, { Component } from 'react';
import SEO from "../components/seo"
import PageLocation from "../components/PageLocation"
import PageTemplate from "../components/PageTemplate"
import { graphql } from 'gatsby'
import styled from "styled-components";
import { Flex, Heading, Link, Text, Button } from "rebass";

const Container = styled(Flex)`
  justify-content: center;

  form {
    p {
      label,
      input {
        display: block;
      }
      
      /* desktop */   
      @media (min-width: 1200px) {
        input {
          min-width: 400px;
        }
      }

      /* tablet */   
      @media (min-width: 800px) and (max-width: 1200px) {
        input {
          min-width: 350px;
        }
      }

      /* mobile */   
      @media (max-width: 450px) {
        input {
          min-width: 220px;
        }
      }
    }
  }
`;

const Label = styled.label`
  margin: 1rem 0 1rem 0;
  color: black;
`; 

const Input = styled.input`
  height: 2rem;
  border: none;
  padding: 0.25rem 1rem;
  box-shadow: 0 1px 0 black;
  border-radius: 1px;
  -webkit-box-shadow: 0 1px 0 black;
  overflow: auto;
  font: inherit;
  -webkit-appearance: none;

  &:-internal-autofill-previewed {
    background-color: #FFFCF7 !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }

  &:-internal-autofill-selected {
    background-color: #FFFCF7 !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }

  &:focus {
    outline: 0;
    outline-offset: 0px;
  }
`;

const TextArea = styled.textarea`
  height: 2rem;
  box-shadow: 0 0px 0;

  /* background-color: #dedede; */
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
  padding: 1rem;
  resize: vertical;
  min-height: 150px;
  width: 100%;

  &:focus {
    outline: 0;
    outline-offset: 0px;
  }
`;

const FormButton = styled(Button)`
  background-color: white;
  border-style: solid;
  border-color: black;
  border-radius: 0px;
  border-width: 1px;
  color: black;
`

export default class Index extends Component {

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
              <Heading  color={"#D74E09"} fontSize={[5,6,8]}>Contact Us</Heading>
            </Flex>
            <Flex mt={40} flexDirection={"row"} justifyContent={"center"}>
              <Text> 
                At Textually, we try to   
                Leave us any comment, any suggestion we will be happy to answer.
                
              </Text>
            </Flex>

            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


                {/* <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input hidden className="hidden" name="bot-field" />
                    <p>
                        <Label htmlFor="name">Name</Label>
                        <Input name="name" type="text" required />
                    </p>
                    <p>
                        <Label htmlFor="email">E-Mail</Label>
                        <Input name="email" type="email" required />
                    </p>
                    <p>
                        <Label htmlFor="message">Your Message</Label>
                        <TextArea name="message" required />
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        <FormButton type="submit" value="Send" id="Form-submit">
                            Send
                        </FormButton>
                    </p>
                </form> */}

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